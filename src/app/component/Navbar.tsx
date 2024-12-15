'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiCoffee, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-950 text-white z-50 sticky top-0 shadow-md">
      <div className="flex justify-between items-center px-6 lg:px-20 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <FiCoffee className="text-3xl mr-2" />
          <h1 className="text-xl sm:text-2xl font-bold font-newfonts">COFFEE</h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label='Toggle menu' className='focus:outline-none focus:ring-2 focus:ring-white rounded-md p-1'>
            {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl"/>}
          </button>
        </div>

        {/* Nav Links */}
        <ul className={`md:flex md:space-x-9 md:items-center absolute md:static bg-yellow-950 md:bg-transparent top-full left-0 right-0 md:w-auto w-full ${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
          <li className='md:inline-block block text-center py-3 md:py-0'>
            <Link href="/" className="block px-4 md:px-0 hover:text-gray-300">Home</Link>
          </li>
          <li className='md:inline-block block text-center py-3 md:py-0'>
            <Link href="#About" className="block px-4 md:px-0 hover:text-gray-300">About</Link>
          </li>
          <li className='md:inline-block block text-center py-3 md:py-0'>
            <Link href="/menu" className="block px-4 md:px-0 hover:text-gray-300">Menu</Link>
          </li>
          <li className='md:inline-block block text-center py-3 md:py-0'>
            <Link href="/review" className="block px-4 md:px-0 hover:text-gray-300">Review</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
