import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="menu-item">
        <li>
          <Link className="menu-item-link " to="">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-item-link " to="">
            About
          </Link>
        </li>
        <li>
          <Link className="menu-item-link " to="">
            Menu
          </Link>
        </li>
        <li>
          <Link className="menu-item-link " to="/reservation">
            Reservation
          </Link>
        </li>
        <li>
          <Link className="menu-item-link " to="">
            Order Online
          </Link>
        </li>
        <li>
          <Link className="menu-item-link " to="">
            Log in
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
