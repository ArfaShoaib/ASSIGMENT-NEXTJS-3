import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
<footer className="text-gray-600 body-font w-full">
  <div className="container px-4 sm:px-5 py-12 sm:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-full md:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-8 sm:w-10 h-8 sm:h-10  text-white p-2 bg-brown-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-lg sm:text-xl font-newfonts">Coffee Haven</span>
      </a>
      <p className="mt-2 text-sm text-gray-500 font-Sanns px-4 sm:px-0">
        Your perfect cup of coffee is just a sip away. Enjoy fresh brews, cozy vibes, and the finest beans in every cup.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm sm:text-base mb-3 font-Sanns">COFFEE MENU</h2>
        <nav className="list-none mb-10 font-Mont space-y-2">
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Hot Coffees</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Cold Brews</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Specialty Drinks</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Non-Coffee Options</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm  sm:text-base mb-3 font-Sanns">LOCATIONS</h2>
        <nav className="list-none mb-10 font-Mont space-y-2">
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Downtown</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Uptown</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Suburbs</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Beachside</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm  sm:text-base mb-3 font-Sanns">ABOUT US</h2>
        <nav className="list-none mb-10 font-Mont space-y-2">
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Our Story</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Sustainability</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Careers</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Contact Us</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm  sm:text-base mb-3 font-Sanns">CONNECT WITH US</h2>
        <nav className="list-none mb-10 font-Mont space-y-2">
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Instagram</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Facebook</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">Twitter</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">LinkedIn</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-yellow-950">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-center sm:text-left text-base font-newfonts">
        © 2024 Coffee Haven —
        <a
          href="https://twitter.com/coffeehaven"
          rel="noopener noreferrer"
          className="text-white ml-1 text-base font-newfonts"
          target="_blank"
        >
          @coffeehaven
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        {/* Repeat similar structure for other icons */}
      </span>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer
