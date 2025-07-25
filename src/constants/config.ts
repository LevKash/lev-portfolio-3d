// src/constants/config.ts

import YorkLogo from "../assets/education/UOY-Logo.png";
import MscLogo  from "../assets/education/BMSTU-Logo.png";

// one education card
export type TEducationItem = {
  logo: string;
  title: string;
  subtitle: string;
  date: string;
};

// base section
export type TSection = {
  p: string;
  h2: string;
  content?: string;
};

// full config type
export type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: TSection & {
    form: {
      name: { span: string; placeholder: string };
      email: { span: string; placeholder: string };
      message: { span: string; placeholder: string };
    };
  };
  sections: {
    about: Required<TSection>;
    education: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
  educationList: TEducationItem[];
  navLinks: { id: string; title: string }[];
};

export const config: TConfig = {
  html: {
    title:    "Lev Kashkin — Portfolio",
    fullName: "Lev Kashkin",
    email:    "leokashkin@icloud.com",
  },
  hero: {
    name: "Lev Kashkin",
    p: [
      "Community Coordinator & Crypto Educator",
      "Digital Marketing, Communication & E‑commerce Specialist",
    ],
  },
  contact: {
    p:   "Want to collaborate or learn more? Reach out!",
    h2:  "Contact.",
    form: {
      name: {
        span:        "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span:        "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span:        "Your Message",
        placeholder: "What would you like to say?",
      },
    },
    content: "",
  },
  sections: {
    about: {
      p:       "Introduction",
      h2:      "About Me.",
      content: `Hello! I'm Lev Kashkin, a communication and digital media professional based in Thessaloniki, Greece. With a BA (Hons) in Communication & Digital Media from the University of York and three years as a Binance Angel volunteer, I specialize in community coordination, digital marketing campaigns, and engaging content creation. I love working cross-functionally to deliver results and bring ideas to life through strategy, data tracking, and creative execution.`,
    },
    education: {
      p:       "My Education",
      h2:      "Education.",
      content: `Below are the institutions where I studied. Hover or scroll to see more.`,
    },
    experience: {
      p:  "What I've done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p:  "What others say",
      h2: "Testimonials.",
    },
    works: {
      p:       "Projects & Case Studies",
      h2:      "Portfolio.",
      content: `Here you can explore my volunteer and professional projects, from launching on‑campus Binance Academy lectures to scaling e‑commerce listings on Kaspi.kz and partner marketplaces. Each case study highlights the challenge, my actions, and the results achieved.`,
    },
  },
  educationList: [
    {
      logo:     YorkLogo,
      title:    "University of York",
      subtitle: "BA (Hons) in Communication & Digital Media",
      date:     "2022 – 2025",
    },
    {
      logo:     MscLogo,
      title:    "Moscow Technical University",
      subtitle: "BA (Hons) in Advertisement & Public Relations",
      date:     "2021 – 2025",
    },
  ],
  navLinks: [
    { id: "about",      title: "About"          },
    { id: "education",  title: "Education"      },
    { id: "work",       title: "Work Experience" },
    { id: "portfolio",  title: "Portfolio"      },
    { id: "certs",      title: "Certifications" },
    { id: "contact",    title: "Contact"        },
  ],
};
