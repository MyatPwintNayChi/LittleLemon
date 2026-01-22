import Button from "../components/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Information() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-5 bg-white sec-info-bg">
      <div className="container text-light" data-aos="fade-up">
        <div className="row justify-content-center g-5">
          <div
            className="col-12 col-md-5 text-center  p-4 bg-success bg-opacity-50"
            style={{ zIndex: "1" }}
          >
            <h3 className="mb-4 text-uppercase text-yellow fw-bold">
              Hours Of Operation
            </h3>
            <p className="mb-2 fw-bold text-yellow">MON - FRI</p>
            <p className="text-yellow">10:00am - 10:30pm</p>
            <hr className="border-white mx-auto" style={{ width: "50%" }} />
            <p className="mb-2 fw-bold text-yellow">SAT</p>
            <p className="text-yellow">11:00am - 10:30pm</p>
            <hr className="border-white mx-auto" style={{ width: "50%" }} />
            <p className="mb-2 fw-bold text-yellow">SUN</p>
            <p className="text-danger fw-bold">We are closed.</p>
            <Link to="/reservation" araia-label="Go to reservation page">
              <Button name="make a reservation" />
            </Link>
          </div>

          <div
            className="col-12 col-md-5 text-center  p-4 rounded-lg-end-4 bg-body-tertiary bg-opacity-50  "
            style={{ zIndex: "1" }}
          >
            <h3 className="mb-2 text-teal fs-2 fw-bold">Our Newsletter</h3>
            <p className="text-teal mb-4">
              Dialogue is an essential part of any great experience.
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light text-teal border-0"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light text-teal border-0"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control bg-light text-teal border-0"
                  placeholder="Email"
                />
              </div>
              <Link to="/contact" araia-label="Go to contact page">
                <Button name="contact us" style={{ width: "100%" }} />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Information;
