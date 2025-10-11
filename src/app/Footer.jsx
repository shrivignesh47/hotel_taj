import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image'; // Import Image from next/image
import BlurText from "./Components/BlurText/BlurText"; // Import BlurText component


export default function Footer() {
  return (
    <div className="relative ">
      <footer className="bg-[#1a1a1a] text-white py-4 px-4 text-xs border-t border-[#d2a260]">
        <div className="max-w-10xl mx-auto flex flex-wrap justify-between items-center space-y-3 md:space-y-0">
          {/* Left - Hotel Info and Contact */}
          <div className="text-left flex flex-col items-start space-y-2 md:w-1/3">
            <h2 className="text-lg font-bold text-[#d2a260] fabril-fatface">
              <BlurText text="Hotel Taj" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
            </h2>
            <p className="text-gray-400">📍 Old Amirtha Hotel Building, New Main Bazaar Road, Ooty, Tamil Nadu 643001</p>
            <p className="text-gray-400">📞 +91 89404 03040</p>
          </div>
          {/* Center - Delivery, GIF & Socials */}
          <div className="flex flex-col items-center md:w-1/3 space-y-4 ml-[25vh] md:ml-0">
            <BlurText text="Order on" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
            <Image src="/Assets/zomato/delivery.gif" alt="Swiggy Delivery" width={70} height={70} className="w-16" /> 
            <div className="flex space-x-12"> 
              <a href="https://www.swiggy.com/menu/114563?source=sharing" target="_blank" rel="noopener noreferrer">
                <Image src="/Assets/zomato/swiggy1.svg" alt="Swiggy" width={100} height={100} className="w-20 hover:scale-110 transition" /> 
              </a>
              <a href="https://link.zomato.com/xqzv/rshare?id=7466380336cb9158" target="_blank" rel="noopener noreferrer">
                <Image src="/Assets/zomato/zomato2.png" alt="Zomato" width={100} height={100} className="w-20 hover:scale-110 transition" /> 
              </a>
            </div>
            <div className="flex space-x-4 mt-3"> 
              <a href="https://www.facebook.com/hoteltajooty" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="cursor-pointer hover:text-blue-500 text-lg" /> 
              </a>
              <a href="https://www.instagram.com/hotel_taj_ooty_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-pink-500 text-lg" /> 
              </a>
            </div>
          </div>
          {/* Right - Navigation Links */}
          <div className="hidden md:flex md:justify-end md:items-center md:w-1/3 fabril-fatface">
            <nav className="flex space-x-4">
              <a href="/" className="hover:text-[#d2a260]">
                <BlurText text="Home" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
              </a>
              <a href="/Menu" className="hover:text-[#d2a260]">
                <BlurText text="Menu" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
              </a>
              <a href="/About" className="hover:text-[#d2a260]">
                <BlurText text="About" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
              </a>
              <a href="/Contact" className="hover:text-[#d2a260]">
                <BlurText text="Contact" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
              </a>
            </nav>
          </div>
        </div>
        {/* Bottom Line */}
        <div className="text-center text-gray-500 mt-3 border-t border-gray-700 pt-1">
          © 2025 MagnitudeMedia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}