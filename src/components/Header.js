import logo from "../images/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Header() {
  // <div className="px-5 pt-2">
  //   <nav className="navbar navbar-expand-lg navbar-custom">
  //     <div className="container-fluid">
  //       <a href="#">
  //         <img
  //           className="logo"
  //           src={logo}
  //           alt="LittleLemon_Logo"
  //           width={200}
  //         />
  //       </a>

  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarNav"
  //         aria-controls="navbarNav"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="16"
  //           height="16"
  //           fill="currentColor"
  //           class="bi bi-list"
  //           viewBox="0 0 16 16"
  //         >
  //           <path
  //             fill-rule="evenodd"
  //             d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
  //           />
  //         </svg>
  //       </button>

  //       <div className="collapse navbar-collapse navbar-menu" id="navbarNav">
  //         <ul className="navbar-nav ms-auto gap-4">
  //           <li className="nav-item ">
  //             <a
  //               className="nav-link fs-3 text-teal"
  //               aria-current="page"
  //               href="#"
  //             >
  //               Home
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a
  //               className="nav-link text-teal  fs-3"
  //               aria-current="page"
  //               href="#"
  //             >
  //               About
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a
  //               className="nav-link  fs-3 text-teal"
  //               aria-current="page"
  //               href="#"
  //             >
  //               Reservation
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a
  //               className="nav-link  fs-3 text-teal"
  //               aria-current="page"
  //               href="#"
  //             >
  //               Order Online
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // </div>
  // <nav className="navbar navbar-expand-lg">
  //   <div className="container-fluid">
  //     <a href="#" className="navbar-brand">
  //       <img className="logo" src={logo} alt="LittleLemon_Logo" width={200} />
  //     </a>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbar"
  //       aria-controls="navbar"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>

  //     <div
  //       id="navbar"
  //       className="collapse navbar-collapse d-flex justify-content-end"
  //     >
  //       <ul className="navbar-nav  mb-2 mb-lg-0">
  //         <li className="nav-item">
  //           <a className="nav-link scrollto " href="#hero">
  //             Home
  //           </a>
  //         </li>

  //         <li className="nav-item">
  //           <a className="nav-link scrollto" href="#about">
  //             About
  //           </a>
  //         </li>

  //         <li className="nav-item">
  //           <a className="nav-link scrollto" href="#menu">
  //             Menu
  //           </a>
  //         </li>

  //         <li className="nav-item">
  //           <a className="nav-link scrollto" href="#gallery">
  //             Gallery
  //           </a>
  //         </li>

  //         <li className="nav-item">
  //           <a className="nav-link scrollto" href="#contact">
  //             Contact
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  return (
    <nav className="navbar navbar-expand-lg px-lg-5 pt-2  fixed-top bg-white ">
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
              <a
                className="nav-link scrollto text-teal"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item fs-3">
              <a className="nav-link scrollto text-teal" href="#about">
                About
              </a>
            </li>

            <li className="nav-item fs-3">
              <a className="nav-link scrollto text-teal" href="#menu">
                Menu
              </a>
            </li>

            <li className="nav-item fs-3">
              <a className="nav-link scrollto text-teal" href="#gallery">
                Gallery
              </a>
            </li>

            <li className="nav-item fs-3">
              <a className="nav-link scrollto text-teal" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
