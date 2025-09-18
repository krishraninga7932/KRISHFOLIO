import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const up = useRef(null);
  const down = useRef(null);
  const swiperRef = useRef(null);

  const test = [
    {
      text: "“ Working with Krish was an absolute pleasure. His professionalism and expertise made the entire process seamless and successful. ”",
      intro: (
        <>
          <span className="text-[#ABFF02]">Ramesh Patel</span>, CEO of NovaSoft
          Solutions Pvt. Ltd.
        </>
      ),
      avatar1: avatar1,
      avatar2: avatar2,
      avatar3: avatar3,
    },
    {
      text: "“ Krish brought creativity and dedication to our project. The final result exceeded expectations and was delivered on time. ”",
      intro: (
        <>
          <span className="text-[#ABFF02]">Anita Sharma</span>, Product Manager
          at TechSphere
        </>
      ),
      avatar1: avatar1,
      avatar2: avatar2,
      avatar3: avatar3,
    },
    {
      text: "“ Collaborating with Krish was smooth and professional. His problem-solving skills and attention to detail really stood out. ”",
      intro: (
        <>
          <span className="text-[#ABFF02]">Vikram Desai</span>, Founder of
          BrightPath Solutions
        </>
      ),
      avatar1: avatar1,
      avatar2: avatar2,
      avatar3: avatar3,
    },
  ];

  return (
    <div id="testimonials" className="w-full py-20 relative bg-[#07030E] overflow-hidden">
      <div className="absolute top-[15%] left-[5%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-[#ABFF0250] blur-[100px] opacity-60"></div>
      <div className="absolute bottom-[15%] right-[5%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-[#ABFF0250] blur-[100px] opacity-60"></div>

      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-5xl text-center mx-auto font-inter uppercase tracking-wider font-bold text-gray-200 mb-12 sm:mb-20 leading-snug xl:max-w-[45%]"
        >
          DON'T JUST TAKE MY 😊
          <span className="text-[#ABFF02]"> WORD </span> FOR IT...
        </motion.h2>

        {/* Arrows */}
        <motion.div
          ref={up}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.1 }}
          className="hidden md:flex absolute left-5 md:left-[10%] top-1/2 -translate-y-1/2 z-10 cursor-pointer border border-[#ABFF02] text-[#ABFF02] p-2 rounded-full duration-300 hover:bg-[#ABFF02] hover:text-[#000]"
        >
          <ChevronUp size={24} />
        </motion.div>
        <motion.div
          ref={down}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.1 }}
          className="hidden md:flex absolute left-5 md:left-[10%] top-[65%] -translate-y-1/2 z-10 cursor-pointer border border-[#ABFF02] bg-[#ABFF02] text-[#000] p-2 rounded-full duration-300 hover:bg-transparent hover:text-[#ABFF02]"
        >
          <ChevronDown size={24} />
        </motion.div>

        {/* Swiper */}
        <Swiper
          direction="vertical"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.params.navigation.prevEl = up.current;
            swiper.params.navigation.nextEl = down.current;
            swiper.navigation.init();
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper h-[400px] sm:h-[500px] w-full"
        >
          {test.map((t, index) => (
            <SwiperSlide
              key={index}
              className="!flex flex-col items-center gap-8 sm:gap-12 justify-center h-full px-4"
            >
              <p className="text-base sm:text-lg lg:text-2xl text-center max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] font-poppins text-white">
                {t.text}
              </p>
              <p className="text-gray-300 font-poppins text-sm sm:text-base text-center">
                {t.intro}
              </p>
              <div className="flex items-center justify-center gap-4 sm:gap-8">
                <div className="bg-[#ABFF02] w-12 sm:w-16 h-12 sm:h-16 overflow-hidden rounded-full">
                  <img
                    src={t.avatar2}
                    alt="avatar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="bg-violet-400 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden rounded-full">
                  <img
                    src={t.avatar3}
                    alt="avatar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="bg-amber-300 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden rounded-full">
                  <img
                    src={t.avatar1}
                    alt="avatar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
