import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const cartCount = useSelector((state) => state.cart.length);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            শপিং কার্ট
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  হোম
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  পণ্য
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  আমাদের সম্পর্কে
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  যোগাযোগ
                </NavLink>
              </li>
            </ul>

            <NavLink to={"/cart"} className="buttons">
              <button type="button" className="btn btn-dark position-relative">
                কার্ট
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {/* {cartCount} */}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
