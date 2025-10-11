import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards"; // Effect-specific styles
import { EffectCards } from "swiper/modules";
import "./Styles/Swiper.css";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import BlurText from "./BlurText/BlurText";
import { motion } from "framer-motion"; // Import Framer Motion
import Link from "next/link";
import {  ChevronRight } from 'lucide-react';
export default function Menu() {
  const menuImages = [
    "/Assets/menu/hotel_taj_menu_page-01.jpg",
    "/Assets/menu/hotel_taj_menu_page-02.jpg",
    "/Assets/menu/hotel_taj_menu_page-03.jpg",
    "/Assets/menu/hotel_taj_menu_page-04.jpg",
    "/Assets/menu/hotel_taj_menu_page-05.jpg",
    "/Assets/menu/hotel_taj_menu_page-06.jpg",
    "/Assets/menu/hotel_taj_menu_page-07.jpg",
    "/Assets/menu/hotel_taj_menu_page-08.jpg",
    "/Assets/menu/hotel_taj_menu_page-09.jpg",
    "/Assets/menu/hotel_taj_menu_page-10.jpg",
  ];

  return (
    <>
      {/* Wrapper div with top property */}
      <div className="relative bg-[#121414] text-[#d2a260] mt-[-6vh]">
        <motion.div
          className="text-center mt-[-3vh]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl fabril-fatface text-[#d2a260]">
            <BlurText
              text="OUR MENU"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl text-center justify-center mb-3"
            />
          </h1>
          <p className="mt-2 text-xl text-white">
            Explore our delicious offerings
          </p>
        </motion.div>
        <div className="min-h-screen flex justify-center items-center bg-[#121414] px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-9xl">
            <motion.div
              className="flex flex-col justify-center space-y-4 text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BlurText
                text="Delicious Dishes"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-5xl mb-3"
              />
              <p className="text-lg fabril-fatface text-[#D2A260]">
                Our menu features a wide variety of dishes crafted with love and
                care. From traditional recipes to modern twists, every dish is
                designed to satisfy your taste buds.
              </p>
              <p className="text-lg fabril-fatface">
                Whether you're craving spicy curries, flavorful biryanis, or
                decadent desserts, we have something for everyone. Explore our
                menu and discover your next favorite meal!
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <TextHoverEffect
                text="Swipe >"
                className="mb-9 ml-auto ml-[14vh]"
              />
              <Link href="/Menu">
              <button className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm lg:text-base font-medium flex items-center">
                <span className="mr-2 underline text-[#d2a260] underline-offset-4">View Full Menu</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
              <div className="w-full max-w-xs md:max-w-md mr-20 sm:mr-15 md:mr-[26vh] lg:mr-[22vh] xl:mr-0">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="menuswiper ml-3 lg:ml-0" // Added responsive margin-left
                  style={{
                    width: "125%",
                    height: "450px", // Set a fixed height for Swiper
                    overflow: "hidden",
                    borderRadius: "20px",
                  }}
                >
                  {menuImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full">
                        <img
                          src={image}
                          alt={`Menu Page ${index + 1}`}
                          className="w-full h-full object-contain rounded-2xl" // Changed object-fit to "contain" for better responsiveness
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}