import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image from "../images/Reserved Sign for Restaurants Bars Cafes _ Personalized Reserved Table Signs _ Sign for Business _ Reception Sign _ Hotel Sign - Etsy.jpeg";
import Footer from "../components/Footer";
function Reservation() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
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
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday

    if (day === 0) {
      setShowModal(true);
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
    alert("Reservation submitted successfully!");
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        <p className="fst-italic fs-4 small-text letter-space">
          Enjoy a cozy dining experience at Little Lemon.
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
        <div className="pb-5">
          <form
            onSubmit={handleSubmit}
            className="mx-auto border border-success shadow-lg p-5 rounded-4  mb-5 bg-white"
            style={{ maxWidth: "980px" }}
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label text-teal fw-semibold fs-5">
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
                <input
                  type="tel"
                  name="phone"
                  className="form-control fs-5"
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger fs-4">Unavailable Day</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-teal fs-5">
                We’re closed on Sundays. Please select another date.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning text-dark"
                onClick={handleCloseModal}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 mb-5 ">
        <h3 className="fw-bold text-teal mb-3 fs-3 ">Operating Hours</h3>
        <p className="mb-1 fs-5">Monday – Friday: 10:00 AM – 10:30 PM</p>
        <p className="mb-1 fs-5">Saturday: 11:00 AM – 10:30 PM</p>
        <p className="text-danger fw-semibold fs-5">Sunday: Closed</p>
        <p className="text-muted mt-3 fs-5 fst-italic pb-4">
          We’re closed on Sundays. Reservations are available only during our
          operating hours.
        </p>
      </div>
    </div>
  );
}
export default Reservation;
