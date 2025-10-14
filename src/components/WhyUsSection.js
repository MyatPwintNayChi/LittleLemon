import Card from "./Cardwithnobtn";
import freshImage from "../images/fresh.png";
import restaurantImage from "../images/restauranfood.jpg";
import chefImage from "../images/cooking.png";
import restaurant from "../images/restaurant.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function WhyUsSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-3    bg-light">
      <div className="container d-lg-flex mt-5">
        <div className="me-5 w-50 d-flex justify-content-end custom-padding d-none d-xl-block">
          <img src={restaurantImage} alt="food-img" className="custom-img " />
        </div>
        <div className="ps-xl-5 ">
          <h2 className="display-5 fw-bold px-5 text-teal text-center mb-4">
            Why People Choose <span className="text-yellow">Us?</span>
          </h2>
          <div
            className="pt-4 bg-success-subtle bg-opacity-25 mb-4 p-3 rounded-3 "
            data-aos="fade-up"
          >
            <div className="d-flex  align-items-center gap-3 ">
              <img src={freshImage} alt="fresh-img" className="custom-icon" />
              <h2 className="m-0 fw-bold text-yellow ">
                Fresh and Local Ingredients
              </h2>
            </div>
            <p className="px-5 text-teal fs-4">
              We use only the freshest, locally sourced produce to bring you
              authentic flavors in every dish — ensuring both quality and
              sustainability.
            </p>
          </div>

          <div
            className="bg-success-subtle bg-opacity-25 mb-4 p-3 rounded-3"
            data-aos="fade-up"
          >
            <div className="d-flex  align-items-center gap-3 ">
              <img
                src={chefImage}
                alt="skilled-chef-img"
                className="custom-icon"
              />
              <h2 className="m-0 fw-bold text-yellow">
                Authentic Mediterranean Taste
              </h2>
            </div>
            <p className="px-5 text-teal fs-4">
              Our recipes are inspired by the traditional Mediterranean kitchen,
              crafted with care by our experienced chefs to deliver true flavor.
            </p>
          </div>

          <div
            className=" bg-success-subtle bg-opacity-25 mb-4 p-3 rounded-3"
            data-aos="fade-up"
          >
            <div className="d-flex  align-items-center gap-3 ">
              <img
                src={restaurant}
                alt="restaurant-img"
                className="custom-icon"
              />
              <h2 className="m-0 fw-bold text-yellow">
                Warm & Cozy Atmosphere
              </h2>
            </div>
            <p className="px-5 text-teal fs-4">
              Enjoy your meals in a friendly and welcoming space designed for
              comfort — perfect for family dinners, dates, or a relaxing weekend
              treat.
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className="py-5 text-center    "
    //   style={{ backgroundColor: "#e7e7e7ff" }}
    // >
    //   <div className="container">
    //     <h2 className="display-5 fw-bold px-5 text-teal text-center">
    //       Why Choose <span className="text-yellow">Us</span>
    //     </h2>
    //     <div className="d-lg-flex justify-content-evenly align-items-stretch px-lg-5 py-5 gy-4 gap-3">
    //       <Card
    //         name="Fresh & Local Ingredients"
    //         description="We use only the freshest, locally sourced produce to bring you authentic flavors
    //           in every dish — ensuring both quality and sustainability."
    //         image={freshImage}
    //       />
    //       <Card
    //         name="Authentic Mediterranean Taste"
    //         description=" Our recipes are inspired by the traditional Mediterranean kitchen,
    //           crafted with care by our experienced chefs to deliver true flavor."
    //       />
    //       <Card
    //         name="Warm & Cozy Atmosphere"
    //         description="Enjoy your meals in a friendly and welcoming space designed for comfort —
    //           perfect for family dinners, dates, or a relaxing weekend treat."
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
export default WhyUsSection;
