'use client';
import React, {useEffect , useRef, useCallback, useLayoutEffect} from "react";
import { motion } from "framer-motion";
import {gsap} from 'gsap'

const AboutPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const animation = gsap.from(sectionRef.current, {
        duration: 1,
        opacity: 0.8,
        y: 50,
        ease: 'power3.out',
      });
      return () => {
        animation.kill();
      };
    }
  }, []);

  return (
    <div className="bg-yellow-950 h-[890px] w-full text-left leading-9 text-white">
      <div ref={sectionRef} className="p-2 ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4  font-newfonts"
        >
            About Us 
          </motion.h1>
    
          <motion.p
            className="text-lg mb-4 font-Sanns "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to our coffee shop! We believe in serving the finest coffee
            experience that transcends mere consumption. Our journey began with a
            passion for coffee and a desire to create a welcoming space for
            coffee lovers.
          </motion.p>
    
          <motion.h2
            className="text-3xl font-semibold mt-8 mb-4  font-newfonts"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our Story
          </motion.h2>
    
          <motion.p
            className="text-lg mb-4 font-Sanns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Our story started years ago when our founder traveled the world,
            discovering the unique flavors and brewing techniques of various
            cultures. Each cup of coffee reflects this rich heritage, and we are
            proud to bring these experiences to you.
          </motion.p>
    
          <motion.h2
            className="text-3xl font-semibold mt-8 mb-4  font-newfonts"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Our Values
          </motion.h2>
    
          <motion.p
            className="text-lg mb-4 font-Sanns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            At our coffee shop, we value quality, community, and sustainability.
            We source our beans from ethical farms, ensuring that every sip you
            take supports not only the farmers but also the environment.
          </motion.p>
    
          <motion.h2
            className="text-3xl font-semibold mt-8 mb-4  font-newfonts"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Our Mission
          </motion.h2>
    
          <motion.p
            className="text-lg mb-4 font-Sanns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Our mission is to deliver exceptional coffee and create an inviting
            atmosphere for everyone. Whether you are here for a quick cup or to
            relax with friends, we aim to make every visit memorable.
          </motion.p>
    
          <motion.h2
            className="text-3xl font-semibold mt-8 mb-4  font-newfonts"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Join Us
          </motion.h2>
    
          <motion.p
            className="text-lg mb-4 font-Sanns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            We invite you to join us on this journey of flavor and connection. 
            Visit us to experience our unique coffee selections and become a part 
            of our community.
          </motion.p>
        </div>
        </div>
      );
    };
    
    export default AboutPage;

