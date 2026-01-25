import logo from "../images/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg px-lg-5 pt-2  fixed-top bg-white vw-100 ">
      <div className="container-fluid px-sm-3">
        <a href="#" className="navbar-brand">
          <img className="logo" src={logo} alt="LittleLemon_Logo" width={200} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-4 ">
            <li className="nav-item fs-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link scrollto ${isActive ? "text-yellow" : "text-teal"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item fs-3">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `nav-link scrollto ${isActive ? "text-yellow" : "text-teal"}`
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item fs-3">
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `nav-link scrollto ${isActive ? "text-yellow" : "text-teal"}`
                }
              >
                Menu
              </NavLink>
            </li>

            <li className="nav-item fs-3">
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
                  `nav-link scrollto ${isActive ? "text-yellow" : "text-teal"}`
                }
              >
                Reservation
              </NavLink>
            </li>

            <li className="nav-item fs-3">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link scrollto ${isActive ? "text-yellow" : "text-teal"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
