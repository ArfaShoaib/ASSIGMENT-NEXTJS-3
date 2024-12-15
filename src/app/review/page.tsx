'use client'
// pages/Reviews.tsx
import { motion } from 'framer-motion';
import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Reviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      
      date: 'October 20, 2024',
      text: 'The coffee here is amazing! Highly recommend the caramel latte.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      
      date: 'October 18, 2024',
      text: 'Great ambiance and delicious espresso.',
      rating: 4,
    },
    {
      name: 'Alex Brown',
     
      date: 'October 17, 2024',
      text: 'Love the specialty drinks, especially the cold brews!',
      rating: 5,
    },
  ];

  // Use useRef with an array of refs
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Callback function to handle setting refs correctly
  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: index * 0.2,
          }
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-10">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Customer Reviews
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            ref={(el) => setCardRef(el, index)} // Properly setting the ref with callback
            className="bg-white shadow-md p-5 sm:p-6 rounded-lg transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <Image
                src={"#"}
                alt="User Avatar"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                width={0}
                height={0}
              />
              <div>
                <h3 className="font-bold text-base sm:text-lg">{review.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{review.date}</p>
              </div>
            </div>
            <p className="mb-4 text-sm sm:text-base">{review.text}</p>
            <div className="flex">
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
