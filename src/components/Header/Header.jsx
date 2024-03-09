import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-6 mobile-hidden ">
              <p className="text-black mb-0">
                Free shipping Over $100 # Free Returns
              </p>
            </div>
            <div className="col-lg-6 col-12 text-end top-hot ">
              <p className="text-end text-black mb-0">
                Hotline:{" "}
                <a className="text-black" href="tel:+91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-lg-2 col-4 logoarea">
              <a
                className="text-white desktop-hidden"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <FaBars />
              </a>
              <h1>
                <Link to={"/"} className="text-white">
                  Focal
                </Link>
              </h1>
            </div>
            <div className="col-lg-5  mobile-hidden">
              <SearchBar />
            </div>
            <div className="col-lg-5 col-8">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to={"/compare-product"}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/public/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/public/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/public/images/user.svg" alt="user" />

                    <p className="mb-0">
                      {user ? "My" : "Log in"}
                      <br />
                      {user ? "Dashboard" : "My account"}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <svg
                      focusable="false"
                      width="30"
                      height="28"
                      className="icon icon--header-cart   "
                      viewBox="0 0 20 18"
                    >
                      <path
                        d="M3 1h14l1 16H2L3 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <div className="d-flex flex-column mr-2">
                      <span className="badge bg-white text-dark mb-1">0</span>
                      <p className="mb-0 ">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 bottom-search-bar desktop-hidden">
              <SearchBar />
            </div>

            <div className="col-12 mobile-hidden">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/public/images/menu.svg" alt="menu" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" href="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" href="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" href="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* mobile menu area */}
      <div
        className="offcanvas offcanvas-start desktop-hidden offcanvas1"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">
            Focal
          </h5>
          <button
            type="button"
            className="btn-close text-reset text-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product">Our Store</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
