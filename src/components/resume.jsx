import React, { useState } from "react";
import { HiArrowLeft, HiDownload, HiExternalLink } from "react-icons/hi";

const Resume = () => {
  const [pdfError, setPdfError] = useState(false);
  const pdfPath = "/docs/Krish_Raninga2.pdf";

  return (
    <div className="w-full h-screen bg-[#07030E] flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-6 font-inter">My Resume</h1>

      {/* Embed PDF Viewer with error handling */}
      <div className="md:w-full max-w-4xl h-[50%] xl:h-[80%] border-2 border-[#ABFF02] rounded-xl overflow-hidden">
        {!pdfError ? (
          <iframe
            src={`${pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
            title="resume"
            className="w-full h-full"
            onLoad={() => console.log("PDF loaded successfully")}
            onError={() => {
              console.log("PDF loading failed, showing fallback");
              setPdfError(true);
            }}
          >
            {/* Fallback content for browsers that don't support iframes */}
            <div className="flex items-center justify-center h-full text-center p-8">
              <div>
                <p className="text-white mb-4">PDF preview not available in your browser</p>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ABFF02] underline hover:text-[#9FE002] transition-colors"
                >
                  Open PDF in new tab
                </a>
              </div>
            </div>
          </iframe>
        ) : (
          // Fallback content when iframe fails to load
          <div className="flex items-center justify-center h-full text-center p-8 bg-gray-900/50 rounded-xl backdrop-blur">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ABFF02]">
                PDF Preview Not Available
              </h3>
              <p className="text-gray-300 mb-6">
                Your browser doesn't support PDF preview. Use the buttons below to view or download.
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-[#ABFF02] text-[#ABFF02] rounded-full font-semibold hover:bg-[#ABFF02] hover:text-[#07030E] transition-colors"
                >
                  <HiExternalLink size={16} />
                  View in New Tab
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Download btn */}
      <a
        href={pdfPath}
        download="Krish_Raninga_Resume.pdf"
        rel="noopener noreferrer"
        className="relative overflow-hidden mt-6 text-[#07030E] border text-[15px] cursor-pointer bg-[#ABFF02] rounded-full p-[7px_14px] md:p-[10px_20px] flex items-center gap-2 group hover:bg-[#9FE002] transition-colors"
      >
        <HiDownload size={18} />
        <span className="relative font-medium font-poppins z-10">
          Download CV
        </span>
        <span className="absolute top-0 left-[-100%] w-[30px] h-full bg-white/90 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700 ease-in-out"></span>
      </a>

      {/* back btn */}
      <a
        href="/"
        className="mt-5 px-3 py-3 bg-[#ABFF02] fixed left-[2%] top-[2%] text-[#07030E] rounded-full font-semibold hover:bg-[#9FE002] transition z-50"
      >
        <HiArrowLeft />
      </a>
    </div>
  );
};

export default Resume;