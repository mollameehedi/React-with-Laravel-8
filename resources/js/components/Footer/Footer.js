import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer_nav">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-3 p-0">
                <ul>
                  <li><Link to="/">COPD Management</Link></li>
                  <li><Link to="/employee">Employee Wellness</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 p-0">
                <ul>
                  <li><Link to="/team">Core Team</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 p-0">
                <ul>
                  <li><Link to="/paper">Our White Papers</Link></li>
                  <li><Link to="/">Blog</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 p-0">
                <ul>
                  <li><Link to="/">Our Privacy Policy</Link></li>
                  <li><Link to="/">Our Terms and Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center">
          <p>&copy; bioStealth  <span id="year"></span></p>
        </div>
        <script>
          {/* {document.getElementById("year").innerHTML = new Date().getFullYear()} */}
        </script>
      </footer>
    </div>
  )
}

export default Footer;