'use client';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HotelTajMenu = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  // Hardcoded menu image paths
  const menuPages = [
    "/Assets/menu/Hotel_taj_menu_page-01.jpg",
    "/Assets/menu/Hotel_taj_menu_page-02.jpg",
    "/Assets/menu/Hotel_taj_menu_page-03.jpg",
    "/Assets/menu/Hotel_taj_menu_page-04.jpg",
    "/Assets/menu/Hotel_taj_menu_page-05.jpg",
    "/Assets/menu/Hotel_taj_menu_page-06.jpg",
    "/Assets/menu/Hotel_taj_menu_page-07.jpg",
    "/Assets/menu/Hotel_taj_menu_page-08.jpg",
    "/Assets/menu/Hotel_taj_menu_page-09.jpg",
    "/Assets/menu/Hotel_taj_menu_page-10.jpg",
  ];

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-full max-w-5xl"
      >
        {menuPages.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Hotel Taj Menu Page ${index + 1}`}
              className="w-full h-full object-contain rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelTajMenu;
