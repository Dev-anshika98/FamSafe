import React from "react";
import {  FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../../../assets/fam.jpg";

const Footer = () => {
  // const year = new Date();

  return (
    <footer className="w-full text-center p-6 bg-accent" style={{ backgroundColor: "black", height: "100px" }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-24 h-20 mr-4" src={logo} alt="logo" />
          <p className="text-white">Developed by{" "}
            <a href="#/" className=" " target="blank">
              Team Ctrl freaks with 🧡 
            </a>
          </p>
        </div>
        <div className="flex items-center">
          <a className="inline-block mx-2" href="#/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a className="inline-block mx-2" href="#/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-white" />
          </a>
          <a className="inline-block mx-2" href="#/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-pink-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
