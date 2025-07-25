// src/components/sections/Certificates.tsx
import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../../constants/styles";

// PDFs
import StudentSymposium from "../../assets/certificates/sss.pdf";
import SuccessMindset  from "../../assets/certificates/su.pdf";
import AILanguage      from "../../assets/certificates/ai.pdf";
import SkilledComm     from "../../assets/certificates/be.pdf";
import Storytelling    from "../../assets/certificates/fr.pdf";
import PPDVolunteer    from "../../assets/certificates/pr.pdf";

interface Certificate {
  title: string;
  date:  string;
  file:  string;
}

const certificates: Certificate[] = [
  { title: "20th Student Spring Symposium", date: "May 15–16, 2024", file: StudentSymposium },
  { title: `"Success Mindset and Leadership" Seminar`, date: "13 May 2025", file: SuccessMindset },
  { title: `"AI in Language Learning and Education" Seminar`, date: "5 Nov 2024", file: AILanguage },
  { title: `"Becoming a Skilled Communicator" Seminar`, date: "7 Nov 2023", file: SkilledComm },
  { title: `"From Words to Sound: Storytelling in Podcasts" Seminar`, date: "3 Dec 2024", file: Storytelling },
  { title: "PPD Seminar Volunteer Reference Letter", date: "Autumn 2024–Spring 2025", file: PPDVolunteer },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.1, duration: 0.6 }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 0.8 },
};

const modalVariants = {
  hidden:  { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
  exit:    { scale: 0.8, opacity: 0, transition: { duration: 0.2 } },
};

const Certificates: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number|null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = openIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openIdx]);

  const scroll = (dir: "left"|"right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
  };

  return (
    <>
      <section id="certs" className="relative px-6 py-12 bg-primary overflow-hidden">
        {/* gradient underlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-20 pointer-events-none -z-10" />

        <motion.div
          className="mx-auto max-w-7xl flex flex-col items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="section-sub-text">WHAT I’VE ACHIEVED</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
          <p className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Hover to reveal — scroll or click arrows to browse, click to preview.
          </p>

          <div className="mt-10 relative flex items-center justify-start w-full">
            {/* left arrow */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => scroll("left")}
              className="absolute left-0 md:left-[-20px] text-4xl text-secondary hover:text-white z-10"
              aria-label="Scroll left"
            >
              ‹
            </motion.button>

            {/* cards */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-hidden px-4 py-2 snap-x snap-mandatory"
            >
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  variants={cardVariants}
                  className="snap-center"
                >
                  <Tilt
                    glareEnable
                    glareMaxOpacity={0.15}
                    scale={1.02}
                    transitionSpeed={350}
                    className="w-[300px] cursor-pointer"
                  >
                    <div
                      onClick={() => setOpenIdx(i)}
                      className="bg-tertiary rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                    >
                      <div className="h-40 bg-secondary flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 2h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                        </svg>
                      </div>
                      <div className="p-4 text-left">
                        <h3 className="text-white font-bold text-[18px] leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-secondary text-[13px] mt-1">{cert.date}</p>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>

            {/* right arrow */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => scroll("right")}
              className="absolute right-0 md:right-[-20px] text-4xl text-secondary hover:text-white z-10"
              aria-label="Scroll right"
            >
              ›
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* lightbox */}
      <AnimatePresence>
        {openIdx !== null && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setOpenIdx(null)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div
                className="pointer-events-auto relative bg-tertiary rounded-xl overflow-hidden w-[90vw] h-[90vh] max-w-6xl shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-white text-3xl z-10"
                  onClick={() => setOpenIdx(null)}
                >✕</button>
                <iframe
                  src={certificates[openIdx].file}
                  className="w-full h-full"
                  title={certificates[openIdx].title}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;
