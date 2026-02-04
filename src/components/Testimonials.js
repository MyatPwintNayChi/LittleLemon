import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Avatar1 from "../images/avatar-1.jpg";
import Avatar2 from "../images/avatar-3.jpg";
import Avatar3 from "../images/avatar-5.jpg";
import Avatar4 from "../images/avatar-8.jpg";

function Testimonials() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const testimonials = [
    {
      name: "Sarah M.",
      image: Avatar1,
      role: "Local Food Lover",
      text: "Little Lemon has become our go-to spot for a relaxed dinner. The flavors are fresh, authentic, and full of character. You can really taste the love in every dish.",
    },
    {
      name: "Daniel R.",
      role: "Weekend Regular",
      image: Avatar2,
      text: "From the moment we walked in, the staff made us feel welcome. The atmosphere is cozy and the food never disappoints. Highly recommended.",
    },
    {
      name: "Emily K.",
      role: "First-time Guest",
      image: Avatar3,
      text: "I made a reservation for a special occasion and everything was perfect. Great service, amazing food, and a wonderful overall experience.",
    },
    {
      name: "Michael T.",
      role: "Food Critic",
      image: Avatar4,
      text: "The presentation and taste of each dish exceeded my expectations. A truly memorable dining experience.",
    },
  ];

  return (
    <section className="py-5 ">
      <div className="container my-4">
        {/* Section title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-teal display-5 px-5">
            What Our<span className="text-yellow"> Guests</span> Say
          </h2>
          <p className="text-teal fst-italic fs-6 mt-3">
            Honest experiences from people who’ve dined with us
          </p>
        </div>

        {/* Testimonials */}
        <div className="row g-4 mb-5">
          {testimonials.map((item, index) => (
            <div
              className="col-md-3 col-sm-6"
              key={index}
              data-aos="fade-right"
            >
              <div className="card h-100 shadow-sm border rounded-4 bg-body-tertiary">
                <div className="card-body text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle mb-3 testimonial-avatar"
                  />
                  <p className="card-text text-teal fst-italic fw-semibold">
                    “{item.text}”
                  </p>
                </div>
                <div className="card-footer bg-light border-0 text-center rounded-4">
                  <h6 className="mb-0 fw-bold text-yellow">{item.name}</h6>
                  <small className="text-teal">{item.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
