import React from "react";
// import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine } from "../../components";

import aboutpic from "../../assets/about.jpg"

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          {/* <h3 className="text-neutral text-center">Something About Myself</h3> */}
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Us</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src={aboutpic}
              
              alt="aboutpic"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="About"
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">What's FamSafe?</h1>
            <div className="my-8">
              
            </div>
            <p className="text-black  font-extrabold text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            At FamSafe, we believe in empowering individuals to stay safe and connected. Our mission is to provide innovative solutions that enhance personal security and provide peace of mind to our users and their families. With a focus on usability and reliability, we strive to offer the most advanced features while ensuring simplicity and ease of use. Join us on our journey to redefine safety in the digital age.
              
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              
              
            </p>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;