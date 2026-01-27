import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

function AdminDashboard() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reservations
  const fetchReservations = async () => {
    try {
      const q = query(
        collection(db, "reservations"),
        orderBy("createdAt", "desc"),
      );
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReservations(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // Update reservation status
  const updateStatus = async (id, newStatus) => {
    try {
      const ref = doc(db, "reservations", id);
      await updateDoc(ref, { status: newStatus });

      // Update UI instantly
      setReservations((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item,
        ),
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h4 className="text-muted">Loading reservations...</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-teal mb-4">Admin Dashboard</h1>

      {reservations.length === 0 ? (
        <p className="text-muted">No reservations yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Request</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {reservations.map((r) => (
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.phone}</td>
                  <td>{r.date}</td>
                  <td>{r.time}</td>
                  <td>{r.guests}</td>
                  <td>{r.request || "—"}</td>

                  <td>
                    <span
                      className={`badge text-uppercase ${
                        r.status === "approved"
                          ? "bg-success p-2"
                          : r.status === "rejected"
                            ? "bg-danger p-2"
                            : "bg-warning text-dark p-2"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>

                  <td>
                    {r.status === "pending" && (
                      <>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() => updateStatus(r.id, "approved")}
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => updateStatus(r.id, "rejected")}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
