import ImageCarousel from "./imageCarousel";
import menuItems from "./menuItem";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

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
