import mainImage2 from "../images/_ (2).jpeg";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Herosection() {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="container-fluid  w-100 h-auto pt-2 px-0 hero-padding"
      data-aos="fade-right"
    >
      <div className="d-lg-none d-sm-block hero-section-small">
        <div className="pt-5">
          <header className="text-center my-5 mx-5 pt-4">
            <h1 className="display-1 fw-bold text-yellow">Little Lemon</h1>

            <p className="fs-4 text-white">
              "Indulge in Culinary Delight: Where Tradition Meets Modern
              Mediterranean Flavors!"
            </p>
          </header>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-outline-success me-4 fs-4 "
            onClick={() => navigate("/menu")}
          >
            Our Menu
          </button>
          <button type="button" className="btn btn-success me-3 fs-4">
            Reserve a Table
          </button>
        </div>
      </div>

      <div className="d-none d-lg-block">
        <div className="d-flex ">
          <div className="hero-left-section bg-success-subtle">
            <header className="text-start my-5 mx-5">
              <h1 className="display-1 fw-bold text-teal">
                Little <span className="text-yellow">Lemon</span>
              </h1>

              <p className="fs-4 text-teal ">
                "Indulge in Culinary Delight: Where Tradition Meets Modern
                Mediterranean Flavors!"
              </p>
              <div className="mt-5 pb-5">
                <button
                  type="button"
                  className="btn btn-outline-success me-4 fs-4 "
                  onClick={() => navigate("/menu")}
                >
                  Our Menu
                </button>
                <button
                  type="button"
                  className="btn btn-success me-3 fs-4 "
                  onClick={() => navigate("/reservation")}
                >
                  Reserve a Table
                </button>
              </div>
            </header>
          </div>
          <div className="hero-right-section d-xs-none d-lg-block">
            <img
              className="hero-image"
              src={mainImage2}
              alt="hero-section-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
