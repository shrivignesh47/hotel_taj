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

  // Menu images
  const menuPages = Array.from({ length: 9 }, (_, i) =>
    `/Assests/menu/hotel_taj_menu_page-000${i + 1}.jpg`
  );

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
