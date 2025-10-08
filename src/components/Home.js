import Header from "./Header";
import Highlights from "./Highlights";
import Herosection from "./Herosection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="main">
      <Header />

      <Herosection />
      <Highlights />
      <Footer />
    </div>
  );
}

export default Home;
