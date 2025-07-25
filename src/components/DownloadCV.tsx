import React from "react";

const DownloadCV: React.FC = () => (
  <a
    href="/LevKashkin_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={`
      fixed bottom-8 right-8 z-[9999]
      bg-white text-black font-bold
      px-5 py-3 rounded-full shadow-xl
      hover:scale-105 hover:shadow-2xl
      transition-transform transition-shadow
    `}
  >
    Download CV
  </a>
);

export default DownloadCV;
