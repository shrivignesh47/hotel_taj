"use client";
import Slider from './Components/Slider'; // Corrected the path
import MCarousel from './Components/MCarousel';
import Vm from './Components/Vm'; // Ensure the component is imported with a capital letter if it's a React component
import { InstagramEmbed } from './Components/Instagram';
import Menu from './Components/Menu';
import {InfiniteMovingCardsDemo }from './Components/Testimonals';
import Contact from './Contact/page';
const carouselItems = [
    {
      id: 1,
      title: "Fresh Salad",
      description: "Organic greens with feta cheese and walnuts",
      image: "/Assests/posters/pt1.jpg"
    },
    {
      id: 2,
      title: "Pasta Dish",
      description: "Homemade pasta with seasonal vegetables",
      image: "/Assests/posters/pt5.jpg" // Ensure this path is correct
    },
    {
      id: 3,
      title: "Fruit Bowl",
      description: "Fresh seasonal fruits for a healthy dessert",
      image: "/Assests/posters/pt2.jpg"
    },
    {
      id: 4,
      title: "Smoothie Bowl",
      description: "Nutrient-packed smoothie with toppings",
      image: "/Assests/posters/pt4.jpg"
    },
    {
      id: 5,
      title: "Smoothie Bowl",
      description: "Nutrient-packed smoothie with toppings",
      image: "/Assests/posters/pt8.png"
    },
  ];

const Home = () => {
    return (
        <div className="container w-full">
            <MCarousel items={carouselItems} />

            <Vm />
            <InstagramEmbed/>
            <Slider />
            <p className="mt-4 text-center text-white">
            Experience luxury and comfort at its finest.
            </p>
            <Menu/>
            <InfiniteMovingCardsDemo/>
            <Contact/>
        </div>
    );
};

export default Home;