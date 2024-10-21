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
    <nav className=" text-white">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <FiCoffee className="text-3xl mr-2" />
          <h1 className="text-2xl font-bold font-newfonts">COFFEE</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
        <ul className={`md:flex space-x-9 items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#About">About</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/review">Review</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 items-center">
          <li>
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="#About" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link href="/menu" onClick={toggleMenu}>Menu</Link>
          </li>
          <li>
            <Link href="/review" onClick={toggleMenu}>Review</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
