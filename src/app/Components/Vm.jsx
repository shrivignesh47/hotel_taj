import React from 'react'
import { Spotlight } from '../../components/ui/spotlight-new';
import { Eye, Target } from 'lucide-react'; // Importing Lucide icons
import { motion } from "framer-motion"; // Importing Framer Motion

export default function Vm() {
  return (
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-[#121414] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center mb-6"
        >
          <Eye className="text-3xl text-[#d2a260] mr-3" />
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Vision
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
        >
          To become a cherished dining destination known for delivering unforgettable culinary experiences, where every meal brings joy, comfort, and a sense of togetherness, inspiring a love for great food and exceptional service.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center mb-6 mt-8"
        >
          <Target className="text-3xl text-[#d2a260] mr-3" />
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Mission
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
        >
          To delight our guests with a wide range of freshly prepared, high-quality dishes that celebrate flavor and tradition. We are committed to providing warm, attentive service, maintaining the highest standards of cleanliness, and creating a welcoming atmosphere where every visit feels like a celebration of great food.
        </motion.p>
      </div>
    </div>
  );
}
