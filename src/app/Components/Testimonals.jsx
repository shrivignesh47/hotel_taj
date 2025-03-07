import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { UserCircleIcon } from 'lucide-react'; // Import the profile icon
import BlurText from "./BlurText/BlurText";
import './Styles/test.css'; // Import the CSS file for animations

export function InfiniteMovingCardsDemo() {
  return (
    <div className="relative">
      <div className="h-[40rem] mt-[-12vh] flex flex-col antialiased bg-[#121414] dark:bg-[#121415] dark:bg-grid-[#121415]/[0.05] items-center justify-center relative overflow-hidden fabril-fatface">
        {/* Testimonials Title */}
        <h1 className="text-white">
          <BlurText
            text="TESTIMONIALS"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl text-center text-[#d2a260] justify-center mb-3"
          />
        </h1>
        {/* Gap between Title and Cards */}
        <div className="h-[5rem] sm:h-[5rem]"></div> {/* Spacer for gap */}
        {/* Infinite Moving Cards */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="mt-8 moving-cards" // Add class for animation
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Had beef biryani and al faham chicken. The biriyani was in seeraga samba and it was pretty good. The beef pieces were big and sufficient. The alfam chicken also tasted really good with the mayonnaise.",
    name: "Akash P",
    title: "a month ago",
    icon: <UserCircleIcon className="w-10 h-10 text-gray-500" /> // Profile icon for Akash P
  },
  {
    quote: "One of the best hotel in Ooty. First of all very very clean in all places especially dinning tables. Service was too good. Hot drinking water provided all. Naan and chicken gravy was superb. But chicken biriyani hadn't good. You can come with your family. And rest room available here. It has clean.",
    name: "Mathavan Chandrasekaran",
    title: "3 years ago",
    icon: <UserCircleIcon className="w-10 h-10 text-gray-500" /> // Profile icon for Mathavan
  },
  {
    quote: "Never had this type of beef biryani, so delicious. Beef 65 was too great, beef meat was so soft and melted, it seemed like goat's meat.",
    name: "Asad Ullah Khan",
    title: "5 months ago",
    icon: <UserCircleIcon className="w-10 h-10 text-gray-500" /> // Profile icon for Asad
  },
  {
    quote: "The food was incredibly delicious, especially for beef lovers visiting Ooty. Don't miss out on their Beef Shuka, Beef 65, and Beef Biryani – the flavors are truly outstanding. This hotel is an ideal choice for both friends and families, conveniently located near the main market in Ooty.",
    name: "The Veti Rider",
    title: "a year ago",
    icon: <UserCircleIcon className="w-10 h-10 text-gray-500" /> // Profile icon for The Veti Rider
  },
  {
    quote: "Food is good 😊 and service also good and atmosphere very good nice 👍 nice experience with capital parbir thanks 👍 👍 👍 👍",
    name: "Shilpa Rosline",
    title: "3 months ago",
    icon: <UserCircleIcon className="w-10 h-10 text-gray-500" /> // Profile icon for Shilpa
  },
  {
    quote: "Food was great. Especially biriyani and the beef sukka fry. The chicken loaded shawarma fries was also excellent.",
    name: "Albert R. J.",
    title: "4 months ago",
    icon: <UserCircleIcon className="w-10 h-10 text-gray-500" /> // Profile icon for Albert
  },
  {
    quote: "We had Alfam chicken and Mutton Rogan josh... Food is brilliant. Need to discount on ambience. Service is fast. Place to visit for sure.",
    name: "Brijesh Chaturvedi",
    title: "a year ago",
    icon: <UserCircleIcon className="w-10 h-10 text-gray-500" /> // Profile icon for Brijesh
  },
];