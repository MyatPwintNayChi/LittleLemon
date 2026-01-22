import Logo from "../images/Logo-removebg-preview.png";
function Footer() {
  return (
    <footer className="bg-success-subtle  pt-5 pb-3 mt-5">
      <div className="container text-center">
        <div className="row text-center text-md-start">
          {/* Column 1 - Logo & About */}
          <div className="col-12 col-md-4 mb-4">
            <img src={Logo} alt="Little Lemon Logo" width={150} />
            <p className="text-teal small mt-3">
              Experience the taste of Mediterranean freshness with every dish.
              We bring family, friends, and flavors together.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-teal fs-3">
              Quick <span className="text-yellow">Links</span>
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-teal ">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-teal hover">
                  Menu
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-teal ">
                  Reservation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-teal">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-teal fs-3">
              Contact <span className="text-yellow">Us</span>{" "}
            </h5>
            <p className="mb-1 small">📍 123 Lemon Street, Bangkok, Thailand</p>
            <p className="mb-1 small">📞 +66 123 456 789</p>
            <p className="mb-0 small">✉️ info@littlelemon.com</p>
          </div>
        </div>

        <hr className="border-success" />

        {/* Copyright */}
        <div className="text-center small text-muted">
          © {new Date().getFullYear()} Little Lemon Restaurant. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
