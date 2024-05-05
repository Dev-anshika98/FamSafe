import React from "react";

import { motion } from "framer-motion";
import ImageMain from "../../../assets/HOME.jpg"
import "../../../pages/shared/Shared.css";

const Banner = () => {
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className=" text-[#FF735C] text-6xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">Welcome To Famesafe</h2>
        <h1 className="text-4xl font-semibold mt-7 mb-0 translate-y-[-50%] sm:translate-y-[-0%]">Keep Your Loved one’s Connected</h1>
        <div className="my-4">
         
        </div>
        <p className=" text-black max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
        your ultimate companion for safety and peace of mind. Our app offers cutting-edge features designed to keep you and your loved ones safe in any situation. From real-time location sharing to instant distress messaging, we've got you covered. Download now and take control of your safety today.
          {/* I am a Front-end Developer. I am very passionate to my work and
          dedicated to explore New Tools And Technologies. */}
        </p>

      
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        
      >
      <img className=" w-96 h-96 ml-64" src={ImageMain} alt="main"/>
        
      </motion.div>
    </div>
  );
};

export default Banner;
