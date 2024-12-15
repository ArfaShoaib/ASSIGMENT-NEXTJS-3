"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/coffee.jpg"
        alt="coffee"
        fill={true}
        className="object-cover object-center brightness-50"
      />
      <motion.div
        initial={{ opacity: 0, y: 60 }} // Start state
        animate={{ opacity: 1, y: 0, scale: 1 }} // End state
        transition={{ duration: 2 }} // Animation duration
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-white sm:text-xl md:text-2xl lg:text-3xl font-Mont mb-4 sm:mb-6 md:mb-8 text-lg">
          We Really Like What We Do
        </h1>
        <p className="text-white leading-tight sm:leading-normal font-Sanns text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto">
          Coffee Beans With a Perfect Aroma
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
