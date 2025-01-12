import React from "react";
import ProjectCard from "../components/uicomponents/ProjectCard";
import HireME from "../components/uicomponents/HireMe";

export default function ProjectPage() {
  const projects = [
    {
      images: [
        "incentum/signup.jpg",
        "incentum/home.jpg",
        "incentum/loan.jpg",
        "incentum/form.jpg",
      ],
      title: "Incentum.loans",
      description:
        "Incentum is a live, responsive loan application platform built with the MERN stack. The website allows users to easily apply for loans, upload required documents, and receive quick loan approvals through an intuitive and smooth interface. Whether you're applying for a personal or business loan, Incentum provides a seamless and efficient experience, ensuring users can access financial services anytime, anywhere. this platform is both secure and scalable, offering a reliable solution for modern loan application needs.",
      githubLink: "https://github.com/codewithprince01/mainIncentumm",
      demoLink: "https://incentum.loans",
    },
    {
      images: ["AiTrip/home.jpg", "AiTrip/createTrip.jpg", "AiTrip/signUP.jpg","AiTrip/Trip.jpg","AiTrip/myTrip.jpg"],
      title: "AI Trip Planner",
      description:
        "AI Trip Planner is an advanced travel planning platform built using React, Firebase, Google Gemini and Google Authentication. The website allows users to easily plan their trips, discover destinations, and get personalized recommendations powered by artificial intelligence. With secure Google OAuth login, The platform also incorporates Shadcn to enhance the UI with beautiful, responsive design elements, ensuring a smooth and engaging user experience across all devices. AI Trip Planner provides travelers with a seamless journey from planning to execution.",
      githubLink: "https://github.com/codewithprince01/ai-trip-planner",
      demoLink: "https://ai-traveler-planner.vercel.app/",
    },
    {
      images: ["MysteryMessage/home.jpg", "MysteryMessage/signIn.jpg","MysteryMessage/verification.jpg","MysteryMessage/dashboard.jpg", "MysteryMessage/sendMEssage.jpg"],
      title: "Mystery Messages",
      description:
        "Mystery Message is an immersive platform built with Next.js and the MERN stack, designed for cryptic communication and hidden secrets. After signing up, users securely verify their identity via OTP, unlocking the ability to send and receive mysterious, encrypted messages in real time. The platform creates an interactive and thrilling digital experience, where every message feels like a hidden clue. Mystery Message guarantees a seamless, high-performance experience with smooth navigation, robust security, and real-time interactions.",
      githubLink: "https://github.com/codewithprince01/mysterymessage",
      demoLink: "https://editor-io.vercel.app",
    },
    {
      images: ["DrTanveer/home.jpg", "/DrTanveer/testimonial.jpg","DrTanveer/footer.jpg"],
      title: "Health-Care Landing Page",
      description:
        "Dr. Tanveer Fatima’s Dermatology Clinic provides expert care in skin, hair, and cosmetic treatments. The website offers a seamless, user-friendly experience, allowing patients to easily explore a range of services, schedule consultations, and access valuable information about skin health. Designed to be fully responsive, the landing page features a sleek, modern aesthetic, providing an intuitive layout for users to quickly find what they need, whether it's treatment details, doctor credentials, or appointment booking.",
      githubLink: "https://github.com/codewithprince01/HealthCare-LandingPage",
      demoLink: "https://dermatologistinroorkee.in/",
    },
  ];

  return (
    <div>
      {/* Projects Section */}
      <div className="min-h-screen text-gray-100 py-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-purple-500">
            Welcome to <span className="text-purple-400">My Projects</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              images={project.images}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>

      {/* Hire Me Section */}
      <div className="mx-6 sm:mx-16 lg:mx-[150px] my-10">
        <HireME />
      </div>
    </div>
  );
}
