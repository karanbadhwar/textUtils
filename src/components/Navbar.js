import React, { useState } from "react";
import PropTypes from "prop-types";
// import AppCss from './App.css';
// import { a } from "react-router-dom";

export default function Navbar(props) {
  const [pallete, setPallete] = useState("Dark Mode Color Pallete");
  
  const changePallete = (e) =>{
    setPallete(e.target.value);
    // props.setMode(e.target.dataset.palleteColor)
    if(props.mode==='dark'){
      // let darkPanel = document.getElementById('dropdownMenuButton1');
      // darkPanel.style.display = 'inline-block';
      document.body.style.backgroundColor = e.target.dataset.palleteColor;
    }
    // console.log(e.target.dataset.palleteColor);
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
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
              <a className="nav-a active" aria-current="page" href="#">
                Home
              </a>
              {/* <a href='/'>Home</a> */}
            </li>
            {/* <li className="nav-item">
              <a className="nav-a" href="/aboutus">
                {props.about}
              </a>
            </li> */}
          </ul>
          <div className="dropdown mx-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {pallete}
            </button>
            <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1" onClick={changePallete}>
              <li>
                <button className="dropdown-item" value="Navy" data-pallete-color='#0A1824' style={{backgroundColor: '#0A1824', color: "white"}} >
                  Navy
                </button>
              </li>
              <li>
                <button className="dropdown-item" data-pallete-color='#2A4930' value="Dark Green" style={{backgroundColor: '#2A4930', color: "white"}}>
                  Dark Green
                </button>
              </li>
              <li>
                <button className="dropdown-item" data-pallete-color="#092409" value="Military Green" style={{backgroundColor: '#092409', color: "white"}}>
                  Military Green
                </button>
              </li>
              <li>
                <button className="dropdown-item" data-pallete-color='#743f1a' value="#743f1a" style={{backgroundColor: '#743f1a', color: "white"}}>
                  Brown
                </button>
              </li>
              
            </ul>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextUtils",
};
