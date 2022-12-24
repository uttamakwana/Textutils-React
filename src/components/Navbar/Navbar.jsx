import "./navbar.css";
import React from 'react';
import { Link } from "react-router-dom";

// Passing props for accessing the properties from App.js
export default function Navbar(props) {

  return (
    <>
      {/* <nav className="nav">
                <div className="nav-logo">
                    <a href="/" id="">Logo</a>
                </div>
                <div className="nav-item">
                    <ul className="nav-item-ul">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><button>Join Us</button></li>
                    </ul>
                </div>
                <div className="nav-search">
                    <input type="search" name="search" id="search" />
                </div>
            </nav> */}
      {/* Bootstrap Navbar */}
      <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Disabled</a>
              </li> */}
            </ul>
            {/* <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="one" onClick={props.toggleMode}/>
              <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="one">{props.mode==="light"?"Dark": "Light"}</label>
            </div> */}
            <button className="btn btn-primary" onClick={props.toggleMode}>{props.mode === "light"? "Dark Mode" : "Light Mode"}</button>
            <button className="btn btn-primary mx-2" onClick={props.toggleMode2}>{props.blueMode === "blue"? "Darkblue Mode" : "Blue Mode"}</button>
            <button className="btn btn-primary" onClick={props.toggleMode3}>{props.greenMode === "green"? "Lightgreen Mode" : "Green Mode"}</button>
          </div>
        </div>
      </nav>
    </>
  );
}
