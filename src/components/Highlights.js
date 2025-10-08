import Button from "./Button";
import dish1 from "../images/greeksalad.jpeg";
import dish2 from "../images/ Bruschetta.jpeg";
import dish3 from "../images/lemoncake.jpeg";
import Card from "./Card";
function Highlights() {
  return (
    // <div className="weekly-special-section">
    //   <div className="first-wrapper">
    //     <h1 className="weekly-special-heading">This weeks specials!</h1>
    //     <Button name="Online Menu" />
    //   </div>
    // </div>
    <div className="container-fluid  w-100 h-auto py-4 px-lg-0 my-5 mx-auto ">
      <h1 className="weekly-special-heading display-5 fw-bold px-5 text-teal text-center">
        This weeks specials!
      </h1>
      <div className="d-flex flex-column align-items-center d-md-flex flex-md-row justify-content-evenly align-items-md-stretch px-md-5 py-5 gy-4 gap-3">
        <Card
          image={dish1}
          name="Greek Salad"
          description="A classic Greek salad with fresh veggies, feta cheese, and crunchy garlic croutons."
          price="$12.99"
        />
        <Card
          image={dish2}
          name="Bruschetta"
          description="Grilled bread topped with garlic, tomatoes, olive oil, and fresh basil."
          price="$5.99"
        />
        <Card
          image={dish3}
          name="Lemon Dessert"
          description="A zesty lemon cake with a tangy lemon glaze, perfect for dessert lovers."
          price="$5.00"
        />
      </div>
    </div>
  );
}

export default Highlights;
