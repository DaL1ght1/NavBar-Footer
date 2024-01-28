import React from "react";
import "./footer.css";
import i3elogo from "/src/components/icons/i3elogo.png";
import facebook from "/src/components/icons/facebook.png";
import instagram from "/src/components/icons/instagram.png";
import youtube from "/src/components/icons/youtube.png";
import contact from "/src/components/icons/contact.png";

const Footer = () => (
  <footer className="page-footer ">
    <h5 className="text-uppercase">
      <img
        src={i3elogo}
        alt="Company Logo"
        className="logo1"
        width="100"
        height="50"
      />
      <b>IEEE ENSI Student Branch</b>
    </h5>
    <p>
      <b>
        <i className="kk12"> You may also find us at :</i>
      </b>
    </p>

    <hr className="clearfix w-100 d-md-none pb-0" />

    <div className="col-md-3 mb-md-0 mb-3">
      <a>
        <a className="Logosfooter">
          <img src={facebook} width="35" height="25" />
          <a href="#!"> Facebook </a>
        </a>
        <a className="Logosfooter">
          <img src={instagram} width="35" height="25" />
          <a href="#!"> Instagram </a>
        </a>
        <a className="Logosfooter">
          <img src={youtube} width="35" height="25" />
          <a href="#!"> YouTube </a>
        </a>
        <a className="Logosfooter">
          <img src={contact} width="35" height="25" />
          <a href="#!"> Email </a>
        </a>
      </a>
    </div>

    <div className="footer-copyright">
      © 2024 Copyright:
      <a href="#!"> khalil krifi</a>
    </div>
  </footer>
);

export default Footer;
