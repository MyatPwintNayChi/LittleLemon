import logo from "../images/Logo.jpg";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="LittleLemon_Logo" width={200} />

      <Nav />
    </div>
  );
}

export default Header;
