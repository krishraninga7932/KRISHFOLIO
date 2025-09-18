import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Image, Clapperboard, ListTodo, Grid } from "lucide-react";
import Project1 from "../assets/images/project1.jpg";
import Project2 from "../assets/images/project2.jpg";
import Project3 from "../assets/images/project3.jpg";
import Project4 from "../assets/images/project4.jpg";

const projects = [
  {
    icon: <Image className="w-8 h-8" />,
    title: "Pexels",
    description:
      "Built a responsive image search platform using Pexels API, HTML, CSS, and JavaScript, enabling real-time queries with a smooth browsing experience.",
    color: "from-[#ABFF02] to-[#223102]",
    Image: Project1,
    Link: "https://lustrous-sopapillas-820553.netlify.app/",
  },
  {
    icon: <Clapperboard className="w-8 h-8" />,
    title: "Cinemahub",
    description:
      "CinemaHub – A React & Tailwind CSS movie management app with add, delete, filter, sort, and localStorage persistence features.",
    color: "from-[#ABFF02] to-[#223102]",
    Image: Project2,
    Link: "https://charming-frangollo-57e02e.netlify.app/",
  },
  {
    icon: <Grid className="w-8 h-8" />,
    title: "Florem",
    description:
      "Built “Florem” – a fully responsive website using HTML5, CSS3, Bootstrap, and jQuery, ensuring cross-device compatibility and seamless user experience.",
    color: "from-[#ABFF02] to-[#223102]",
    Image: Project3,
    Link: "https://stunning-twilight-b6de28.netlify.app/",
  },
  {
    icon: <ListTodo className="w-8 h-8" />,
    title: "Academic Task Tracker",
    description:
      "Developed a responsive React-based Academic Task Management System with CRUD operations, status tracking, and localStorage persistence.",
    color: "from-[#ABFF02] to-[#223102]",
    Image: Project4,
    Link: "https://amazing-phoenix-131a7d.netlify.app/",
  },
];

const Project = () => {
  return (
    <div id="project" className="relative bg-[#07030E] w-full min-h-[100vh] py-16 sm:py-20 md:py-[100px] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-[100px] left-[50px] sm:top-[150px] sm:left-[150px] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-[#ABFF0250] blur-[100px] opacity-60"></div>
      <div className="absolute bottom-[100px] right-[50px] sm:bottom-[200px] sm:right-[150px] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-[#ABFF0250] blur-[100px] opacity-60"></div>

      {/* Header Section */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] max-w-[90%] mx-auto font-inter uppercase tracking-wider font-bold text-gray-200 mb-4 leading-snug">
            HERE'S A GLIMPSE OF SOME EXCITING 🧑‍💻{" "}
            <span className="text-[#ABFF02]">PROJECTS</span> I'VE DONE
          </h2>
          <p className="text-gray-300 font-poppins text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Each project is a story of innovation, creativity, and
            problem-solving—crafted to make an impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <WorkflowTimeline />
      </div>
    </div>
  );
};

const WorkflowTimeline = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 });

  return (
    <div ref={timelineRef} className="relative max-w-7xl mx-auto px-4">
      {/* Timeline line for desktop */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#ABFF02] opacity-30 rounded-full" />
      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#ABFF02] rounded-full z-10"
      />

      {/* Projects */}
      <div className="space-y-16 sm:space-y-20 md:space-y-32">
        {projects.map((step, index) => (
          <WorkflowStep key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
};

const WorkflowStep = ({ step, index }) => {
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  const containerVariants = {
    hidden: { opacity: 0, x: isEven ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      ref={stepRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex flex-col lg:flex-row items-center"
    >
      {/* Animated icon */}
      <motion.div
        variants={iconVariants}
        className="relative z-20 mb-8 lg:mb-0 lg:left-1/2 lg:transform lg:-translate-x-1/2"
      >
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${step.color} opacity-30`}
          />
          <div
            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-white"
            >
              {step.icon}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Step content */}
      <motion.div
        className={`relative w-full md:w-5/12 ${
          isEven ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"
        }`}
      >
        <div
          className={`absolute top-6 sm:top-8 w-12 sm:w-16 h-0.5 bg-gradient-to-r ${
            step.color
          } hidden lg:block ${isEven ? "right-0" : "left-0"}`}
        />

        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative bg-transparent backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl border border-[#ABFF0250]"
        >
          <div className="relative z-10">
            <div className="grid grid-cols-1 xl:grid-cols-[30%_auto] items-center gap-6">
              <div className="flex justify-center xl:justify-start">
                <a href={step.Link} target="_blank">
                  <img
                    src={step.Image}
                    alt="project"
                    className="w-20 h-20 xl:w-28 xl:h-28 object-cover rounded-full duration-300 hover:scale-105 border-[#ABFF0290] border-[2px]"
                  />
                </a>
              </div>
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="text-lg sm:text-xl lg:text-2xl font-inter font-bold mb-3 bg-gradient-to-r from-[#ABFF0280] to-[#ABFF02] bg-clip-text text-transparent"
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.7 }}
                  className="text-gray-300 font-poppins text-sm sm:text-[15px] leading-relaxed"
                >
                  {step.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: index * 0.2 + 0.9, duration: 0.8 }}
              className={`mt-5 sm:mt-6 h-1 bg-gradient-to-r ${step.color} rounded-full`}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
