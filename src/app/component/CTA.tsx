import React from "react";

const CTA = () => {
  return (
    <section className="text-white body-font bg-yellow-950">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl font-Sanns">
          Join Us for a Cup
          </h1>
          <p className="leading-relaxed mt-4 font-sans">
          Plan your visit to our coffee shop and enjoy a relaxing atmosphere, perfect for meetings, dates, or solo retreats
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5 font-Sanns">Reservation Form</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-black font-newfonts">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-yellow-950 focus:ring-2 focus:ring-yellow-950 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm  text-black font-newfonts">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-yellow-950 focus:ring-2 focus:ring-yellow-950 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-yellow-950 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-900 rounded text-lg font-Sanns">
            Submit
          </button>
          <p className="text-xs text-gray-900 mt-3 font-mono">Make Reservation Now.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
