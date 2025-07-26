// src/components/sections/Works.tsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, TCaseStudy } from "../../constants/caseStudies";
import { styles } from "../../constants/styles";

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 0.75 },
};

const modalVariants = {
  hidden:  { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit:    { scale: 0.8, opacity: 0, transition: { duration: 0.2 } },
};

const Works: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = openIdx !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIdx]);

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-12 bg-primary">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-sub-text">PROJECTS & CASE STUDIES</p>
            <h2 className={styles.sectionHeadText}>Portfolio.</h2>
          </motion.div>
          <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
            Hover a card to see it pulse — click to open the full case.
          </p>

          {/* 3‑column grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {caseStudies.map((cs: TCaseStudy, i: number) => {
              // default thumbnail is the first image
              const thumbSrc = cs.images[0];

              return (
                <motion.div
                  key={cs.title}
                  className="bg-tertiary rounded-[20px] overflow-hidden cursor-pointer w-full max-w-[400px]"
                  onClick={() => setOpenIdx(i)}
                  whileHover={{
                    scale: [1, 1.03, 1],
                    transition: { duration: 1.5, repeat: Infinity },
                  }}
                >
                  <img
                    src={thumbSrc}
                    alt={cs.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col h-[200px]">
                    <h3 className="text-white font-bold text-[20px] leading-tight flex-grow">
                      {cs.title}
                    </h3>
                    <p className="text-secondary text-[14px] mt-1">{cs.date}</p>
                    <p className="text-secondary text-[14px] mt-2 line-clamp-3">
                      {cs.summary}
                    </p>
                    {cs.images.length > 1 && (
                      <span className="mt-2 text-accent text-[14px] italic self-end">
                        +{cs.images.length - 1} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {openIdx !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setOpenIdx(null)}
            />

            {/* Modal Container */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Modal Content */}
              <div
                className="relative bg-tertiary rounded-xl overflow-hidden w-[85vw] h-[80vh] max-w-6xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white text-3xl leading-none"
                  onClick={() => setOpenIdx(null)}
                >
                  ✕
                </button>

                {/* Header + Large Summary */}
                <div className="px-8 pt-6">
                  <h2 className="text-white text-3xl font-bold">
                    {caseStudies[openIdx].title}
                  </h2>
                  <p className="text-secondary text-base mt-1">
                    {caseStudies[openIdx].date}
                  </p>
                  <p className="text-secondary text-[18px] mt-4">
                    {caseStudies[openIdx].summary}
                  </p>
                </div>

                {/* Image Carousel (42vh) */}
                <div className="mt-4 px-8 overflow-x-auto flex gap-4 h-[42vh] scrollbar-thin scrollbar-thumb-secondary">
                  {caseStudies[openIdx].images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Slide ${idx + 1}`}
                      className="flex-shrink-0 rounded-lg object-cover"
                      style={{ height: "40vh", width: "auto" }}
                    />
                  ))}
                </div>

                {/* Full Text (32vh) */}
                <div className="px-8 py-6 text-secondary text-[18px] space-y-4 overflow-y-auto h-[32vh]">
                  <p>
                    <strong>Challenge:</strong> {caseStudies[openIdx].challenge}
                  </p>
                  <p>
                    <strong>Action:</strong> {caseStudies[openIdx].action}
                  </p>
                  <p>
                    <strong>Result:</strong> {caseStudies[openIdx].result}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Works;
