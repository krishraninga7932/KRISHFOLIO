import React, { useState } from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJquery,
  SiMongodb,
  SiExpress,
  SiMui,
} from "react-icons/si";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#F7DF1E",
    },
    {
      name: "jQuery",
      icon: <SiJquery className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#0769AD",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#7952B3",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#06B6D4",
    },
    {
      name: "Material UI",
      icon: <SiMui className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#007FFF",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#47A248",
    },
    {
      name: "Express JS",
      icon: <SiExpress className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#000000",
    },
    {
      name: "React JS",
      icon: <FaReact className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#61DAFB",
    },
    {
      name: "Node JS",
      icon: <FaNodeJs className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "#339933",
    },
  ];

  return (
    <section id="skills" className="relative bg-[#07030E] w-full py-12 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="absolute top-[100px] sm:top-[150px] lg:top-[200px] left-[50px] sm:left-[100px] lg:left-[150px] w-[150px] sm:w-[200px] lg:w-[300px] h-[150px] sm:h-[200px] lg:h-[300px] rounded-full bg-[#ABFF0250] blur-[50px] sm:blur-[75px] lg:blur-[100px] opacity-60"></div>
      <div className="absolute bottom-[100px] sm:bottom-[150px] lg:bottom-[200px] right-[50px] sm:right-[100px] lg:right-[150px] w-[150px] sm:w-[200px] lg:w-[300px] h-[150px] sm:h-[200px] lg:h-[300px] rounded-full bg-[#ABFF0250] blur-[50px] sm:blur-[75px] lg:blur-[100px] opacity-60"></div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:p-[10px]">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-[85px]"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] max-w-full sm:max-w-[80%] lg:max-w-[45%] mx-auto font-inter uppercase tracking-wider font-bold text-gray-200 mb-4">
            I SPECIALIZE IN A RANGE OF 💪
            <span className="text-[#ABFF02]"> SKILLS</span>
          </h2>
          <p className="text-gray-300 font-poppins text-sm sm:text-base lg:text-[18px] max-w-full sm:max-w-2xl mx-auto px-4 sm:px-0">
            Crafting intuitive interfaces and scalable systems.
          </p>
        </motion.div>

        {/* Skills Container */}
        <div className="relative flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {/* Central MERN Card */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-[#000] to-[#222D0C] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full flex items-center outline-[#ABFF02]/30 outline-[1px] justify-center cursor-pointer shadowIncrease">
                <div className="text-center">
                  <h3 className="text-[#ABFF02] font-inter font-bold text-lg sm:text-2xl lg:text-[32px] tracking-wider">
                    MERN
                  </h3>
                  <p className="text-[#fff] font-poppins text-[10px] sm:text-[11px] lg:text-[12px] font-medium">
                    Full Stack
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Circular Layout */}
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length;
            const radius =
              window.innerWidth < 640
                ? 140
                : window.innerWidth < 1024
                ? 220
                : 290;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={skill.name}
                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                <div className="relative group cursor-pointer">
                  {/* Skill Card */}
                  <div className="bg-gradient-to-br from-[#222D0C] to-black w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex flex-col items-center justify-center outline outline-[#ABFF02]/30 hover:outline-[#ABFF02]/60 transition-all duration-300 hover:scale-110">
                    <div className="mb-1 sm:mb-2 transition-colors duration-300 text-[#ABFF02]">
                      {skill.icon}
                    </div>
                    <h4 className="text-gray-200 font-poppins text-[9px] sm:text-[10px] lg:text-[11px] font-semibold text-center px-1">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <p className="text-gray-300 w-full sm:w-[80%] lg:w-[40%] mx-auto font-poppins text-sm sm:text-base lg:text-[16px] mb-6 mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-0">
            Ready to turn your vision into reality with the right blend of
            creativity and technology?
          </p>
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="tel:9773025969"
            className="relative inline-flex overflow-hidden text-[#07030E] text-sm sm:text-[15px] cursor-pointer bg-[#ABFF02] rounded-full p-[10px_24px] sm:p-[12px_30px] items-center gap-2 group mx-auto"
          >
            <Briefcase size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="relative font-medium z-10 font-poppins">
              Hire Me
            </span>
            <span className="absolute top-0 left-[-100%] w-[30px] h-full bg-white/90 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700 ease-in-out"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
