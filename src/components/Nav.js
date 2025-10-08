import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      {/* <ul className="menu-item">
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
      </ul> */}

      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
