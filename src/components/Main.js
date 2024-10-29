import Button from "./Button";
import mainImage from "../images/restauranfood.jpg";
function Main() {
  return (
    <div className="main-section-wrapper">
      <div className="main-section">
        <div className="main-left-section">
          <h1 className="main-heading">Little Lemon</h1>
          <p className="sub-heading">Chicago</p>
          <p className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button name="Reserve a Table" />
        </div>
        <div className="main-right-section">
          <img className="main-image" src={mainImage} alt="hero-section-img" />
        </div>
      </div>
    </div>
  );
}

export default Main;
