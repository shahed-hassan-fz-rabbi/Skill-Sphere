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
    <footer className="bg-base-200 text-base-content">
      
      
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          text-center sm:text-left
        "
      >

       
        <div>
          <h2 className="text-2xl font-bold text-[#1babf9]">
            SkillSphere
          </h2>

          <p className="mt-3 text-sm leading-6">
            Learn from experts <br />
            Upgrade your skills
          </p>
        </div>

        
        <div>
          <h6 className="footer-title mb-3">
            Contact
          </h6>

          <div className="flex flex-col gap-3 text-sm">

            <p className="flex items-center justify-center sm:justify-start gap-2">
              <FaEnvelope />
              support@skillsphere.com
            </p>

            <p className="flex items-center justify-center sm:justify-start gap-2">
              <FaPhone />
              +880 1234-567890
            </p>

            <p className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt />
              Bangladesh
            </p>
          </div>
        </div>

        
        <div>
          <h6 className="footer-title mb-3">
            Social
          </h6>

          <div className="flex flex-col gap-3 text-sm">

            <a
              href="#"
              className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition"
            >
              <FaFacebook />
              Facebook
            </a>

            <a
              href="#"
              className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition"
            >
              <FaTwitter />
              Twitter
            </a>

            <a
              href="#"
              className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition"
            >
              <FaInstagram />
              Instagram
            </a>
          </div>
        </div>

        
        <div>
          <h6 className="footer-title mb-3">
            Legal
          </h6>

          <div className="flex flex-col gap-3 text-sm">
            <a href="#" className="link link-hover">
              Terms & Conditions
            </a>

            <a href="#" className="link link-hover">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

     
      <div className="border-t border-base-300 text-center py-4 text-sm text-base-content/60 px-4">
        © {new Date().getFullYear()} SkillSphere.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;