import mainImage2 from "../images/_ (2).jpeg";
function Herosection() {
  return (
    // <div className="herosection-wrapper">
    //   <div className="main-section">
    //     <div className="main-left-section">
    //       {/* <div className="bg-style"></div> */}
    //       <h1 className="main-heading">Little Lemon</h1>
    //       <p className="sub-heading">Chicago</p>
    //       <p className="description">
    //         We are a family owned Mediterranean restaurant, focused on
    //         traditional recipes served with a modern twist.
    //       </p>
    //       <Button name="Reserve a Table" />
    //     </div>
    //     <div className="main-right-section">
    //       <div className="main-image">
    //         <img
    //           className="image-size img-left"
    //           src={mainImage}
    //           alt="hero-section-img"
    //         />
    //       </div>
    //       <div className="main-image">
    //         <img
    //           className="image-size img-right"
    //           src={mainImage2}
    //           alt="hero-section-img"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div>
    //   <section className="hero">
    //     <img src={mainImage} alt="Mediterranean dishes" className="hero-bg" />
    //     <div className="overlay"></div>
    //     <div className="hero-content">
    //       <h1>Little Lemon</h1>
    //       <h2>Chicago</h2>
    //       <p>Authentic Mediterranean recipes with a modern twist.</p>
    //       <a href="#" className="btn-primary">
    //         Reserve a Table
    //       </a>
    //     </div>
    //   </section>
    // </div>

    <div className="container-fluid  w-100 h-auto pt-2 px-0 hero-padding">
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
          <button type="button" className="btn btn-outline-success me-4 fs-4">
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
                >
                  Our Menu
                </button>
                <button type="button" className="btn btn-success me-3 fs-4 ">
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
