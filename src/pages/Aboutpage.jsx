import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { CardHoverEffect } from "../components/uicomponents/CardHoverEffect";
import Experience from "../components/uicomponents/WorkExperience";
import HireME from "../components/uicomponents/HireMe";

export default function AboutMe() {
  const words = "Know Who I'M";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-100 p-4 sm:p-10 lg:p-20 space-y-10">
      {/* Intro Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
        initial={{ opacity: 0, x: "-100%" }} // Starts from left (offscreen)
        animate={{ opacity: 1, x: 0 }} // Ends at center (visible)
        transition={{ duration: 1 }} // Animation duration
      >
        <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="text-center">
            <TextGenerateEffect
              words={words}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 animate-text-shadow"
            />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xs sm:max-w-md lg:max-w-lg mx-auto leading-relaxed">
            Hi Everyone, I am <span className="text-indigo-400 font-semibold">Prince Saini</span> from Dehradun, India.
            <br />
            I am currently employed as a MERN Stack developer at{" "}
            <span className="text-purple-400 font-semibold">Haxways</span>.
            <br />
            I have completed my graduation with a Bachelor of Computer Applications at{" "}
            <span className="text-pink-400 font-semibold">Quantum University</span>.
            <br />
            <br />
            Apart from coding, I love to:
            <ul className="list-disc list-inside text-indigo-300">
              <li>Play games</li>
              <li>Travel</li>
            </ul>
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <motion.img
            src="/images/about.png"
            alt="About Me"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg border-2 border-purple-500 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-[0px_10px_15px_rgba(128,0,128,0.7)] hover:-translate-y-4"
            initial={{ opacity: 0, x: "100%" }} // Starts from right (offscreen)
            animate={{ opacity: 1, x: 0 }} // Ends at center (visible)
            transition={{ duration: 1 }} // Animation duration
          />
          <div className="absolute h-32 w-32 bg-indigo-500 animate-spin rounded-full blur-xl opacity-60"></div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CardHoverEffect />
        <Experience />
      </div>

      {/* Hire Me Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HireME />
      </div>
    </div>
  );
}
