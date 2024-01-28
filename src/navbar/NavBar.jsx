import { NavLink } from "react-router-dom";
import logo from "/src/components/logo.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="backnav">
        <div className="header">
          <a href="/">
            <img
              src={logo}
              alt="Company Logo"
              className="logo"
              width="200"
              height="100"
            />
          </a>

          <nav className="navbar">
            <div className="navigation">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/program">Program</NavLink>
              <NavLink to="/aboutus">About Us</NavLink>
              <NavLink to="/contactus">Contact Us</NavLink>

              <NavLink className="registred" to="/registration">
                Registration
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
