import "./App.css";
import Home from "./pages/Home";
import Reservation from "./components/Reservation";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
  );
}

export default App;
