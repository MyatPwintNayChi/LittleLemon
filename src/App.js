import "./App.css";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  );
}

export default App;
