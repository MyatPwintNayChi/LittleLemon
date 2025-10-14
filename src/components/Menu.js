import ImageCarousel from "./imageCarousel";
import dish from "../images/Spaghetti Bolognese.jpeg";
import dish2 from "../images/DijonChicken.jpeg";
import dish3 from "../images/Shakshuka.jpeg";
import dish4 from "../images/_ (4).jpeg";
import dish5 from "../images/Seafood Stew.jpeg";
import dish6 from "../images/Stuffed Salmon.jpeg";
import dish7 from "../images/stake.jpeg";
import dish8 from "../images/ Bruschetta.jpeg";
import dish9 from "../images/greeksalad.jpeg";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const menuItems = [
  {
    id: 1,
    image: dish,
    title: "Spaghetti Bolognese",
    price: "$12.99",
    description:
      "Classic Italian pasta with rich, meaty tomato sauce and fresh herbs.",
  },
  {
    id: 2,
    image: dish2,
    title: "Dijon Chicken",
    price: "$13.49",
    description: "Tender chicken simmered in creamy Dijon mustard sauce.",
  },
  {
    id: 3,
    image: dish3,
    title: "Mexican-style Shashuka",
    price: "$11.99",
    description: "Spicy tomato and pepper stew topped with poached eggs.",
  },
  {
    id: 4,
    image: dish4,
    title: "Sheet pan chicken",
    price: "$12.49",
    description:
      "Oven-roasted chicken with vegetables, seasoned for a simple and tasty meal.",
  },
  {
    id: 5,
    image: dish5,
    title: "Seafood Stew",
    price: "$14.99",
    description:
      "A hearty mix of fresh seafood simmered in a rich, flavorful broth.",
  },
  {
    id: 6,
    image: dish6,
    title: "Stuffed Salmon",
    price: "$15.99",
    description:
      "Fresh salmon fillet filled with creamy spinach and herbs, baked to perfection.",
  },
  {
    id: 7,
    image: dish7,
    title: "Stake",
    price: "$13.99",
    description: "Dense Bean Salad with Steak – Bold, Fresh & Filling",
  },
  {
    id: 8,
    image: dish8,
    title: "Bruschetta",
    price: "$6.99",
    description:
      "Grilled bread topped with garlic, tomatoes, olive oil, and fresh basil.",
  },
  {
    id: 9,
    image: dish9,
    title: "Greek Salad",
    price: "$12.99",
    description:
      "A classic Greek salad with fresh veggies, feta cheese, and crunchy garlic croutons.",
  },
];
function Menu() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 960);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isMobile);
  const groupedItems = [];
  const groupSize = isMobile ? 1 : 3;
  for (let i = 0; i < menuItems.length; i += groupSize) {
    groupedItems.push(menuItems.slice(i, i + groupSize));
  }
  console.log(isMobile, groupedItems);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid  bg-light menu-padding ">
      <h2 className="text-center fw-bold mb-5 text-teal display-5">
        Explore Our <span className="text-yellow">Menu</span>
      </h2>

      <div id="menuCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedItems.map((group, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="d-flex justify-content-center gap-4">
                {group.map((item, index) => (
                  <Card
                    name={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    key={index}
                    dataAos="fade-up"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#menuCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#menuCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Menu;
