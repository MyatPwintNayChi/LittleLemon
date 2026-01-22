import Header from "../components/Header";
import React from "react";

import image1 from "../images/Cheers to a new year 🥂✨ _ Instagram.jpeg";

function Contact() {
  return (
    <div className="container-fluid main bg-white pt-5">
      <Header />
      <section className="text-center mb-5">
        <h1 className="fw-bold display-5 text-dark">
          Contact <span className="text-warning">Us</span>
        </h1>
        <p className="text-muted fs-5 w-75 mx-auto">
          Have questions, special requests, or want to make a reservation? We’re
          here to help make your Little Lemon experience the best it can be.
        </p>
      </section>

      <div className="container">
        {/* Info + Image */}
        <div className="row align-items-center mb-5">
          {/* Contact Info */}
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold mb-3 text-dark">Contact Information</h4>
            <p className="text-muted">
              Reach out to us anytime — we’re happy to assist.
            </p>

            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning bg-opacity-25 p-3 rounded-circle me-3">
                <i className="bi bi-telephone-fill fs-4 text-warning"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0">(+66) 654 654 55</h6>
                <small className="text-muted">Call us during open hours</small>
              </div>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning bg-opacity-25 p-3 rounded-circle me-3">
                <i className="bi bi-envelope-fill fs-4 text-warning"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0">hello@littlelemon.com</h6>
                <small className="text-muted">
                  We usually respond within a day
                </small>
              </div>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning bg-opacity-25 p-3 rounded-circle me-3">
                <i className="bi bi-geo-alt-fill fs-4 text-warning"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0">Bangkok, Thailand</h6>
                <small className="text-muted">
                  Visit us at our cozy location
                </small>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1556909219-ef8f0b65a2f1"
              alt="Restaurant interior"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
        </div>

        {/* Form + Map */}
        <div className="row mb-5">
          {/* Form */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-success bg-opacity-10 rounded-4 shadow-sm">
              <h4 className="fw-bold text-dark mb-3">Get In Touch</h4>
              <p className="text-muted">Send us a quick message</p>

              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-3"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Message
                  </label>
                  <textarea
                    className="form-control rounded-3"
                    rows="3"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button className="btn btn-warning text-dark fw-semibold rounded-3 px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-3 text-dark">Our Location</h4>
            <p className="text-muted">Find us on the map</p>

            <div className="rounded-4 overflow-hidden shadow-sm mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <h6 className="fw-bold text-dark mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <i className="bi bi-facebook fs-3 text-warning"></i>
              <i className="bi bi-instagram fs-3 text-warning"></i>
              <i className="bi bi-twitter fs-3 text-warning"></i>
              <i className="bi bi-youtube fs-3 text-warning"></i>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <section className="bg-success bg-opacity-10 p-4 rounded-4 shadow-sm mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <h4 className="fw-bold text-dark">Join Our Newsletter</h4>
              <p className="text-muted">
                Get updates about specials, new dishes, and events.
              </p>
            </div>

            <div className="col-md-6">
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control rounded-3 me-2"
                  placeholder="Enter your email"
                />
                <button className="btn btn-warning text-dark fw-semibold rounded-3 px-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>




        
      </div>
    </div>
  );
}

export default Contact;
