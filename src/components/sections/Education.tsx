// src/components/sections/Education.tsx
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { textVariant } from "../../utils/motion";
import { config } from "../../constants/config";
import { styles } from "../../constants/styles"; // <-- your shared utilities
import type { TEducationItem } from "../../constants/config";

const Education: React.FC = () => {
  const { sections, educationList } = config;

  return (
    <section id="education" className="px-6 py-12 max-w-7xl mx-auto">
      {/* —— SECTION HEADER —— */}
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{sections.education.h2}</h2>
      </motion.div>

      {/* —— OPTIONAL SUBTEXT —— */}
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={textVariant(0.1)}
      >
        {sections.education.content}
      </motion.p>

      {/* —— TILT CARDS —— */}
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {educationList.map((item: TEducationItem, i: number) => (
          <Tilt
            key={item.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            glareEnable
            glareMaxOpacity={0.3}
            glarePosition="all"
            glareBorderRadius="20px"
            scale={1.05}
            transitionSpeed={400}
            className="xs:w-[400px] w-full"
          >
            <motion.div
              variants={textVariant(0.2 + i * 0.1)}
              className="bg-tertiary rounded-[20px] p-6 w-full h-[450px] flex flex-col justify-between items-center"
            >
              {/* logo */}
              <div className="w-full h-[220px] flex justify-center items-center">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-72 h-72 object-contain"
                />
              </div>
              {/* title / subtitle / date */}
              <div className="w-full text-center">
                <h3 className="text-white font-bold text-[26px] leading-tight">
                  {item.title}
                </h3>
                <p className="text-secondary text-[18px] mt-3">
                  {item.subtitle}
                </p>
                <p className="text-secondary text-[16px] mt-2">
                  {item.date}
                </p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Education;
