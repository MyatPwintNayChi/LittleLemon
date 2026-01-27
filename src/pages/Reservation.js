import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image from "../images/Reserved Sign for Restaurants Bars Cafes _ Personalized Reserved Table Signs _ Sign for Business _ Reception Sign _ Hotel Sign - Etsy.jpeg";
import Footer from "../components/Footer";
import LemonImage from "../images/lemon.png";
import CloseImage from "../images/closed.png";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

function Reservation() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    time: "",
    request: "",
  });
  const generateTimes = (start, end) => {
    const times = [];
    let [hour, minute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    while (hour < endHour || (hour === endHour && minute <= endMinute)) {
      const h = String(hour).padStart(2, "0");
      const m = String(minute).padStart(2, "0");
      times.push(`${h}:${m}`);
      minute += 30;
      if (minute >= 60) {
        hour++;
        minute = 0;
      }
    }
    return times;
  };
  const [timeLimits, setTimeLimits] = useState({
    min: "10:00",
    max: "21:30",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday

    if (day === 0) {
      setShowErrorModal(true);
      setFormData({ ...formData, date: "", time: "" });
    } else {
      setFormData({ ...formData, date: e.target.value });
    }

    // Adjust available time based on the day
    if (day === 6) {
      setTimeLimits({ min: "11:00", max: "21:30" }); // Saturday hours
    } else {
      setTimeLimits({ min: "10:00", max: "21:30" }); // Mon–Fri hours
    }

    setFormData({ ...formData, date: e.target.value });
  };

  const handleTimeChange = (e) => {
    setFormData({ ...formData, time: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const phoneRegex = /^(06|08|09)\d{8}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number");
      return;
    }
    setShowConfirmModal(true);
  };

  // const handleConfirmSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessModal(true);
  //   setShowConfirmModal(false);
  // };

  const handleConfirmSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "reservations"), {
        ...formData,
        status: "pending",
        createdAt: Timestamp.now(),
      });

      setShowConfirmModal(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error saving reservation:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: 1,
      date: "",
      time: "",
      request: "",
    });
  };

  const handleCloseModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className="container-fluid main mx-0 px-0 bg-white ">
      <Header />
      <div
        className=" mt-5 reservation-bg d-flex flex-column justify-content-center align-items-center"
        data-aos="fade-right"
      >
        {/* <h1 className=" fw-bold   display-4 text-secondreserved">
          Reservation
        </h1> */}
        <p className="display-3 text-center fw-bold  text-uppercase letter-space about-text">
          Reservation
        </p>
        {/* <p className="text-center text-reserved fst-italic mb-3 fs-5 pb-4 fw-bold w-50">
          Enjoy a cozy dining experience at Little Lemon. Reserve your table in
          advance and let us prepare your perfect meal.
        </p> */}
        <p className="fst-italic fs-4 small-text letter-space text-center">
          Reserve your table in just a few steps.
        </p>
      </div>
      <div className=" form_bg">
        <div className="text-center pt-5 ">
          <h1 className="text-yellow display-5 fw-bold pt-4">
            Book a Table <span className="text-teal"> &nbsp;With Us</span>
          </h1>
          <p className="text-dark fs-5 fst-italic mt-3 mb-5 pb-3 w-50 mx-auto">
            Please fill in the details below to reserve your table. We’ll
            prepare everything in advance to make sure your visit is
            comfortable, smooth, and enjoyable.
          </p>
        </div>
        <div className="container px-3 px-sm-4 px-md-0 pb-0 pb-lg-5 ">
          <form
            onSubmit={handleSubmit}
            className="mx-auto  border border-success shadow-lg p-5 rounded-4  mb-5 bg-white"
            style={{ maxWidth: "980px" }}
            data-aos="fade-right"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <label
                  className="form-label text-teal fw-semibold fs-5"
                  for="name"
                >
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control fs-5"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-teal fw-semibold fs-5">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control fs-5"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label text-teal fw-semibold fs-5">
                  Phone Number*
                </label>
                {/* <input
                  type="tel"
                  name="phone"
                  className="form-control fs-5"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                /> */}

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0X-XXXX-XXXX"
                  pattern="0[0-9]{9}"
                  maxLength="10"
                  required
                  className="form-control fs-5"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-teal fw-semibold fs-5">
                  Guests*
                </label>
                <input
                  type="number"
                  name="guests"
                  className="form-control fs-5"
                  min="1"
                  max="6"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
                <small className="text-yellow   fw-bold fs-6">
                  Maximum 6 guests.
                </small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label text-teal fw-semibold fs-5">
                  Date*
                </label>
                <input
                  type="date"
                  className="form-control fs-5"
                  name="date"
                  value={formData.date}
                  onChange={handleDateChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-teal fw-semibold fs-5">
                  Time*
                </label>
                <select
                  className="form-select fs-5 text-muted"
                  name="time"
                  value={formData.time}
                  onChange={handleTimeChange}
                  disabled={!formData.date}
                >
                  <option value="">Select time</option>
                  {generateTimes(timeLimits.min, timeLimits.max).map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <small className="text-yellow   fw-bold fs-6">
                  {formData.date
                    ? `Available from ${timeLimits.min} to ${timeLimits.max}`
                    : "Please select a date to see available times."}
                </small>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label text-teal fw-semibold fs-5">
                Special Request
              </label>
              <textarea
                name="request"
                className="form-control fs-5"
                rows="5"
                placeholder="Optional"
                value={formData.request}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <Button name="Reserve Now" />
            </div>
          </form>
        </div>
      </div>

      {/* Error Modal for Unavailable Day (Sunday) */}
      <div
        className={`modal fade ${showErrorModal ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src={CloseImage}
                alt="Close"
                className="me-2 ms-1"
                width="38"
              />
              <h5 className="modal-title text-danger fs-3 ">
                Unavailable Day!
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-teal fs-5 ms-1">
                We’re closed on{" "}
                <span className="text-danger fst-italic ">Sundays.</span> Please
                select another date.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success text-white"
                onClick={handleCloseModal}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* confirmation Modal */}
      {showConfirmModal && (
        <div
          className="modal fade show "
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title fs-3 text-teal fw-bold">
                  Confirm <span className="text-yellow">Your Reservation</span>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowConfirmModal(false)}
                />
              </div>

              <div className="modal-body">
                <p className="text-teal fs-5 fw-semibold">
                  Please confirm your reservation details:
                </p>

                <ul className="list-unstyled small fs-5 text-teal">
                  <li>
                    <strong>Name:</strong> {formData.name}
                  </li>
                  <li>
                    <strong>Email:</strong> {formData.email}
                  </li>
                  <li>
                    <strong>Ph number:</strong> {formData.phone}
                  </li>
                  <li>
                    <strong>Guests:</strong> {formData.guests}
                  </li>
                  <li>
                    <strong>Date:</strong>{" "}
                    <span className="text-teal">{formData.date}</span>
                  </li>
                  <li>
                    <strong>Time:</strong> {formData.time}
                  </li>

                  <li>
                    <strong>Special Request:</strong>{" "}
                    {formData.request?.trim() || "None"}
                  </li>
                </ul>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-outline-warning text-uppercase text-teal"
                  onClick={() => setShowConfirmModal(false)}
                >
                  Edit
                </button>

                <button
                  type="submit"
                  className="btn btn-success text-uppercase text-white ms-3"
                  onClick={handleConfirmSubmit}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>

          {/* backdrop */}
        </div>
      )}

      {showSuccessModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content rounded-4 shadow-lg  pt-2">
              {/* Modal Header */}
              <div className="modal-header   px-4 ">
                <h5 className="modal-title fw-bold text-teal fs-2  ">
                  {/* <img
                    src={ConfirmImage}
                    alt="Lemon"
                    className="custom-confirm-img"
                  /> */}
                  Reservation <span className="text-yellow">Confirmed!</span>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowConfirmModal(false)}
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body px-4">
                <p className="mb-3 fs-5 text-teal">
                  Thank you for choosing {""}
                  <span className="text-uppercase fw-bold letter-space-small ">
                    <img
                      src={LemonImage}
                      alt="Lemon"
                      className="custom-lemon-img"
                    />
                    Little Lemon.
                  </span>
                  <br />
                  Your reservation request has been received.
                </p>

                <p className="text-teal  fst-italic  fw-semibold">
                  We look forward to welcoming you and making your experience
                  special.
                </p>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer ">
                <button
                  type="button"
                  className="btn btn-success text-white text-uppercase px-4"
                  onClick={handleSuccessClose}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center mt-5 mb-5 ">
        <h3 className="fw-bold text-teal mb-3 fs-3 ">Operating Hours</h3>
        <p className="mb-1 fs-5">Monday – Friday: 10:00 AM – 10:30 PM</p>
        <p className="mb-1 fs-5">Saturday: 11:00 AM – 10:30 PM</p>
        <p className="text-danger fw-semibold fs-5">Sunday: Closed</p>
        <p className="text-muted mt-3 fs-5 fst-italic pb-4">
          We’re closed on{" "}
          <span className="text-danger fw-semibold">Sundays.</span> Reservations
          are available only during our operating hours.
        </p>
      </div>
    </div>
  );
}
export default Reservation;
