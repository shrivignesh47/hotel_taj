'use client';
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { MapPin } from "lucide-react";
import BlurText from "../Components/BlurText/BlurText"; // Import BlurText component

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending the data to an API or email.
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121415] px-4 py-10">
      <Card className="w-full max-w-5xl rounded-2xl bg-[#1A1D1F] shadow-xl border border-[#2A2E30]">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Left Side: Map */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 fabril-fatface">
                <MapPin className="w-6 h-6 text-[#d2a260]" />
                <BlurText text="Our Location" delay={150} animateBy="words" direction="top" className="custom-class fabril-fatface text-3xl text-[#d2a260]" />
              </div>
              <h1 className="text-[#BFBAB4] mt-2">
                <BlurText text="Visit us at our premium restaurant in Ooty." delay={150} animateBy="words" direction="top" className="custom-class" />
              </h1>
              <div className="mt-4 rounded-lg overflow-hidden border border-[#2A2E30] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.2474963804098!2d76.70129387452492!3d11.407850947230887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd8eb9a1bc6d%3A0xed530d84dfa4738!2sTaj%20Multicuisine%20Restaurant%20Ooty!5e1!3m2!1sen!2sin!4v1739099214502!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
            
            {/* Right Side: Contact Us Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#d2a260] mb-4">
                <BlurText text="Contact Us" delay={150} animateBy="words" direction="top" className="custom-class" />
              </h3>
              <p className="text-[#BFBAB4] mb-4">
                <BlurText text="We are here to assist you with your dining experience." delay={150} animateBy="words" direction="top" className="custom-class" />
              </p>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-[#BFBAB4]" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-2 bg-[#2A2E30] text-[#BFBAB4] rounded-md border border-[#2A2E30] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#BFBAB4]" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-2 bg-[#2A2E30] text-[#BFBAB4] rounded-md border border-[#2A2E30] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#BFBAB4]" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="px-4 py-2 bg-[#2A2E30] text-[#BFBAB4] rounded-md border border-[#2A2E30] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#D2A260] text-[#1A1D1F] py-2 rounded-md hover:bg-[#FFD700] transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
