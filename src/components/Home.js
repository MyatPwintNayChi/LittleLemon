import Header from "./Header";
import Highlights from "./Highlights";
import Main from "./Main";
import Footer from "./Footer";

function Home() {
  return (
    <div className="main">
      <Header />

      <Main />
      <Highlights />
      <Footer />
    </div>
  );
}

export default Home;
