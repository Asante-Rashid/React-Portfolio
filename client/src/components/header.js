import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Asante
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className={window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Nav;