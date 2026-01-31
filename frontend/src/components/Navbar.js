import { Link } from "react-router-dom";
import "../style/Nav.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          Chatoorie
        </Link>

        {/* Toggle (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* Left Links */}
          <ul className="navbar-nav me-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-fill me-1"></i> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart-fill me-1"></i> Cart
                <span className="badge bg-warning text-dark ms-1">2</span>
              </Link>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link">
                <i className="bi bi-geo-alt-fill me-1"></i> Location
              </button>
            </li>
          </ul>

          {/* Right Buttons */}
          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-warning">
              Login
            </Link>
            <Link to="/signup" className="btn btn-warning">
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
