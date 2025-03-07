import React from 'react';
import { History, MapPin, UtensilsCrossed, Star, Clock, Users } from 'lucide-react';
import BlurText from '../Components/BlurText/BlurText'; // Import BlurText component

function About() {
  return (
    <div className="min-h-screen bg-[#121414]">
      <div 
        className="h-[60vh] bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center">
          <h1 className="text-6xl fabril-fatface font-bold text-[#d2a260] text-center mb-4 tracking-tight">Our Story</h1>
          <BlurText text="A journey of flavors since 1992" delay={150} animateBy="words" direction="top" className="custom-class text-white fabril-fatface text-2xl" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121414] rounded-xl shadow-lg p-6 flex items-center space-x-4">
            <div className="bg-amber-50 p-3 rounded-full">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl fabril-fatface font-bold text-[#d2a260]">30+ Years</div>
              <BlurText text="Of Excellence"  delay={150} animateBy="words" direction="top" className="text-white custom-class fabril-fatface text-2xl" />
            </div>
          </div>
          <div className="bg-[#121414] rounded-xl shadow-lg p-6 flex items-center space-x-4">
            <div className="bg-amber-50 p-3 rounded-full">
              <Star className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl fabril-fatface font-bold text-[#d2a260]">Signature</div>
              <BlurText text="Biriyani Specialist" delay={150} animateBy="words" direction="top" className="custom-class text-white fabril-fatface text-2xl" />
            </div>
          </div>
          <div className="bg-[#121414] rounded-xl shadow-lg p-6 flex items-center space-x-4">
            <div className="bg-amber-50 p-3 rounded-full">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl fabril-fatface font-bold text-[#d2a260]">1000+</div>
              <BlurText text="Happy Customers" delay={150} animateBy="words" direction="top" className="custom-class text-white fabril-fatface text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-[#121414] rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-50 p-3 rounded-full">
                <History className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-3xl fabril-fatface font-bold text-[#d2a260]">Our Beginning</h2>
            </div>
            <div className="pl-0 text-white">
              <BlurText text="Established in 1992, Hotel Taj started as a humble restaurant with seating for fewer than 20 guests. From the very beginning, our primary focus has been on delivering exceptional taste and quality in every dish we serve. This dedication to flavor and authenticity quickly earned us a reputation, making our Biriyani varieties a local favorite." delay={150} animateBy="words" direction="top" className="custom-class fabril-fatface text-2xl" />
            </div>
          </div>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-50 p-3 rounded-full">
                <UtensilsCrossed className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-3xl fabril-fatface font-bold text-[#d2a260]">Our Journey</h2>
            </div>
            <div className="pl-0 text-white">
              <BlurText text="Over the years, our commitment to excellence helped us grow, leading to the expansion of our brand. We proudly operated a branch in Pallakada, which was once a renowned dining spot. Although this branch is now closed, our legacy continues to thrive at our new location." delay={150} animateBy="words" direction="top" className="custom-class fabril-fatface text-2xl" />
            </div>
          </div>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-50 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-3xl fabril-fatface font-bold text-[#d2a260]">Where to Find Us</h2>
            </div>
            <div className="pl-0 text-white">
              <BlurText text="To recreate the same warm and inviting atmosphere, we launched Hotel Taj Multicuisine Restaurant in Ooty. Conveniently located at New Main Bazaar Road, Old Amirtha Hotel Building, Ooty, Tamil Nadu - 643001, this branch carries forward our tradition of serving delicious, high-quality meals in a welcoming ambiance." delay={150} animateBy="words" direction="top" className="custom-class fabril-fatface text-2xl" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-100 shadow-inner">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-amber-200 transform -rotate-12">
                <span className="text-6xl">"</span>
              </div>
              <div className="pl-0">
                <BlurText text="At Hotel Taj, we believe in blending rich flavors with a memorable dining experience. Whether it's our signature Biriyani or a variety of other mouthwatering dishes, we continue to bring the best to our customers. Visit us and indulge in a culinary journey like no other!" delay={150} animateBy="words" direction="top" className="custom-class fabril-fatface text-2xl" />
              </div>
              <div className="absolute -bottom-4 -right-4 text-amber-200 transform rotate-12">
                <span className="text-6xl">"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden h-64">
            <img 
              src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=800" 
              alt="Restaurant Ambiance" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden h-64">
            <img 
              src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800" 
              alt="Signature Dish" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden h-64">
            <img 
              src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?auto=format&fit=crop&q=80&w=800" 
              alt="Interior" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;