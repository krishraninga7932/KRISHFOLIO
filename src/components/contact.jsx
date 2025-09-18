import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  function validateFields() {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!subject) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateFields()) return;

    // process for sending form data to the website owners email account
    emailjs
      .send(
        "service_9lwnna6",
        "template_7zbytw8",
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject: subject,
          message: message,
        },
        "hqXuQrhcoDZh50GBv"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setErrors({});
        },
        () => toast.error("Failed to send message. Try again!")
      );
  }

  return (
    <section id="contact" className="bg-[#07030E] w-full py-16 md:py-24 relative">
      <ToastContainer autoClose={3000} />
      <div className="absolute bottom-10 right-10 md:bottom-[200px] md:right-[250px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-[#ABFF0250] blur-[100px] opacity-60"></div>

      <div className="max-w-[1320px] px-5 sm:px-10 mx-auto">
        {/* heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mx-auto font-inter uppercase tracking-wider font-bold text-gray-200 mb-8 sm:mb-12 max-w-3xl"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          LET’S CREATE SOMETHING 🤝
          <span className="text-[#ABFF02]"> AMAZING </span>TOGETHER
        </motion.h2>

        {/* form */}
        <motion.form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg gap-6 sm:gap-8 mx-auto mt-6 sm:mt-10 border-[2px] border-[#ABFF0250] p-6 sm:p-10 md:p-12 rounded-3xl z-10 bg-[#0F0C16]/30 backdrop-blur-md shadow-[0_0_20px_#ABFF02]/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-inter text-gray-200 mb-2">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-poppins">
              Send me a message and I'll get back to you
            </p>
          </div>

          {/* name & email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* name */}
            <div className="flex flex-col relative gap-2">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyUp={(e) => {
                  if (!e.target.value)
                    setErrors((prev) => ({ ...prev, name: "Name is required" }));
                  else setErrors((prev) => ({ ...prev, name: "" }));
                }}
                className={`w-full bg-transparent font-poppins text-gray-200 placeholder-gray-500 border p-3 rounded-full outline-0 ${
                  errors.name ? "border-red-400" : "border-[#ABFF0250]"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm absolute -bottom-5 left-2">
                  {errors.name}
                </p>
              )}
            </div>

            {/* email */}
            <div className="flex flex-col relative gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={(e) => {
                  if (!e.target.value)
                    setErrors((prev) => ({ ...prev, email: "Email is required" }));
                  else if (!/\S+@\S+\.\S+/.test(e.target.value))
                    setErrors((prev) => ({ ...prev, email: "Invalid email" }));
                  else setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className={`w-full bg-transparent font-poppins text-gray-200 placeholder-gray-500 border p-3 rounded-full outline-0 ${
                  errors.email ? "border-red-400" : "border-[#ABFF0250]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm absolute -bottom-5 left-2">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* subject */}
          <div className="flex flex-col relative gap-2">
            <input
              type="text"
              placeholder="Enter Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              onKeyUp={(e) => {
                if (!e.target.value)
                  setErrors((prev) => ({ ...prev, subject: "Subject is required" }));
                else setErrors((prev) => ({ ...prev, subject: "" }));
              }}
              className={`w-full bg-transparent font-poppins text-gray-200 placeholder-gray-500 border p-3 rounded-full outline-0 ${
                errors.subject ? "border-red-400" : "border-[#ABFF0250]"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm absolute -bottom-5 left-2">
                {errors.subject}
              </p>
            )}
          </div>

          {/* message */}
          <div className="flex flex-col relative gap-2">
            <textarea
              placeholder="Message Me"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyUp={(e) => {
                if (!e.target.value)
                  setErrors((prev) => ({ ...prev, message: "Message is required" }));
                else setErrors((prev) => ({ ...prev, message: "" }));
              }}
              className={`w-full bg-transparent font-poppins text-gray-200 placeholder-gray-500 border resize-none p-4 rounded-2xl outline-0 ${
                errors.message ? "border-red-400" : "border-[#ABFF0250]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm absolute -bottom-5 left-2">
                {errors.message}
              </p>
            )}
          </div>

          {/* button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden text-[#07030E] text-sm sm:text-base cursor-pointer bg-[#ABFF02] rounded-full py-3 sm:py-4 px-6 sm:px-8 gap-2 group hover:shadow-[0_0_25px_#ABFF02]/40"
          >
            <span className="relative font-medium z-10 text-center font-poppins">
              Send Message
            </span>
            <span className="absolute top-0 left-[-100%] w-[30px] h-full bg-white/90 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700 ease-in-out"></span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
