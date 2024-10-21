"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero-section ">
      <Image
        src={require("../../../public/coffee.jpg")}
        alt="coffee"
       fill={true}
        className="pics"
        
      />
      <div>
        <motion.div
          initial={{ opacity: 0, y: 60 }} // Start state
          animate={{ opacity: 1, y: 0, scale: 1 }} // End state
          transition={{ duration: 2 }} // Animation duration
          className="flex flex-col  justify-center items-center "
        >
          <h1 className="text-white md:mr-4 mt-60 font-Mont text-lg">
            We Really Like What We Do
          </h1>
          <p className="text-white md:mt-10 leading-5 font-Sanns text-5xl">
            Coffee Beans With a Perfecr Aroma
          </p>
        </motion.div>
      </div>
     
    </div>
  );
};

export default Hero;
