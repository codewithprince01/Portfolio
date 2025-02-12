import React, { useEffect, useState } from "react";

const Resume = () => {
  const resumeLink = "/Prince.pdf"; // Path to your resume PDF

  // Generate random dots
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < 20; i++) {
        newDots.push({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        });
      }
      setDots(newDots);
    };
    generateDots();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative">
      {/* Random White Dotts */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              width: `${Math.random() * 6 + 4}px`, 
              height: `${Math.random() * 6 + 4}px`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[111vh] mb-28 flex justify-center">
        <object
          data={resumeLink}
          type="application/pdf"
          className="w-full h-[162vh]"
          aria-label="Resume"
        >
          <p className="text-white text-center">
            Your browser does not support PDF viewing.{" "}
            <a href={resumeLink} download className="text-purple-500 underline">
              Click here to download the resume.
            </a>
          </p>
        </object>
      </div>

      <a
        href={resumeLink}
        download="/Prince.pdf"
        className="absolute bottom-6 bg-purple-700 text-white px-8 py-3 rounded-lg text-lg md:text-xl hover:bg-purple-600 hover:scale-105 transition-transform duration-300 z-10"
      >
        Download CV
      </a>
    </div>
  );
};

export default Resume;
