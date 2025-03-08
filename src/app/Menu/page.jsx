'use client';
import React, { useState, useEffect } from 'react';
import { Menu, Utensils, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
import ShinyText from '../../components/ui/ShinyText/ShinyText';
// Rename the component to follow PascalCase convention
export default function Manu() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleCategory = (categoryTitle) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  return (
    <div className="menupcon h-full bg-[#121414] text-[#d2a260] overflow-hidden">
      {/* Parallax Header */}
      <div 
        className="relative h-screen overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <Utensils 
            className="w-20 h-20 mb-6 animate-spin-slow text-[#e3b670]"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          />
          <h1 
            className="text-10xl text-[#d2a260] font-bold mb-4 animate-slide-down"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            <ShinyText text="Hotel Taj" disabled={false} speed={3} className="custom-class fabril-fatface text-[10vh]" />
          </h1>
          <p 
            className="text-2xl text-[#e3b670] italic animate-fade-in-delay"
            style={{
              transform: `translateY(${scrollY * 0.4}px)`
            }}
          >
            Culinary Excellence Since 1992
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 font-serif relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#1a1c1c] p-6 rounded-lg shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: `translateY(${Math.max(0, (scrollY - 500) * 0.1)}px)`
              }}
            >
              {/* Category Title */}
              <h3 
                className="text-xl font-bold mb-4 flex items-center justify-between cursor-pointer hover:text-[#e3b670] transition-colors duration-300"
                onClick={() => toggleCategory(category.title)}
              >
                <span className="flex items-center gap-2">
                  <Menu className="w-5 h-5" />
                  {category.title}
                </span>
                {expandedCategories[category.title] ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </h3>
              {/* Menu Items */}
              <ul className="space-y-2 overflow-hidden transition-all duration-500">
                {(expandedCategories[category.title] ? category.items : category.items.slice(0, 6)).map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex justify-between items-center hover:text-[#e3b670] transition-colors duration-300 animate-slide-in"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <span className="text-base">{item}</span>
                  </li>
                ))}
                {!expandedCategories[category.title] && category.items.length > 6 && (
                  <li 
                    className="text-sm italic text-center cursor-pointer hover:text-[#e3b670] transition-colors duration-300"
                    onClick={() => toggleCategory(category.title)}
                  >
                    +{category.items.length - 6} more items
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div 
          className="chef-specials mt-16 relative rounded-lg shadow-xl hidden md:block"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 1000) * 0.1)}px)`
          }}
        >
          <div className="relative bg-[#1a1c1c]/80 backdrop-blur-sm p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-[#e3b670]">Chef's Specials</h3>
              <Coffee className="w-8 h-8 animate-bounce-slow text-[#e3b670]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialDishes.map((dish, index) => (
                <div 
                  key={index}
                  className="relative h-[200px] rounded-lg overflow-hidden group transform hover:-translate-y-1 transition-all duration-500"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <img 
                    src={dish.image} 
                    alt={dish.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                    <span className="text-white text-xl font-bold transform group-hover:scale-105 transition-transform duration-300">
                      {dish.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#d2a260] text-[#121414] p-3 rounded-full shadow-lg hover:bg-[#b88c4a] transition-colors duration-300"
      >
        <ChevronUp size={24} />
      </button>
      <div className="mt-[120vh] pb-1 lg:mt-[40vh]">
      </div>
    </div>
  );
}

const specialDishes = [
  {
    title: "Tandoori Special",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Beef Briyani",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Signature Desserts",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const menuCategories = [
  {
    title: "SOUPS",
    items: [
      "Cream of Tomato",
      "Cream of Mushroom",
      "Veg Clear Soup",
      "Sweet Corn Veg Soup",
      "Hot 'n' Sour Veg Soup",
      "Baby Corn Garlic Soup",
      "Veg Manchow Soup",
      "Cream of Chicken",
      "Kozhi Rasam / Chicken Rasam",
      "Sweet Corn Chicken Soup",
      "Hot 'n' Sour Chicken Soup",
      "Chicken Manchow Soup",
      "Mutton Rasam Soup",
      "Hot 'n' Sour Mutton Soup",
      "Lung Fung Mutton Soup"
    ]
  },
  {
    title: "SALADS",
    items: [
      "Green Salad",
      "Onion Salad",
      "Cucumber Salad",
      "Tomato Salad"
    ]
  },
  {
    title: "STARTERS",
    items: [
      "Crispy Potato",
      "Gobi 65",
      "Paneer 65 / Mushroom 65",
      "Gobi Manchurian",
      "Paneer Manchurian",
      "Mushroom Manchurian",
      "Chilli Gobi",
      "Chilli Paneer",
      "Chilli Mushroom",
      "Veg Spring Roll",
      "Baby Corn Chilli",
      "Baby Corn Pepper Fry",
      "Finger Chips",
      "Mushroom Pepper Fry",
      "Paneer Pepper Fry",
      "Chicken Lollipop with Mayonnaise",
      "Chicken Karuveppilai Fry (Boneless)",
      "Chicken 65 (Boneless)",
      "Fried Chicken Leg",
      "Pepper Chicken Dry (Boneless)",
      "Chicken Sukka",
      "Coriander Chicken Dry (Boneless)",
      "Chilli Chicken Dry",
      "Dragon Chicken Dry (Boneless)",
      "Chinese Chicken Special",
      "Chicken Manchurian",
      "Chicken (Chilly / Garlic / Ginger)",
      "Schezwan Chicken"
    ]
  },
  {
    title: "SHAWARMA",
    items: [
      "Roll Shawarma",
      "Pepper Shawarma",
      "Masala Shawarma",
      "Plate Shawarma",
      "Taj Special Roll Shawarma",
      "Bowl Shawarma",
      "Cheese Shawarma",
      "Spicy Mexican Roll",
      "Double Cheese & Pepper Plate",
      "Loaded Shawarma Fries"
    ]
  },
  {
    title: "TANDOORI",
    items: [
      "Tandoori Chicken (Full)",
      "Tandoori Chicken (Half)",
      "Grilled Chicken (Full)",
      "Grilled Chicken (Half)",
      "Malai Chicken Tikka",
      "Chicken Kabab",
      "Mutton Sheek Kabab",
      "Chicken Sheek Kabab",
      "Tangri Kabab",
      "Chicken Tikka",
      "Fish Tikka",
      "Paneer Tikka",
      "Afghani Paneer Tikka",
      "Non-Veg Mix Platter"
    ]
  },
  {
    title: "BARBEQUE",
    items: [
      "BBQ Chicken (Full)",
      "BBQ Chicken (Half)",
      "Alfam (Full)",
      "Alfam (Half)",
      "Barbeque Pepper Fish",
      "Barbeque Spicy Prawns",
      "Red Spicy Baby Corn",
      "Afghani Paneer Tikka"
    ]
  },
  {
    title: "BIRIYANI",
    items: [
      "Chicken Biriyani",
      "Fish Biriyani",
      "Prawn Biriyani",
      "Egg Biriyani",
      "Plain Biriyani",
      "Vegetable Biriyani",
      "Beef Biriyani"
    ]
  },
  {
    title: "KUZHIMANDI",
    items: [
      "Small",
      "Regular",
      "Large"
    ]
  },
  {
    title: "EGG DISHES",
    items: [
      "Boiled Egg",
      "Bulls Eye",
      "Egg Manchurian",
      "Roasted Egg",
      "Masala Omelet",
      "Egg Podimas (2 Eggs)",
      "Egg Kalakki"
    ]
  },
  {
    title: "CHICKEN GRAVY",
    items: [
      "Taj Spl Chicken Masala",
      "Butter Chicken Masala",
      "Kadai Chicken",
      "Chicken Masala",
      "Chicken Kurma",
      "Chicken Tikka Masala",
      "Pepper Chicken Masala",
      "Chicken Kolapuri",
      "Chicken Chettinad",
      "Chicken Rara Masala",
      "Chicken Mughal"
    ]
  },
  {
    title: "MUTTON GRAVY",
    items: [
      "Mutton Chukka",
      "Mutton Rogan Josh",
      "Mutton Fry",
      "Mutton Curry",
      "Mutton Rara Masala",
      "Mutton Gose",
      "Mutton Kadai",
      "Mutton Pepper Masala",
      "Mutton Do Piyza",
      "Schezwan Mutton"
    ]
  },
  {
    title: "VEG GRAVY",
    items: [
      "Paneer Butter Masala",
      "Kadai Paneer",
      "Aloo Gobi Masala",
      "Veg Jal Fraize",
      "Kadai Veg",
      "Green Pea Masala",
      "Gobi Masala",
      "Mushroom Masala",
      "Daal Fry",
      "Mix Veg Gravy",
      "Kadai Mushroom",
      "Navarathana Kuruma"
    ]
  },
  {
    title: "CHINESE",
    items: [
      "Chilly/Ginger/Garlic Paneer (Dry/Gravy)",
      "Gobi Manchurian (Gravy/Dry)",
      "Chilly/Ginger/Garlic Mushroom",
      "Chilly/Ginger/Garlic Mushroom/Baby Corn",
      "Hot Pepper",
      "Lemon Chicken",
      "Sesame Chicken",
      "Honey Chicken"
    ]
  },
  {
    title: "RICE & NOODLES",
    items: [
      "Ghee Rice",
      "Jeera Rice",
      "Gobi Rice",
      "Vegetable Fried Rice / Noodles",
      "Paneer Fried Rice / Noodles",
      "Schezwan Veg Fried Rice / Noodles",
      "Mushroom Fried Rice / Noodles",
      "Singapore Veg Fried Rice / Noodles",
      "Taj Mixed Fried Rice / Noodles",
      "American Chop Suey Chicken",
      "Mixed American Chop Suey Non-Veg",
      "Mutton Fried Rice",
      "Mutton Noodles",
      "Mutton Schezwan Fried Rice",
      "Mutton Schezwan Noodles",
      "Beef Fried Rice / Noodles"
    ]
  },
  {
    title: "SEAFOOD",
    items: [
      "Fish 65",
      "Fish Finger with Mayonnaise Sauce",
      "Masala Fried Fish",
      "Chilli Fish",
      "Garlic Fish",
      "Ginger Fish",
      "Pepper Fish",
      "Andhra Fish Curry",
      "Madras Fish Curry",
      "Puli Melagu Fish Curry",
      "Malabar Fish Curry",
      "Prawn Pepper Fry",
      "Prawn Masala",
      "Chilli Prawn",
      "Ginger Prawn",
      "Prawn 65"
    ]
  },
  {
    title: "BEEF",
    items: [
      "Taj Special Beef Curry",
      "Kadai Beef",
      "Beef Kuruma",
      "Madras Beef Curry",
      "Beef Pepper Masala",
      "Beef Sukka Fry",
      "Beef Masala",
      "Beef Pepper Fry",
      "Beef Chettinad",
      "Beef 65",
      "Garlic Beef",
      "Beef Schezwan",
      "Chilli Beef"
    ]
  },
  {
    title: "PARATHA & BREADS",
    items: [
      "Chapatti",
      "Paratha",
      "Chicken Kothu Paratha",
      "Beef Kothu Paratha",
      "Egg Kothu Paratha",
      "Chilli Paratha",
      "Chicken Stuffed Paratha",
      "Chicken Stuffed Kulcha",
      "Mutton Stuffed Paratha",
      "Mutton Stuffed Kulcha",
      "Roti",
      "Naan",
      "Butter Roti",
      "Butter Naan",
      "Stuffed Kulcha (Onion / Mixed Vegetables)",
      "Stuffed Paratha (Potato / Paneer / Mooli)",
      "Lacha Paratha",
      "Kulcha",
      "Butter Kulcha",
      "Garlic Naan",
      "Paneer Paratha"
    ]
  },
  {
    title: "CURD & RAITHA",
    items: [
      "Plain Curd",
      "Cup Curd",
      "Onion Raitha",
      "Mix Veg Raitha"
    ]
  },
  {
    title: "DRINKS",
    items: [
      "Fresh Lime Soda",
      "Fresh Lime Water",
      "Jal Jeera Soda",
      "Mint Lime Water",
      "Cold Coffee",
      "Cold Coffee with Ice",
      "Mint Lime Soda",
      "Blue Curacao",
      "Virgin Mojito",
      "Black Currant",
      "Rose Milk",
      "Falooda"
    ]
  },
  {
    title: "ICE CREAMS",
    items: [
      "Vanilla Ice Cream",
      "Strawberry Ice Cream",
      "Special Ice Cream",
      "Butter Scotch Ice Cream",
      "Pista Ice Cream",
      "Chocolate Ice Cream"
    ]
  },
  {
    title: "MILKSHAKES",
    items: [
      "Apple Milkshake",
      "Vanilla Milkshake",
      "Strawberry Milkshake",
      "Butter Scotch Milkshake",
      "Pista Milkshake",
      "Chocolate Milkshake",
      "Masala Buttermilk"
    ]
  }
];