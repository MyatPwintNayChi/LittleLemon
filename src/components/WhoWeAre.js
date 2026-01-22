import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function WhoWeAre() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="py-5 bg-body-secondary "
      id="who-we-are"
      data-aos="fade-right"
    >
      <div className="container text-center pb-5">
        <h2 className="display-5 fw-bold text-teal mb-5 mt-4">
          Who <span className="text-yellow"> We Are</span>
          <p className="fst-italic fs-5 small-text letter-space text-muted pt-3">
            everything you want to know
          </p>
        </h2>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <div className="card-body">
                <h5 className="card-title fw-bold text-yellow mb-3 fs-3">
                  Our Passion for Food
                </h5>
                <p className="card-text text-muted fs-5">
                  We believe food is more than a meal — it’s an experience.
                  Every dish we serve is prepared with love, care, and the
                  freshest local ingredients to bring authentic Mediterranean
                  flavors to your table.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <div className="card-body">
                <h5 className="card-title fw-bold text-yellow mb-3 fs-3">
                  Our Commitment to Quality
                </h5>
                <p className="card-text text-muted fs-5">
                  From farm-fresh produce to premium olive oil and cheeses, we
                  carefully select each ingredient. Our chefs maintain the
                  highest standards to ensure every plate is consistent,
                  flavorful, and beautifully presented.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <div className="card-body">
                <h5 className="card-title fw-bold text-yellow mb-3 fs-3">
                  Our Promise to You
                </h5>
                <p className="card-text text-muted fs-5">
                  At{" "}
                  <span className="fw-bold text-teal fst-italic">
                    Little Lemon
                  </span>
                  , your satisfaction comes first. Whether it’s a family dinner,
                  a casual lunch, or a romantic evening, we promise warm
                  hospitality, honest flavors, and a welcoming atmosphere every
                  time you visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
