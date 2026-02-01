import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import chefImg from "../images/eatingtogether.png";
import restaurantImg from "../images/_ (7).jpeg";

function OurStorySection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="py-5 overflow-hidden"
      //   style={{ backgroundColor: "#556B62" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT TEXT */}
          <div
            className="col-lg-6 text-teal mb-4 mb-lg-0 fs-4 "
            data-aos="fade-right"
          >
            <h2 className="display-4 fw-bold text-teal text-center mb-4 mt-4 ">
              Who <span className="text-yellow"> We Are</span>
            </h2>

            <p className="fs-4 text-teal text-justify p-2">
              Founded in 2015,{" "}
              <span className="fw-bold text-teal fst-italic">Little Lemon</span>{" "}
              began as a small family restaurant inspired by the sun-drenched
              coasts of Greece and Italy. It was created with a passion for
              simple, honest food that brings people together. Today, it
              continues to serve fresh flavors made from locally sourced
              ingredients, bringing a taste of the Mediterranean to every plate.
            </p>
            <p className="text-muted fs-5 p-2 fst-italic text-justify">
              From fresh salads to traditional pasta and seafood, every dish is
              prepared with care, combining old-world recipes with modern
              flavors.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div
            className="col-lg-6 position-relative d-flex justify-content-center"
            data-aos="fade-left"
          >
            <div className="about-img-wrapper position-relative w-100">
              {/* Top image */}
              <img
                src={chefImg}
                alt="Chefs cooking"
                className="img-fluid rounded-4 shadow about-img-top"
              />

              {/* Bottom image */}
              <img
                src={restaurantImg}
                alt="Restaurant interior"
                className="img-fluid rounded-4 shadow about-img-bottom d-none d-lg-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;
