import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            React App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                <a class="nav-link active" aria-current="page">
                  Home
                </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about">
                <a class="nav-link">
                  About
                </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact">
                <a class="nav-link">
                  Contact
                </a>
                </Link>
              </li>
            </ul>
            <form class="d-flex gap-2" role="search">
              <Link to="/auth/login">
              <button class="btn btn-success">
                Login
              </button>
              </Link>
              <Link to="/auth/register">
              <button class="btn btn-info" type="submit">
                Register
              </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
