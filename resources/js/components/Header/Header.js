import React from "react";
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <div>
            <header>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* <img src="images/logo.png" className="img-fluid" alt=""> */}
          </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-align-justify"></i>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link  active" to="/" exact>COPD Management<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  active" to="/contact" exact>Contact<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employee">Employee Wellness</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team">Core Team</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Resources
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/paper">White Papers</NavLink>
                <a className="dropdown-item" href="#">Blog</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link m-btn  mobile-none-btn" href="#">Request Demo</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
        <div className="clr"></div>
    </header>
        </div>
    )
}

export default Header