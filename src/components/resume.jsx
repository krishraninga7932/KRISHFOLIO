import React from "react";
import cv from "../assets/docs/Krish Raninga2.pdf";
import { HiArrowLeft, HiDownload } from "react-icons/hi";

const Resume = () => {
  return (
    <div className="w-full h-screen bg-[#07030E] flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-6 font-inter">My Resume</h1>

      {/* Embed PDF Viewer */}
      <iframe
        src={cv}
        title="resume"
        className="md:w-full max-w-4xl h-[50%] xl:h-[80%] border-2 border-[#ABFF02] rounded-xl"
      ></iframe>

      {/* Download btn */}
      <a
        href={cv}
        download={"Krish_Raninga_Resume"}
        className="relative overflow-hidden mt-6 text-[#07030E] border text-[15px] cursor-pointer bg-[#ABFF02] rounded-full p-[7px_14px] md:p-[10px_20px] flex items-center gap-2 group"
      >
        <HiDownload size={18} className="" />
        <span className="relative font-medium font-poppins z-10">Download CV</span>
        <span
          className="absolute top-0 left-[-100%] w-[30px] h-full bg-white/90 skew-x-[-20deg] 
          group-hover:left-[120%] transition-all duration-700 ease-in-out"
        ></span>
      </a>


      {/* back btn */}
      <a
        href="/"
        className="mt-5 px-3 py-3 bg-[#ABFF02] fixed left-[2%] top-0 text-[#07030E] rounded-full font-semibold hover:bg-[#9FE002] transition"
      >
        <HiArrowLeft />
      </a>
    </div>
  );
};

export default Resume;
