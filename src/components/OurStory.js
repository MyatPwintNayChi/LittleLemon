import food from "../images/food.jpeg";
import eatingfood from "../images/Flying Salad Bowl .jpeg";

function OurStory() {
  return (
    <div className="container-fluid px-0">
      <div className="bg-light px-0 ">
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center  ">
          <div className="ourstory-left w-100 w-lg-50  text-center px-5 ">
            <h2 className="display-5 fw-bold text-teal  pt-5 ">
              Our <span className="text-yellow"> Story</span>
            </h2>

            <p className="fs-5 text-teal">
              Founded in 2015, Little Lemon began as a small family restaurant
              inspired by the sun-drenched coasts of Greece and Italy. It was
              created with a passion for simple, honest food that brings people
              together. Today, it continues to serve fresh flavors made from
              locally sourced ingredients, bringing a taste of the Mediterranean
              to every plate.
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

      <div className=" container w-100 w-lg-75 mx-auto d-flex flex-column flex-lg-row justify-content-center align-items-center  py-5  ">
        <div className=" w-md-50  d-flex justify-content-center align-items-center mb-4 mb-lg-0 d-none d-lg-block">
          <img
            src={eatingfood}
            alt="food-image"
            style={{
              height: "400px",
              width: "400px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="left-section w-100 w-md-50 text-center px-5 ">
          <h2 className="display-6 fw-bold text-teal pb-4">
            We Make Every<span className="text-yellow"> Moment</span> Special
          </h2>
          <p className="fs-5 text-teal ">
            At Little Lemon, we believe that dining is more than just enjoying
            good food — it’s about creating moments that linger in your heart.
            From the welcoming atmosphere to the carefully crafted dishes and
            attentive service, we make every moment special, turning each visit
            into a warm and memorable experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
