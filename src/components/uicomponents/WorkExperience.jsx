import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    duration: "April 2024 - Present",
    title: "Full Stack Developer",
    company: "Haxways",
    work: "Developed and enhanced frontend and backend using React and the MERN stack, ensuring responsiveness and cross-browser compatibility. Collaborated with designers to create user-friendly interfaces and optimized performance.",
    tools: "Next.js, React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Git, GitHub",
  },
  {
    "duration": "April 2023 - Oct 2023",
    "title": "Web Development Intern",
    "company": "Techonical Infotech",
    "work": "Developed responsive and optimized web pages, improving performance and reducing load times by 20%. Delivered a dynamic landing page for Dr. Tanveer Fatima's website, enhancing user engagement and search engine visibility with effective SEO strategies. Built reusable components with React.js, styled layouts using Bootstrap, and JavaScript.",
    "tools": "Bootstrap,JavaScript, Git"
  }
  
  
];

const Experience = () => {
  return (
    <section id="experience" className=" px-6 ">
      <h3 className="text-6xl font-bold text-center mb-10 text-purple-500">
        Work Experience
      </h3>
      <div className="grid grid-cols-1 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <h4 className="text-xl font-bold text-white">
              {exp.title}{" "}
              <span className="text-purple-400">- {exp.company}</span>
            </h4>
            <p className="mt-4 text-gray-300 leading-relaxed">
              <span className="font-semibold text-purple-400">Work:</span>{" "}
              {exp.work}
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              <span className="font-semibold text-purple-400">Tools Used:</span>{" "}
              {exp.tools}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
