import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import chefImg from "../images/Screenshot 2569-02-02 at 19.27.31.png";
import restaurantImg from "../images/_ (1).jpeg";

function OurStorySection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="py-5 "
      //   style={{ backgroundColor: "#556B62" }}
    >
      <div className="container ">
        <div className="row align-items-center">
          {/* LEFT TEXT */}
          <div
            className="col-lg-7 text-teal mb-4 mb-lg-0 fs-4  "
            data-aos="fade-right"
          >
            <h2 className="display-4 fw-bold text-teal text-center mb-4 mt-4 ">
              Who <span className="text-yellow"> We Are</span>
            </h2>

            <p className="fs-4 text-teal  text-center p-2">
              Founded in 2015,{" "}
              <span className="fw-bold text-teal fst-italic">Little Lemon</span>{" "}
              began as a small family restaurant inspired by the sun-drenched
              coasts of Greece and Italy. It was created with a passion for
              simple, honest food that brings people together. Today, it
              continues to serve fresh flavors made from locally sourced
              ingredients, bringing a taste of the Mediterranean to every plate.
            </p>
            <p className="text-muted fs-5 p-2 fst-italic text-center">
              From fresh salads to traditional pasta and seafood, every dish is
              prepared with care, combining old-world recipes with modern
              flavors.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div
            className="col-lg-5 position-relative d-flex justify-content-center"
            data-aos="fade-left"
          >
            <div className="about-img-wrapper position-relative w-100">
              <img
                src={chefImg}
                alt="Chefs cooking"
                className=" rounded-4 shadow about-img-top d-none d-lg-block"
              />

              <img
                src={restaurantImg}
                alt="Restaurant interior"
                className=" rounded-4 shadow about-img-bottom d-none d-xl-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;
