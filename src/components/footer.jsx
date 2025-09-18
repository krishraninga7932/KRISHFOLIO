import React from "react";
import profile2 from "../assets/images/profile2.png";
import { ArrowUpRight, PhoneCall, Mail } from "lucide-react";
import { FiAperture } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="h-full bg-[#07030E] w-full p-6 pb-0 xl:p-[100px] pt-[100px] xl:pb-0 relative">
      <div className="absolute top-[100px] left-[150px] w-[300px] h-[300px] rounded-full bg-[#ABFF0250] blur-[100px] opacity-60"></div>
      <div className="absolute bottom-[100px] right-[150px] w-[300px] h-[300px] rounded-full bg-[#ABFF0250] blur-[100px] opacity-60"></div>

      {/* footer content */}
      <div className="max-w-[1320px] mx-auto">
        <div>
          {/* text */}
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] text-center xl:max-w-[45%] mx-auto font-inter uppercase tracking-wider font-bold text-gray-200 mb-4 sm:mb-12"
          >
            LET’S WORK{" "}
            <span className="flex items-center justify-center">
              <span className="mr-1">T</span>
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="xl:w-[10%] w-[11%] md:w-[5%] lg:w-[7%] xl:h-[60px] lg:h-[60px] h-[40px] bg-[#9eeb04] p-[5px] pb-0 overflow-hidden rounded-full "
              >
                <img
                  src={profile2}
                  loading="lazy"
                  alt="profile"
                  className="w-[100%] object-cover"
                />
              </motion.span>
              <span className="ml-1">GETHER</span>
            </span>
          </motion.h2>
          {/* arrow btn */}
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center  my-[50px]"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9, rotate: 10 }}
              className="bg-[#ABFF02] xl:p-[50px] p-[40px] relative overflow-hidden group cursor-pointer rounded-full shadowIncrease"
            >
              <ArrowUpRight className="rounded-full text-[#000] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
              <span
                className="absolute top-0 left-[-100%] w-[25px] h-full bg-white/90 skew-x-[20deg] 
          group-hover:left-[130%] transition-all duration-700 ease-in-out"
              ></span>
            </motion.a>
          </motion.div>
          {/* copyright section */}
          <div className="grid grid-cols-1 gap-3 xl:grid-cols-2 items-center justify-between pt-[50px] pb-[25px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-[14px]"
            >
              <div className="text-xl sm:text-2xl flex items-center gap-2 font-bold">
                <FiAperture className="text-[#ABFF02] text-2xl sm:text-3xl spin" />
                <span className="bg-gradient-to-r from-[#ABFF02] via-[#ebf5d8] to-[#6fa602] bg-clip-text text-transparent gradient-text font-inter">
                  KRISHFOLIO.
                </span>
              </div>
              <div className="flex font-inter items-center gap-3 hover:cursor-pointer duration-200 hover:text-[#def4b6]">
                <PhoneCall className="w-4 text-[#ABFF02]" />
                <a href="tel:9773025969">9773025969</a>
              </div>

              <div className="flex font-inter items-center gap-3 hover:cursor-pointer duration-200 hover:text-[#def4b6]">
                <Mail className="w-4 text-[#ABFF02]" />
                <a
                  href="mailto:7932krishraninga@example.com"
                  className="text-xs sm:text-sm break-words"
                >
                  7932krishraninga@example.com
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap xl:flex-nowrap text-[14px] justify-start xl:justify-end items-center gap-4 sm:gap-6 font-poppins"
            >
              <a
                href="#home"
                className="relative border-b border-transparent transition-all duration-300 ease-out 
                 after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 
                 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out 
                 after:-translate-x-1/2 hover:after:w-full"
              >
                Home
              </a>
              <a
                href="#about"
                className="relative border-b border-transparent transition-all duration-300 ease-out 
                 after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 
                 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out 
                 after:-translate-x-1/2 hover:after:w-full"
              >
                About
              </a>
              <a
                href="#project"
                className="relative border-b border-transparent transition-all duration-300 ease-out 
                 after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 
                 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out 
                 after:-translate-x-1/2 hover:after:w-full"
              >
                Project
              </a>
              <a
                href="#testimonials"
                className="relative border-b border-transparent transition-all duration-300 ease-out 
                 after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 
                 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out 
                 after:-translate-x-1/2 hover:after:w-full"
              >
                Testimonials
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="fixed left-0 right-0 bottom-0 h-[1px] overflow-hidden">
        <div className="w-[100%] h-full bg-[#ABFF02] animate-move"></div>
      </div>
    </section>
  );
};

export default Footer;
