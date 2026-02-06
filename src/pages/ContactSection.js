import React from "react";
import Header from "../components/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroImage from "../images/Gemini_Generated_Image_yizg25yizg25yizg.png";
import LocationIcon from "../images/location.png";
import PhoneIcon from "../images/telephone.png";
import EmailIcon from "../images/mail.png";
import Res_Image from "../images/res.png";

function ContactSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container-fluid main mx-0 px-0">
      <Header />

      <div className="contact-hero-container " data-aos="fade-right">
        <img src={HeroImage} alt="Contact Hero" className="contact-hero " />
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content text-center text-white">
          <h1 className="display-4 fw-bold text-yellow">Our Contact </h1>
          <p className="fst-italic fs-4 small-text letter-space text-center">
            We’re here to help — get in touch with Little Lemon
          </p>
        </div>
      </div>

      {/* GET IN TOUCH */}
      <section className="py-5 " style={{ backgroundColor: "#FDFBF7" }}>
        <div className="container">
          <div className="row align-items-center ">
            {/* Text */}
            <div className="col-lg-7 ">
              <small className="text-uppercase text-teal fs-4 ">Contact</small>
              <h2
                className="fw-bold my-3 display-5"
                style={{ color: "#495E57" }}
              >
                Get in <span className="text-yellow">Touch</span>
              </h2>
              <p className="text-teal fs-4">
                Whether you have a question about our menu, reservations, or
                special events, our team <br />
                is happy to help.
              </p>

              <ul className="list-unstyled text-teal fs-5 mt-4">
                <li className="mb-2">
                  <img
                    src={LocationIcon}
                    alt="Location"
                    className="contact-icon"
                  />{" "}
                  123 Lemon Street, Bangkok, Thailand
                </li>
                <li className="mb-2">
                  <img src={PhoneIcon} alt="Phone" className="contact-icon" />{" "}
                  +66 123 456 789
                </li>
                <li className="mb-2">
                  <img src={EmailIcon} alt="Email" className="contact-icon" />{" "}
                  hello@littlelemon.com
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="col-lg-5">
              <img
                src={Res_Image}
                alt="Little Lemon Interior"
                className="img-fluid rounded-4 shadow get-in-touch-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORM + OPENING HOURS */}
      <section className="py-5" style={{ backgroundColor: "#EDEFEE" }}>
        <div className="container">
          <div className="row  align-items-start">
            {/* FORM */}
            <div className="col-lg-6">
              <div
                className="p-4 rounded-4 text-white"
                style={{ backgroundColor: "#495E57" }}
              >
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-white border-secondary"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control bg-transparent text-white border-secondary"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="tel"
                        className="form-control bg-transparent text-white border-secondary"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea
                      rows="4"
                      className="form-control bg-transparent text-white border-secondary"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn fw-bold px-4"
                    style={{
                      backgroundColor: "#F4CE14",
                      color: "#495E57",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* OPENING HOURS */}
            <div className="col-lg-6">
              <small className="text-uppercase text-muted">Contact</small>
              <h3 className="fw-bold mb-3" style={{ color: "#495E57" }}>
                Send Us a Message
              </h3>
              <p className="text-muted">
                We usually respond within 24 hours during business days.
              </p>

              <h6 className="fw-bold mt-4">Opening Hours</h6>
              <p className="mb-1 text-muted">
                Monday – Saturday: 8:00 AM – 10:00 PM
              </p>
              <p className="text-muted">Sunday: 10:00 AM – 11:00 PM</p>

              {/* Social icons placeholder */}
              <div className="d-flex gap-3 mt-3">
                <span>🌐</span>
                <span>📘</span>
                <span>📸</span>
                <span>🐦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section>
        <iframe
          title="Little Lemon Location"
          src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

      {/* FAQ */}
      <section className="py-5" style={{ backgroundColor: "#FDFBF7" }}>
        <div className="container">
          <div className="row ">
            <div className="col-lg-4">
              <small className="text-uppercase text-muted">FAQs</small>
              <h2 className="fw-bold" style={{ color: "#495E57" }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {[
                  "How long has Little Lemon been established?",
                  "Do you offer vegetarian options?",
                  "Can we host private events?",
                  "Do you accept same-day reservations?",
                ].map((q, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                      >
                        {q}
                      </button>
                    </h2>
                    <div
                      id={`faq${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-muted">
                        Yes! Please contact us directly for more information.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
