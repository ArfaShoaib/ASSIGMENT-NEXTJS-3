import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <section className="text-black body-font bg-slate-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center  h-full block"
                  src={require("../../../public/espresso.png")}
                  width={280}
                  height={200}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hot Coffees
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Espresso
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center  h-full block relative top-4"
                  src={require("../../../public/cappu.png")}
                  width={280}
                  height={200}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hot Coffees
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Cappuccino
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center h-full block"
                  src={require("../../../public/llattee.png")}
                  width={260}
                  height={200}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hot Coffees
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Latte
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center  h-full block"
                  src={require("../../../public/mocha.png")}
                  width={280}
                  height={200}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hot Coffees
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Mocha
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
              <div className="flex justify-center w-full relative right-8">
              <Link href="/menu" className="relative right-96 mr-56 mt-10">
                <button className=" border-4 p-3 rounded-lg bg-yellow-950 text-white">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>

  );
};

export default Menu;
