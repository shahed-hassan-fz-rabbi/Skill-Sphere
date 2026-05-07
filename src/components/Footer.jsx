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

     
      <div className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          text-center sm:text-left
        ">

        
        <div>
          <h2 className="text-2xl font-bold text-[#1babf9]">
            SkillSphere
          </h2>
          <p className="mt-2 text-sm">
            Learn from experts <br />
            Upgrade your skills
          </p>
        </div>

        
        <div>
          <h6 className="footer-title">Contact</h6>
          <div className="flex flex-col gap-2 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope /> support@skillsphere.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +880 1234-567890
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Bangladesh
            </p>
          </div>
        </div>

        
        <div>
          <h6 className="footer-title">Social</h6>
          <div className="flex flex-col gap-2 text-sm">
            <a className="flex items-center gap-2 hover:text-primary">
              <FaFacebook /> Facebook
            </a>
            <a className="flex items-center gap-2 hover:text-primary">
              <FaTwitter /> Twitter
            </a>
            <a className="flex items-center gap-2 hover:text-primary">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

      
        <div>
          <h6 className="footer-title">Legal</h6>
          <div className="flex flex-col gap-2 text-sm">
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>
        </div>

      </div>

    
      <div className="border-t border-base-300 text-center py-4 text-sm text-base-content/60">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;