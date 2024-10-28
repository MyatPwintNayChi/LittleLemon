import "./App.css";

function Nav() {
  return (
    <div>
      <ul className="menu-item">
        <li>
          <a className="menu-item-link " href="">
            Home
          </a>
        </li>
        <li>
          <a className="menu-item-link " href="">
            About
          </a>
        </li>
        <li>
          <a className="menu-item-link " href="">
            Menu
          </a>
        </li>
        <li>
          <a className="menu-item-link " href="">
            Reservation
          </a>
        </li>
        <li>
          <a className="menu-item-link " href="">
            Order Online
          </a>
        </li>
        <li>
          <a className="menu-item-link " href="">
            Log in
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
