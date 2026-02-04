import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Local Food Lover",
      text: "Little Lemon has become our go-to spot for a relaxed dinner. The flavors are fresh, authentic, and full of character. You can really taste the love in every dish.",
    },
    {
      name: "Daniel R.",
      role: "Weekend Regular",
      text: "From the moment we walked in, the staff made us feel welcome. The atmosphere is cozy and the food never disappoints. Highly recommended.",
    },
    {
      name: "Emily K.",
      role: "First-time Guest",
      text: "I made a reservation for a special occasion and everything was perfect. Great service, amazing food, and a wonderful overall experience.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-teal">What Our Guests Say</h2>
          <p className="text-muted">
            Honest experiences from people who’ve dined with us
          </p>
        </div>

        {/* Testimonials */}
        <div className="row g-4">
          {testimonials.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body">
                  <p className="card-text text-muted fst-italic">
                    “{item.text}”
                  </p>
                </div>
                <div className="card-footer bg-white border-0">
                  <h6 className="mb-0 fw-semibold">{item.name}</h6>
                  <small className="text-muted">{item.role}</small>
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
