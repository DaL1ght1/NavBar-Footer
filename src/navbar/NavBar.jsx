import { children } from "react";
import logo from "/src/components/logo.png";
import "./navbar.css";
export default function Navbar() {
  return (
    <>
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
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/program">Program</CustomLink>
        <CustomLink href="/aboutus">About Us</CustomLink>
        <CustomLink href="/contactus">Contact Us</CustomLink>
        <CustomLink href="/registration">Registration</CustomLink>
      </nav>
    </>
  );
}
function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
