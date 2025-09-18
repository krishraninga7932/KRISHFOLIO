import React, { useState, useEffect } from "react";
import { Hand, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import profile2 from "../assets/images/profile2.png";
import fire from "../assets/images/fire.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative bg-[#07030E] w-full h-[100vh]">
      <div className="absolute top-[100px] left-[100px] w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-[#ABFF0250] blur-[120px] opacity-70"></div>

      <div className="absolute top-[100px] right-[100px] w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-[#ABFF0250] blur-[120px] opacity-70"></div>

      {/* banner items */}
      <div className="max-w-[1320px] mx-auto p-[10px]">
        <div className="pt-[111px] relative">
          {/* content */}
          <div>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[24px] md:text-[45px] xl:text-[72px] font-inter uppercase tracking-wider font-bold text-gray-200 mt-[40px]"
            >
              Coding with <br />{" "}
              <div className="flex items-center">
                <motion.img
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  src={fire}
                  className="w-[55px] md:w-[90px] xl:w-[130px] ml-10"
                  alt="fire"
                />
                Passion, Creating
              </div>{" "}
              with Purpose
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-gray-300 font-poppins w-[90%] xl:w-[55%] text-[12px] sm:text-[17px] xl:text-[20px] mt-[20px]"
            >
              Welcome to my digital playground! I'm a web developer who
              transforms ideas into stunning, user-friendly websites. Explore my
              passion for creating seamless online experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-[45px] flex items-center gap-5"
            >
              {/* Lets Talk Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  window.open(
                    "https://wa.me/919773025969?text=Hi%20I%20am%20interested%20in%20your%20services!",
                    "_blank"
                  )
                }
                className="relative overflow-hidden text-[#07030E] border text-[15px] cursor-pointer bg-[#ABFF02] rounded-full p-[7px_14px] md:p-[10px_20px] flex items-center gap-2 group"
              >
                <Hand size={18} />
                <span className="relative font-medium z-10 font-poppins">
                  Lets Talk
                </span>
                <span
                  className="absolute top-0 left-[-100%] w-[30px] h-full bg-white/90 skew-x-[-20deg] 
          group-hover:left-[120%] transition-all duration-700 ease-in-out"
                ></span>
              </motion.button>

              {/* Share CV Button */}
              <motion.a
                href="/resume"
                target="_blank"
                whileTap={{ scale: 0.9 }}
                className="relative overflow-hidden text-[#07030E] border text-[15px] cursor-pointer bg-[#ABFF02] rounded-full p-[7px_14px] md:p-[10px_20px] flex items-center gap-2 group"
              >
                <Share2 size={18} className="" />
                <span className="relative font-medium font-poppins z-10">
                  Share CV
                </span>
                <span
                  className="absolute top-0 left-[-100%] w-[30px] h-full bg-white/90 skew-x-[-20deg] 
          group-hover:left-[120%] transition-all duration-700 ease-in-out"
                ></span>
              </motion.a>
            </motion.div>
          </div>

          {/* profile image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 4 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="bg-gradient-to-bl from-black to-[#222D0C] z-10 shadow-[0_8px_35px_-3px_#ABFF02] top-[120%] xl:top-[70%] right-[15%] md:right-[25%] xl:right-[5%] w-[270px] h-[270px] lg:w-[400px] lg:h-[500px] md:w-[350px] md:h-[370px] xl:w-[500px] absolute xl:h-[560px] rotate-[4deg] rounded-2xl"
          ></motion.div>
          {/* profile image */}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2 }}
            src={profile2}
            loading="lazy"
            alt="profile"
            className=" w-[54%] md:w-[38%] lg:w-[36%] xl:w-[31.5%] z-10 mx-auto absolute top-[115%] xl:top-[61%] right-[27%] md:right-[30%] lg:right-[28%] xl:right-[10%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
