// src/components/sections/Contact.tsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

// your social/contact data
const socials = [
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    url: "https://t.me/leffushkaa",
    display: "@leffushkaa",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/lev-kashkin/",
    display: "Lev Kashkin",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/leo.kashkin",
    display: "@leo.kashkin",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/LevKash",
    display: "LevKash",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:leokashkin@icloud.com",
    display: "leokashkin@icloud.com",
  },
  {
    name: "Phone",
    icon: FaPhone,
    url: "tel:+306945360253",
    display: "+30 694 536 0253",
  },
];

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-10 overflow-hidden xl:mt-12">
      {/* Left: socials card */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8 relative"
      >
        {/* Section header */}
        <Header useMotion={false} {...config.contact} />

        {/* Group box */}
        <div className="mt-8 bg-tertiary rounded-xl p-6 space-y-4 shadow-lg">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <Tilt
                key={s.name}
                glareEnable
                glareMaxOpacity={0.1}
                scale={1.02}
                transitionSpeed={300}
                className="w-full"
              >
                <motion.a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center justify-between bg-primary rounded-lg px-4 py-3 cursor-pointer hover:bg-primary/90 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="text-white text-xl" />
                    <span className="text-white font-medium">{s.name}</span>
                  </div>
                  <span className="text-secondary">{s.display}</span>
                </motion.a>
              </Tilt>
            );
          })}
        </div>
      </motion.div>

      {/* Right: Earth canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
