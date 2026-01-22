import Header from "../components/Header";
import Information from "../components/Information";
import OurStory from "../components/OurStory";
import WhoWeAre from "../components/WhoWeAre";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import restaurant from "../images/Tabletop kitchen with blurred background for your product _ Premium AI-generated image.jpeg";
function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container-fluid main mx-0 px-0 bg-white">
      <Header />
      <div
        className="main-background d-flex flex-column justify-content-center align-items-center"
        data-aos="fade-right"
      >
        <p className="display-3 text-center fw-bold  text-uppercase letter-space about-text">
          About Us
        </p>
        <p className="fst-italic fs-3 small-text letter-space">Our Story</p>
      </div>

      <WhoWeAre />
      <OurStory />
      <Information />
    </div>
  );
}

export default About;
