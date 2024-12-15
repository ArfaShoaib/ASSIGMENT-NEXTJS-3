'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div id="About" className="flex justify-center bg-yellow-950 min-h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl py-8 sm:py-12 px-4 sm:px-6">
        {/* Flex container for About Us text and coffee mug */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12">
          
          {/* Left side: About Us content */}
          <div className="text-white max-w-lg w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-newfonts mb-1">About Us</h1>
            <hr className="hline"/>
            <p className="about-description text-base sm:text-lg leading-6 mt-2 font-Sanns">
              Welcome to our coffee shop! We are passionate about providing you
              with the finest coffee experience. Our carefully selected beans
              and expert brewing techniques ensure that every cup has the perfect aroma.
            </p>

            {/* Learn More Button */}
            <div className="flex justify-center md:justify-center mt-4">
              <Link href={"/about"}>
                <button className="learn-more-btn px-6 py-2 text-sm sm:text-base max-w-[150px] max-h-[90px] ml-[-45px]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right side: Coffee mug with animation */}
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={{ y: 10 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="coffee-mug w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
          >
            <Image
              src='/Hot-coffee-drink-on-transparent-background-PNG.png'
              alt="Coffee Mug"
              width={500}
              height={350}
              className="coffee-mug-section-img w-full max-w-[0px]  sm:max-w-[100px] md:max-w-[400px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
