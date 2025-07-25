// src/constants/experiences.ts
import binanceIcon from "../assets/company/binance.png";
import kaspiIcon    from "../assets/company/kaspi.png";
import elcIcon      from "../assets/company/elc.png";

/** Same shape as your TExperience type */
export interface TExperience {
  title:       string;
  companyName: string;
  icon:        string;
  iconBg:      string;
  date:        string;
  points:      string[];
}

export const experiences: TExperience[] = [
  {
    title:       "Community Manager (Binance Angel)",
    companyName: "Binance",
    icon:        binanceIcon,
    iconBg:      "#383E56",
    date:        "September 2022 - Present",
    points: [
      "Organized official Binance Academy lectures on campus, attracting several dozen students",
      "Managed event logistics in Athens & Thessaloniki (venue setup, registration workflow, post-event summaries)",
      "Collaborated with Binance Greece leadership and local student groups to boost attendance",
      "Managing an online community of 70.000+ active users daily",
    ],
  },
  {
    title:       "Sales & Marketing Manager",
    companyName: "Kaspi.kz & Partner Marketplaces",
    icon:        kaspiIcon,
    iconBg:      "#E6DEDD",
    date:        "May 2021 - June 2022",
    points: [
      "Created approximately 300 product listings on Kaspi.kz, Wildberries, OZON, Halyk Market, Jusan Market and Forte Market",
      "Wrote SEO-aware titles and descriptions to enhance product discoverability",
      "Developed a fully automated Google Sheets tracker for sales, ROI, KPIs and inventory",
      "Expanded online sales channels and coordinated inventory across multiple marketplaces",
    ],
  },
  {
    title:       "Online English Teacher",
    companyName: "ELC Almaty",
    icon:        elcIcon,
    iconBg:      "#abb2cfff",
    date:        "September 2021 - May 2022",
    points: [
      "Developed multimedia lesson content and digital teaching materials for school & university students",
      "Optimized slide decks and handouts for readability and engagement",
      // add more bullet points if needed…
    ],
  },
];
