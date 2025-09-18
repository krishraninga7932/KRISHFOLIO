import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import hand from "../assets/images/hand.gif";

const About = () => {
  const cards = [
    { number: "50+", text: "Projects Completed" },
    { number: "2+", text: "Years of Experience" },
    { number: "25+", text: "Happy Clients" },
    { number: "100+", text: "Success Rate" },
  ];

  return (
    <section id="about" className="relative bg-[#07030E] z-0 w-full py-12 pt-[120px]">
      <div className="absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-[#ABFF0250] blur-[100px] opacity-70 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-[#ABFF0250] blur-[100px] opacity-70 -z-10"></div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Follow Me */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-poppins pb-4 text-gray-200">
            Follow Me :
          </p>
          <div className="flex flex-wrap gap-6 sm:gap-18 items-center text-[#fff] text-lg sm:text-xl">
            <motion.a
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/"
              className="border border-[#ABFF02] p-2 rounded-full hover:text-black duration-[0.3s] hover:bg-[#ABFF02] text-[#ABFF02]"
              target="_blank"
            >
              {" "}
              <FaFacebookF />{" "}
            </motion.a>{" "}
            <motion.a
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/"
              className="border border-[#ABFF02] p-2 rounded-full hover:text-black duration-[0.3s] hover:bg-[#ABFF02] text-[#ABFF02]"
              target="_blank"
            >
              {" "}
              <FaInstagram />{" "}
            </motion.a>{" "}
            <motion.a
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/krish-raninga-2121b8321/"
              className="border border-[#ABFF02] p-2 rounded-full hover:text-black duration-[0.3s] hover:bg-[#ABFF02] text-[#ABFF02]"
              target="_blank"
            >
              {" "}
              <FaLinkedinIn />{" "}
            </motion.a>{" "}
            <motion.a
              whileTap={{ scale: 0.9 }}
              href="https://x.com/KrishRaninga"
              className="border border-[#ABFF02] p-2 rounded-full hover:text-black duration-[0.3s] hover:bg-[#ABFF02] text-[#ABFF02]"
              target="_blank"
            >
              {" "}
              <FaTwitter />{" "}
            </motion.a>
            {/* animated line */}
            <div className="logo text-[22px] flex items-center font-semibold gap-2">
              <div className="relative">
                <div className="xl:w-[200px] h-[30px]"></div>
                <div className="absolute left-0 top-[50%] right-0 h-[1px] overflow-hidden">
                  <div className="w-[100%] h-full bg-[#ABFF02] animate-move"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 mt-16 sm:mt-20 lg:mt-[100px]">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold font-inter flex gap-2 sm:gap-3 items-center mb-3 sm:mb-4 text-[#ABFF02]">
              <img
                src={hand}
                alt="moving hand"
                className="w-6 sm:w-8 md:w-10"
              />
              Hello!, I'm Krish Raninga
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-inter font-semibold mb-4 sm:mb-6 text-gray-300">
              Full Stack Web Developer
            </h4>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6">
              I'm a passionate full-stack web developer with 2+ years of
              experience creating dynamic, user-friendly web applications. I
              specialize in modern JavaScript technologies and love turning
              complex problems into simple, beautiful solutions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              My journey in web development started with a curiosity for how
              websites work, and has evolved into a deep passion for creating
              seamless digital experiences. I enjoy working with both front-end
              and back-end technologies, ensuring every project I work on is
              optimized, scalable, and maintainable.
            </p>
          </motion.div>

          {/* About cards */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="p-6 sm:p-8 md:p-10 border border-[#ABFF0240] rounded-lg hover:border-[#ABFF02] transition duration-300 hover:shadow-lg hover:shadow-[#ABFF0220]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl sm:text-2xl md:text-[32px] font-bold font-inter text-[#ABFF02] mb-2">
                    {card.number}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-[15px] font-medium font-poppins">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
