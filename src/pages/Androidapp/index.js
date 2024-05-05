import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
// import Lottie from "react-lottie";
import ImageMain from "../../assets/appimage.png"
import coding from "../../assets/coding.json";
import "../shared/Shared.css";
import { SecondaryBtn } from "../../components/atoms/SecondaryBtn";
// import Android from './../Android/index';

const Androidapp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
       <div className="w-1/2 p-6">
          <h3 data-aos="fade-up">Welcome,</h3>

          <h1 data-aos="fade-up" className="mb-4 text-6xl font-bold">
            Team <span className='text-[#10E1E6]'>Ctrl Freaks</span> Presents <br />
            FamSafe<span className='text-[#10E1E6] font-bold'></span><br />
          </h1>

          <div className="buttons" data-aos="fade-up">
        
            <a
              href="#"
              data-lity
              className="btn-secondary"
            >
              <button className= " border px-4 py-2 text-lg" aria-hidden="true">Download Our App</button>

            </a>
          </div>
        </div>

      
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        
      >
      <img className=" w-96 h-100 ml-64" src={ImageMain} alt="main"/>
        
      </motion.div>
    </div>
  );
};

export default Androidapp;
