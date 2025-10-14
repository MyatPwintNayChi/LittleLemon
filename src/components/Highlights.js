import dish1 from "../images/_ (5).jpeg";
import dish2 from "../images/Pistachio Tiramisu.jpeg";
import dish3 from "../images/Lemon Pudding.jpeg";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Highlights() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    // <div className="weekly-special-section">
    //   <div className="first-wrapper">
    //     <h1 className="weekly-special-heading">This weeks specials!</h1>
    //     <Button name="Online Menu" />
    //   </div>
    // </div>
    <div className="container-fluid  w-100 h-auto py-3 px-5 px-lg-0 my-4 mx-auto ">
      <h1 className="weekly-special-heading display-5 fw-bold px-5 mt-3 text-teal text-center">
        Popular <span className="text-yellow">Desserts</span> You Can't Miss
      </h1>
      <div className="d-flex flex-column align-items-center d-md-flex flex-md-row justify-content-evenly align-items-md-stretch px-md-5 py-5 gy-4 gap-3">
        <Card
          image={dish1}
          name="Crepes with strawberries and chocolate"
          description="Soft crepes filled with fresh strawberries and drizzled with rich chocolate sauce."
          price="$9.99"
          dataAos="fade-right"
        />
        <Card
          image={dish2}
          name="Pistachio Tiramisu"
          description="Creamy Italian dessert layered with pistachio, mascarpone, and coffee-soaked ladyfingers."
          price="$8.99"
          dataAos="fade-right"
        />
        <Card
          image={dish3}
          name="Lemon Pudding"
          description="Light and refreshing dessert with a smooth, tangy lemon flavor."
          price="$7.99"
          dataAos="fade-right"
        />
      </div>
    </div>
  );
}

export default Highlights;
