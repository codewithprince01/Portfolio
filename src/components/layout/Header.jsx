import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white relative">
      <Link
          to="/">
      <div className="text-2xl font-bold text-purple-500 pl-10 hover:scale-110 transition-transform duration-300">
        PORTFOLIO
      </div>
      </Link>
      <div className="hidden md:flex space-x-10 text-white items-center ml-6">
        <Link
          to="/"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">home</span>
            <span>Home</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/about"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">person</span>
            <span>About</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/project"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">collections</span>
            <span>Projects</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/resume"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">description</span>
            <span>Resume</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/contact-me"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">edit</span>
            <span>Contact me</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-4">
      <a
        href="https://github.com/codewithprince01"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/prince-saini-95b35a236/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
      >
        <FaLinkedin size={30} />
      </a>
      </div>

      {/* Hamburger Menu */}
      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white shadow-lg flex flex-col items-center py-4 space-y-4 z-20">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-purple-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-purple-500"
          >
            About
          </Link>
          <Link
            to="/project"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-purple-500"
          >
            Projects
          </Link>
          <Link
            to="/resume"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-purple-500"
          >
            Resume
          </Link>
          <Link
            to="/contact-me"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-purple-500"
          >
            Contact me
          </Link>
          <a
            href="https://github.com/codewithprince01?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
          >
            GitHub 
          </a>
          <a
            href="https://www.linkedin.com/in/prince-saini-95b35a236/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
          >
            Linkdin 
          </a>
        </div>
      )}
    </nav>
  );
}
