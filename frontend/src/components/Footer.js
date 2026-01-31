import { Link } from "react-router-dom";
import "../style/Footer.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="text-warning">Chatoorie</h5>
            <p className="small">
              Delicious food delivered to your doorstep. Fast, fresh & tasty 🍽️
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/menu" className="footer-link">Menu</Link></li>
              <li><Link to="/login" className="footer-link">Login</Link></li>
              <li><Link to="/signup" className="footer-link">Signup</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Contact</h6>
            <p className="small mb-1">📍 India</p>
            <p className="small mb-1">📞 +91 98765 43210</p>
            <p className="small">✉️ support@foodapp.com</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-3 small">
          © {new Date().getFullYear()} FoodApp | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
