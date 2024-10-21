'use client'
import Image from "next/image";
import Link from "next/link";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Menu from "./component/Menu";
import CTA from "./component/CTA";
import FooterPage from "./component/Footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Menu/>
    <CTA/>
    <FooterPage/>
   </div>
  );
}
