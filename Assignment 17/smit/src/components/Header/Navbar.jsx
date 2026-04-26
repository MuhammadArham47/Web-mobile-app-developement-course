import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Navbar() {

  const location = useLocation();
  const user = location.state?.user || "";

  const logouting = ()=> {
    localStorage.removeItem("user");
    window.location.reload(true);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React App
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                <a className="nav-link">
                  About
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                <a className="nav-link">
                  Contact
                </a>
                </Link>
              </li>
            </ul>
            <form className="d-flex gap-2" role="search">
              {user ? (
                <div className="d-flex gap-3 align-items-center">
                  <p className="text-white mb-0 fs-5">{user.name}</p>
                  <button onClick={logouting} className="btn btn-danger" type="submit">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  </button>
                </div>
              ) : (
                <div className="d-flex gap-2">
                  <Link to="/auth/login">
              <button className="btn btn-success">
                Login
              </button>
              </Link>
              <Link to="/auth/register">
              <button className="btn btn-info" type="submit">
                Register
              </button>
              </Link>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
