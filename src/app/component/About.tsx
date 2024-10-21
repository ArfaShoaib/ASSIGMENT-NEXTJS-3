'use client';
import React from "react";
import Image from "next/image";
import {  motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div id="About">
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-950">
    {/* Flex container for About Us text and coffee mug */}
    <div className="flex items-center justify-between w-full max-w-6xl px-1">
      
      {/* Left side: About Us content */}
      <div className="text-white max-w-lg">
        <h1 className="text-4xl font-bold font-newfonts mb-1">About Us</h1> <hr className="hline"/>
        <p className="about-description text-lg leading-6 mt-2 font-Sanns">
          Welcome to our coffee shop! We are passionate about providing you
          with the finest coffee experience. Our carefully selected beans
          and expert brewing techniques ensure that every cup has the perfect aroma.
        </p>
      </div>

      {/* Right side: Coffee mug with animation */}
      <motion.div
       initial={{ y: 0, rotate: 0 }}
       animate={{ y: 10}}
       transition={{
         duration: 1,
         repeat: Infinity,
         repeatType: "mirror",
         ease: "easeInOut",
       }}
     
        className="coffee-mug"
      >
        <Image
          src='/Hot-coffee-drink-on-transparent-background-PNG.png'
          alt="Coffee Mug"
          width={500}
          height={350}
          className="coffee-mug-section-img"
        />
      </motion.div>
      <Link href={"/about"} className="relative top-3/4 right-3/4 ml-9 mb-10">
      <button className="learn-more-btn mt-4">Learn More </button>
      </Link>
    </div>
  </div>
  </div>
  );
};

export default About;
