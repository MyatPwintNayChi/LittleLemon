import Button from "../components/Button";
import Header from "../components/Header";
import menuItems from "../components/menuItem";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

function Menu() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "New", "Popular", "Dessert", "Drinks"];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);
  return (
    <div className="container-fluid main mx-0 px-0 bg-body-secondary">
      <Header />

      <div className="container py-5 mt-4" id="menu" data-aos="fade-right">
        <h2 className="text-center fw-bold mb-2 text-teal display-4 mt-5">
          Our <span className="text-yellow">Menu</span>
        </h2>
        <p className="text-center text-teal fs-5 mb-5 mx-auto fst-italic">
          "Experience the Flavors of the Mediterranean: A Culinary Journey"
        </p>
        <div className="d-flex justify-content-center mb-5 flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn ${
                selectedCategory === cat
                  ? "btn-warning text-dark fs-5"
                  : "btn-outline-warning text-dark fs-5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-yellow fs-2">
                    {item.title}
                  </h5>
                  <p className="card-text text-teal fs-5">{item.description}</p>
                  <p className="fw-bold text-teal fs-3 ">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
