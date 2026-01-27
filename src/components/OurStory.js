import food from "../images/food.jpeg";
import eatingfood from "../images/Flying Salad Bowl .jpeg";
import EatingTogether from "../images/eatingtogether.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function OurStory() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container-fluid px-0" data-aos="fade-right">
      <div className="bg-light px-0 ">
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center  ">
          <div className="ourstory-left w-100 w-lg-50  text-center px-5 ">
            <h2 className="display-5 fw-bold text-teal  pt-5 ">
              Our <span className="text-yellow"> Story</span>
            </h2>

            <p className="fs-5 text-teal">
              Founded in 2015,{" "}
              <span className="fw-bold text-teal fst-italic">Little Lemon</span>{" "}
              began as a small family restaurant inspired by the sun-drenched
              coasts of Greece and Italy. It was created with a passion for
              simple, honest food that brings people together. Today, it
              continues to serve fresh flavors made from locally sourced
              ingredients, bringing a taste of the Mediterranean to every plate.
            </p>
            <p className="text-muted fs-5 pt-3">
              From fresh salads to traditional pasta and seafood, every dish is
              prepared with care, combining old-world recipes with modern
              flavors.
            </p>
          </div>
          <div className="w-100 w-lg-50 d-flex align-items-stretch ourstory-right"></div>
        </div>
      </div>

      <div className=" container w-100 w-lg-75 mx-auto d-flex flex-column flex-lg-row justify-content-center align-items-center py-5  ">
        <div className=" w-md-50  d-flex justify-content-center align-items-center mb-4 mb-lg-0 d-none d-lg-block">
          <img
            src={EatingTogether}
            alt="food-image"
            style={{
              height: "490px",
              width: "520px",
              objectFit: "cover",
              marginRight: "30px",
              borderRadius: "15px",
            }}
          />
        </div>
        <div className="left-section w-100 w-md-50 text-center px-5 ">
          <h2 className="display-6 fw-bold text-teal pb-4">
            We Make Every<span className="text-yellow"> Moment</span> Special
          </h2>
          <p className="fs-5 text-teal ">
            At{" "}
            <span className="fw-bold text-teal fst-italic">Little Lemon</span>,
            we believe that dining is more than just enjoying good food — it’s
            about creating moments that linger in your heart. From the welcoming
            atmosphere to the carefully crafted dishes and attentive service, we
            make every moment special, turning each visit into a warm and
            memorable experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
