import { HoverEffect } from "../ui/card-hover-effect";
import { ImHtmlFive2 } from "react-icons/im";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";


export function CardHoverEffect() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="px-8 w-full max-w-6xl">
        <h1 className="text-white text-center text-[35px] sm:text-[45px] font-extrabold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Professional <span className="text-purple-500">Skillset</span>
        </h1>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    icon: <ImHtmlFive2 />,
    link: "#html",
  },
  {
    icon: <RiTailwindCssFill />,
    link: "#tailwind",
  },
  {
    icon: <FaBootstrap />,
    link: "#bootstrap",
  },
  {
    icon: <IoLogoJavascript />,
    link: "#javascript",
  },
  {
    icon: <TbBrandTypescript />,
    link: "#typescript",
  },
  {
    icon: <RiNextjsFill />,
    link: "#mnextjs",
  },
  {
    icon: <FaReact />,
    link: "#react",
  },
  {
    icon: <DiNodejs />,
    link: "#node",
  },
  {
    icon: <DiMongodb />,
    link: "#mongo",
  },
  {
    icon: <DiMysql />,
    link: "#mysql",
  },
  {
    icon: <SiFirebase />,
    link: "#firebase",
  },
  {
    icon: <FaGitAlt />,
    link: "#git",
  },
 
];
