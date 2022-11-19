import React from "react";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg py-4">
          <div className="container">
            <Link className="nav-link-brand" to="/">
              Crypto Yield
            </Link>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav fw-bold ms-auto">
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                    NFT
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                    Price
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                    Products
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                    Company
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                    Learn
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                    <img
                      className="nav-img"
                      src="assets/Appstore Button.png"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="/">
                    <img
                      className="nav-img"
                      src="assets/Playstore Button.png"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
