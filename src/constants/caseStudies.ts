// src/constants/caseStudies.ts

export interface TCaseStudy {
  title:       string;
  date:        string;
  summary:     string;
  images:      string[];         // imported assets
  challenge:   string;
  action:      string;
  result:      string;
}

// ---- Import all case study images ----
import DissertationImg    from "../assets/case-studies/aiz-strat.png";
import DissertationStats  from "../assets/case-studies/aiz-link.png";
import BinanceAthensCZ    from "../assets/case-studies/BinanceAthensMeetupCZ.jpg";
import BinanceAthensTeam  from "../assets/case-studies/BinanceAthensMeetupTeam.jpg";
import BinanceThessTeam   from "../assets/case-studies/BinanceThessalonikiTeam.jpg";
import BinanceThessLogo   from "../assets/case-studies/BinanceThessaloniki.png";
import BoroumeDonationCart from "../assets/case-studies/BoroumeCart.png";
import BoroumeDonationBoxes from "../assets/case-studies/BoroumeBoxes.png";
import UniBinanceTeam     from "../assets/case-studies/UniOfYorkBinanceTeam.jpg";
import UniBinanceBanner   from "../assets/case-studies/UniOfYorkBinance.jpg";
import ConferenceDummy     from "../assets/case-studies/dummy1.png";
import KaspiDummy         from "../assets/case-studies/dummy2.png";

// ---- Unified case studies list ----
export const caseStudies: TCaseStudy[] = [
  {
    title:   "Digital Strategy for Alexander Innovation Zone",
    date:    "Dec 2024 – Jun 2025",
    summary: "Practical dissertation: digital & social media strategy for AIZ.",
    images:  [DissertationImg, DissertationStats],
    challenge:
      "Develop a digital & social media strategy to engage academia, industry, government, and civil society in the Alexander Innovation Zone.",
    action:
      "Conducted stakeholder research, digital audits, and campaign design using Meta Business Suite, Canva, Google Ads, and SEO tools; crafted content aligned with the Quadruple Helix model; presented to AIZ leadership.",
    result:
      "Strategy approved and partly implemented, spawning new partnerships and revenue; publicly praised by AIZ and academic supervisor on LinkedIn.",
  },
  {
    title:   "Volunteer Support at Binance Meetups",
    date:    "Nov 2022 & Mar 2023",
    summary: "Streamlined check‑in & setup for Athens & Thessaloniki events.",
    images:  [
      BinanceThessTeam,
      BinanceAthensCZ,
      BinanceAthensTeam,
      BinanceThessLogo
    ],
    challenge:
      "Optimize participant check‑in and venue logistics for two Binance community meetups.",
    action:
      "Scanned QR codes and registered 80+ attendees in under 15 minutes; arranged staging, A/V equipment, and guest flow.",
    result:
      "Reduced check‑in wait times from 3 minutes to under 1 minute; received strong positive feedback.",
  },
  {
    title:   "Volunteer Food Drive with Boroume Foundation",
    date:    "May 2024",
    summary: "Collect & distribute 120 kg of food donations.",
    images:  [BoroumeDonationCart, BoroumeDonationBoxes],
    challenge:
      "Coordinate collection and delivery of food for vulnerable families in Thessaloniki.",
    action:
      "Led an 8‑person team; partnered with local markets for donation bins; managed storage and distribution.",
    result:
      "Delivered to 60 families; earned a formal thank‑you from Boroume.",
  },
  {
    title:   "Launching Binance Academy at University of York",
    date:    "Apr 2023",
    summary: "Kick‑off on‑campus Binance Academy lectures.",
    images:  [UniBinanceTeam, UniBinanceBanner],
    challenge:
      "Drive student awareness and attendance for Binance Academy lectures.",
    action:
      "Secured approval from Binance Greece leadership; managed venue setup, promotion, and registration via Google Forms.",
    result:
      "45 students attended (50% capacity); 90% rated the session “Excellent.”",    
  },
  {
    title:   "Supporting University Online Conference",
    date:    "May 2022",
    summary: "Seamless virtual conference experience & certification.",
    images:  [ConferenceDummy],
    challenge:
      "Ensure smooth registration, streaming, and certificate issuance for 120+ participants.",
    action:
      "Managed Zoom setup, chat moderation, and issued 110 certificates within 24 hours.",
    result:
      "Zero access complaints; 100% on‑time certificate delivery; praised as “best in two years.”",    
  },
  {
    title:   "Managing Online Sales on Kaspi.kz & Partner Marketplaces",
    date:    "May 2021 – Jun 2022",
    summary: "Scaled from 2–3 to 10 orders/day.",
    images:  [KaspiDummy],
    challenge:
      "Increase daily order volume by systematizing product listings.",
    action:
      "Published 300 optimized listings; tracked performance; expanded to multiple marketplaces and applied dynamic pricing.",
    result:
      "Achieved +230% order growth; maintained performance for duration of role.",    
  },
];
