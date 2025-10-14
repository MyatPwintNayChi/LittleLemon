import Header from "../components/Header";
import Highlights from "../components/Highlights";
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";
import WhyUsSection from "../components/WhyUsSection";

import Menu from "../components/Menu";
import MeetOurStaff from "../components/MeetOurStaff";

function Home() {
  return (
    <div className="main">
      <Header />
      <Herosection />
      <Menu />
      <Highlights />
      <WhyUsSection />
      <MeetOurStaff />
      <Footer />
    </div>
  );
}

export default Home;
