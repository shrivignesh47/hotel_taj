import React, { useEffect } from "react";
import { motion } from "framer-motion";
export function InstagramEmbed() {
  useEffect(() => {
    const elfsightScript = document.createElement("script");
    elfsightScript.src = "https://static.elfsight.com/platform/platform.js";
    elfsightScript.async = true;
    document.body.appendChild(elfsightScript);
    return () => {
      document.body.removeChild(elfsightScript);
    };
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b bg-[#121212]  overflow-hidden">
      {/* Background Video */}
      <div className="relative w-full " style={{ aspectRatio: "16 / 9" }}>
        <video
          autoPlay
          loop
          muted
          className="w-full h-[40vh] sm:h-[50vh] lg:h-[90vh] object-cover absolute top-0 left-0 z-0 "
        >
          <source src="/Assets/tajbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full "></div>
      </div>

      {/* Instagram Feed Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[90vh] sm:h-[60vh] md:h-[60vh] lg:h-[30vh] xl:h-[10vh] mx-auto max-w-4xl p-6 z-20 top-[-6vh] sm:top-[-45vh] lg:top-[-65vh] xl:top-[-75vh]" // Adjusted height for responsiveness
      >
        <div className="instagram-embed-container relative rounded-xl shadow-2xl p-6 bg-gradient-to-b from-[#1e1e1e] to-[#2a2a2a]">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl fabril-fatface font-bold text-center mb-8  text-[#d2a260]">
            Follow Us on Instagram
          </h2>

          {/* Instagram Embed */}
          <div className="relative h-[65vh] sm:h-[60vh] md:h-[50vh] lg:h-[55vh] xl:h-[50vh]"> // Adjusted height for large screens
            {/* Dark Overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-black/40 backdrop-blur-md rounded-lg"
              style={{ pointerEvents: "none" }}
            ></div>
            <div
              className="elfsight-app-292ddc9c-a038-4be3-8bc2-f0678f6e8966 border-[4px] border-[#d2a260] relative h-[62vh] lg:h-full rounded-lg overflow-hidden"
              data-elfsight-app-lazy
              style={{
                width: "100%",
                maxHeight: "550px",
              }}
            ></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}