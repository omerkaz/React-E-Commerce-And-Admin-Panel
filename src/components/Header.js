import React from "react";
import { NavLink} from "react-router-dom";
import Login from "./headerButtons/Login";
import Signup from "./headerButtons/Signup";
import Cart from "./headerButtons/Cart";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <div className="container">
            <div className="row">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse col-lg-3 col-xl-4"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <NavLink className="nav-link fw-semibold" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-link fw-semibold" to="/products">
                    Products
                  </NavLink>
                  <NavLink className="nav-link fw-semibold" to="/about">
                    About
                  </NavLink>
                  <NavLink className="nav-link fw-semibold" to="/contact">
                    Contact
                  </NavLink>
                </div>
              </div>
              <div
                className="collapse navbar-collapse col-2"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <NavLink
                    className="navbar-brand fw-bold ms-5 ps-3 text-center brand"
                    to="/"
                  >
                    NEVERLAND STORE
                  </NavLink>
                </div>
              </div>
              <div
                className="collapse navbar-collapse col-6 justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <Cart />
                  <Login />
                  <Signup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
