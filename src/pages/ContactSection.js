import React from "react";
import Header from "../components/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroImage from "../images/Screenshot 2568-11-20 at 20.53.50.png";
import LocationIcon from "../images/location.png";
import PhoneIcon from "../images/telephone.png";
import EmailIcon from "../images/mail.png";
import Res_Image from "../images/res2.png";
import Gmail from "../images/mail (1).png";
import Facebook from "../images/facebook (1).png";
import Instagram from "../images/instagram (1).png";
import Line from "../images/line (1).png";

function ContactSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const faqs = [
    {
      question: "How long has Little Lemon been established?",
      answer:
        "Little Lemon has been serving fresh Mediterranean dishes for over 10 years.",
    },
    {
      question: "Do you offer vegetarian options?",
      answer:
        "Yes, we have a variety of vegetarian and vegan-friendly dishes on our menu.",
    },
    {
      question: "Can we host private events?",
      answer:
        "Absolutely! We offer private dining options for birthdays, celebrations, and corporate events.",
    },
    {
      question: "Do you accept same-day reservations?",
      answer:
        "Yes, same-day reservations are accepted depending on availability.",
    },
  ];

  return (
    <div className="container-fluid main mx-0 px-0">
      <Header />

      <div className="contact-hero-container " data-aos="fade-right">
        <img src={HeroImage} alt="Contact Hero" className="contact-hero " />
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content text-center text-white">
          <h1 className="display-4 fw-bold text-yellow"> Contact Us </h1>
          <p className="fst-italic fs-4 small-text letter-space text-center">
            We’re here to help — get in touch with Little Lemon
          </p>
        </div>
      </div>

      {/* GET IN TOUCH */}
      <section
        className="py-5 "
        style={{ backgroundColor: "#FDFBF7" }}
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row align-items-center ">
            {/* Text */}
            <div className="col-lg-7 ">
              <small className="text-uppercase text-teal fs-4 ">Contact</small>
              <h2 className="fw-bold my-3 display-5 text-teal">
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
      <section
        className=" custom-contact-padding"
        style={{ backgroundColor: "#EDEFEE" }}
      >
        <div className="container">
          <div className="row  align-items-center ">
            {/* FORM */}
            <div className="col-lg-6 contact-form " data-aos="fade-right">
              <div
                className="p-4 py-lg-5 rounded-4  text-white text-center"
                style={{ backgroundColor: " #28452a" }}
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
                    className="btn fw-bold px-4 text-uppercase "
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
            <div
              className="col-lg-6 ps-3 ps-lg-5 mt-5 mt-lg-0"
              data-aos="fade-left"
            >
              <small className="text-uppercase text-teal fs-4">Contact</small>
              <h3 className="fw-bold my-3 display-5 text-teal">
                Send Us a <span className="text-yellow">Message</span>
              </h3>
              <p className="text-teal fs-4">
                We usually respond within 24 hours during business days.
              </p>

              <h6 className="fw-bold mt-4 fs-4 ">Opening Hours</h6>
              <p className="mb-1 text-teal fs-5">
                Monday – Friday: 10:00 AM – 10:30 PM
              </p>
              <p className="text-teal fs-5 mb-1">
                Saturday: 11:00 AM – 10:30 PM
              </p>
              <p className="text-danger fw-semibold fs-5">Sunday:Closed</p>

              {/* Social icons placeholder */}
              <div className="d-flex gap-3 mt-3">
                <span>
                  <img src={Facebook} alt="Facebook" className="social-icon" />
                </span>
                <span>
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="social-icon"
                  />
                </span>
                <span>
                  <img src={Line} alt="Line" className="social-icon" />
                </span>
                <span>
                  <div className="bg-circle">
                    <img src={Gmail} alt="Gmail" className="social-icon" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section
        className="custom-contact-padding "
        style={{ backgroundColor: "#FDFBF7" }}
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <iframe
                title="Little Lemon Location"
                src="https://maps.google.com/maps?q=thailand&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="custom-contact-padding"
        style={{ backgroundColor: "#EDEFEE" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-lg-4" data-aos="fade-right">
              <small className="text-uppercase text-teal fs-4">FAQs</small>
              <h2 className="fw-bold my-3 display-5 text-teal">
                <span className="text-yellow"> Frequently</span> Asked Questions
              </h2>
            </div>

            <div className="col-lg-8 mt-4 mt-lg-0  " data-aos="fade-left">
              <div className="accordion" id="faqAccordion">
                {faqs.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed fs-5 text-teal fst-italic fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                      >
                        {item.question}
                      </button>
                    </h2>

                    <div
                      id={`faq${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-teal fs-5">
                        {item.answer}
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
