import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Utensils } from 'lucide-react';
import BlurText from './BlurText/BlurText';
import { SparklesText } from "../../components/magicui/sparkles-text";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect"
import Link from 'next/link';
const words = `At Hotel Taj we craft exceptional meals blending tradition and innovation, using only the finest ingredients. Whether it’s a family meal, casual outing, or grand celebration, our elegant ambiance and impeccable service make every moment unforgettable. Indulge in aromatic Indian delicacies and global cuisines, thoughtfully prepared to delight your taste buds... Make your events truly special with our catering services!
`;
const MCarousel = ({ items, autoScroll = true, autoScrollInterval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, autoScrollInterval]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#121414]">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-0 text-white relative z-10">
          <div className="flex items-center mb-6 lg:mb-8">
            <Utensils className="w-6 h-6 lg:w-8 lg:h-8 mr-2" />
            <SparklesText text="SINCE" />
            <span className="bg-yellow-300 text-xs px-2 py-1 rounded ml-2 text-emerald-800 font-semibold">1992</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1 lg:mb-6">
                    <BlurText
                      text="HOTEL"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-5xl mb-3"
                    />
                    <BlurText
                      text="TAJ OOTY"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-5xl mb-1 text-[#d2a260]" // Apply the color using a class
                    />
          </h1>

          <TextGenerateEffect  className="mb-2 lg:mb-12 text-base lg:text-lg max-w-md" words={words}/>

          <div className="flex space-x-3 lg:space-x-4 mb-8 lg:mb-12">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-white text-[#d2a260] shadow-lg' 
                    : 'border-2 border-white/70 text-white hover:border-white'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
          <div className="flex space-x-3 lg:space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 lg:p-3 border-2 border-white/70 rounded-full text-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 lg:p-3 border-2 border-white/70 rounded-full text-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          <div className="mt-8 lg:mt-12">
          <Link href="/About">
            <button className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm lg:text-base font-medium flex items-center">
              <span className="mr-2 underline text-[#d2a260] underline-offset-4">Why Choose Taj</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
        
        </div>
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-screen relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[#d2a260] rounded-t-[40%] lg:rounded-t-none lg:rounded-l-[40%] shadow-xl">
            <div className="w-full h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="relative w-full h-full max-w-[98%] max-h-[95%] rounded-t-[40%] sm:max-w-[95%] sm:max-h-[95%] lg:max-w-[80%] lg:max-h-[80%] rounded-lg lg:rounded-l-[40%] lg:rounded-r-[10%] overflow-hidden shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCarousel;