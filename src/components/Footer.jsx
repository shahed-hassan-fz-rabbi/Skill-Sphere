import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">

      {/* Brand */}
      <aside>
        <h2 className="text-2xl font-bold text-primary">SkillSphere</h2>
        <p className="mt-2">
          Learn from experts <br />
          Upgrade your skills 
        </p>
      </aside>

      {/* Contact */}
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="flex items-center gap-2">
          <FaEnvelope /> support@skillsphere.com
        </a>
        <a className="flex items-center gap-2">
          <FaPhone /> +880 1234-567890
        </a>
        <a className="flex items-center gap-2">
          <FaMapMarkerAlt /> Bangladesh
        </a>
      </nav>

      {/* Social */}
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="flex items-center gap-2 hover:text-primary">
          <FaFacebook /> Facebook
        </a>
        <a className="flex items-center gap-2 hover:text-primary">
          <FaTwitter /> Twitter
        </a>
        <a className="flex items-center gap-2 hover:text-primary">
          <FaInstagram /> Instagram
        </a>
      </nav>

      {/* Legal */}
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav>

    </footer>
  );
};

export default Footer;