import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image'; // Import Image from next/image
import swiggyLogo from '../../../public/Assests/zomato/swiggy1.svg';
import zomatoLogo from '../../../public/Assests/zomato/zomato2.png';
import swiggydeq from '../../../public/Assests/zomato/delivery.gif';
import BlurText from "./BlurText/BlurText"; // Import BlurText component

// Use string paths for images in the public directory
const swiggyLogoPath = '/Assests/zomato/swiggy1.svg';
const zomatoLogoPath = '/Assests/zomato/zomato2.png';
const swiggydeqPath = '/Assests/zomato/delivery.gif';

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
          {/* Center - Navigation Links */}
          <div className="hidden md:flex md:justify-right md:items-right md:w-[90vh] fabril-fatface">
            <nav className="flex space-x-4">
              <a href="/" className="hover:text-[#d2a260]">
                <BlurText text="Home" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
              </a>
              <a href="/menu" className="hover:text-[#d2a260]">
                <BlurText text="Menu" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
              </a>
              <a href="/about" className="hover:text-[#d2a260]">
                <BlurText text="About" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
              </a>
              <a href="/contact" className="hover:text-[#d2a260]">
                <BlurText text="Contact" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
              </a>
            </nav>
          </div>
          {/* Right - Delivery, GIF & Socials */}
          <div className="flex flex-col items-center md:w-1/7 md:order-3 space-y-3 mt-10 md:space-y-0 md:mt-0">
            <BlurText text="Order on" delay={150} animateBy="words" direction="top" className="fabril-fatface text-lg" />
            <Image src="/Assests/zomato/delivery.gif" alt="Swiggy Delivery" width={56} height={56} className="w-14" />
            <div className="flex space-x-9">
              <Image src="/Assests/zomato/swiggy1.svg" alt="Swiggy" width={40} height={40} className="w-10 hover:scale-110 transition" />
              <Image src="/Assests/zomato/zomato2.png" alt="Zomato" width={40} height={40} className="w-10 hover:scale-110 transition" />
            </div>
            <div className="flex space-x-2 mt-2">
              <a href="https://www.facebook.com/hoteltajooty" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="cursor-pointer hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com/hotel_taj_ooty_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-pink-500" />
              </a>
            </div>
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