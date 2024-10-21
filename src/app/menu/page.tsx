"use client";
import React from "react";
import Image from "next/image";

const MoreMenuPage = () => {
  return (
    <div>
      <section className="text-black body-font bg-yellow-950">
        <div className="container px-5 py-12 sm:py-16 md:py-24 mx-auto">
          {/* Cold Coffees */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 text-white">Cold Coffees</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/pngtree-cappuccino-ice-with-cup-png-image_12777363.png")}
                  alt="Iced Cappuccino"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Iced Cappuccino</h3>
                <p className="text-gray-700">Rs. 180</p>
              </div>
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/ilatte.png")}
                  alt="Iced Latte"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Iced Latte</h3>
                <p className="text-gray-700">Rs. 180</p>
              </div>
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/coldbrew.png")}
                  alt="Cold Brew"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Cold Brew</h3>
                <p className="text-gray-700">Rs. 200</p>
              </div>
            </div>
          </div>

          {/* Specialty Coffees */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 text-white">Specialty Coffees</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/caramel.jpg")}
                  alt="Caramel Macchiato"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Caramel Macchiato</h3>
                <p className="text-gray-700">Rs. 250</p>
              </div>
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/latte.jpg")}
                  alt="Cinnamon Latte"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Cinnamon Latte</h3>
                <p className="text-gray-700">Rs. 220</p>
              </div>
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/irish.png")}
                  alt="Irish Coffee"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Irish Coffee</h3>
                <p className="text-gray-700">Rs. 280</p>
              </div>
            </div>
          </div>

          {/* Non-Coffee Items */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 text-white">Non-Coffee Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/Hot-Chocolate-PNG-HD-Quality.png")}
                  alt="Hot Chocolate"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Hot Chocolate</h3>
                <p className="text-gray-700">Rs. 150</p>
              </div>
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/tea.png")}
                  alt="Tea"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Tea</h3>
                <p className="text-gray-700">Rs. 100</p>
              </div>
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/juice.png")}
                  alt="Fresh Juice"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Fresh Juice</h3>
                <p className="text-gray-700">Rs. 180</p>
              </div>
            </div>
          </div>

          {/* Add-Ons */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 text-white">Add-Ons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/cream.png")}
                  alt="Whipped Cream"
                  width={200}
                  height={200}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Whipped Cream</h3>
                <p className="text-gray-700">Rs. 20</p>
              </div>
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/vanillasyrup.png")}
                  alt="Vanilla Syrup"
                  width={199}
                  height={250}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Vanilla Syrup</h3>
                <p className="text-gray-700">Rs. 30</p>
              </div>
              <div className="p-4 bg-white rounded shadow-md text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={require("../../../public/cramelsyrup.png")}
                  alt="Caramel Syrup"
                  width={320}
                  height={250}
                  className="mx-auto relative"
                />
                <h3 className="text-lg font-semibold mb-2">Caramel Syrup</h3>
                <p className="text-gray-700">Rs. 30</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreMenuPage;
