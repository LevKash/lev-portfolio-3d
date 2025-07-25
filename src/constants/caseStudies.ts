// src/constants/caseStudies.ts

export interface TCaseStudy {
  title:       string;
  date:        string;
  summary:     string;
  images:      string[];
  challenge:   string;
  action:      string;
  result:      string;
}

// 1) BINANCE VOLUNTEER MEETUPS (Athens & Thessaloniki)
import CZMeetup    from "../assets/case-studies/BinanceAthensMeetupCZ.jpg";
import ATHenTeam   from "../assets/case-studies/BinanceAthensMeetupTeam.jpg";
import THessTeam   from "../assets/case-studies/BinanceThessalonikiTeam.jpg";
import THessLogo   from "../assets/case-studies/BinanceThessaloniki.png";

// 2) BOROUME FOOD DRIVE
import BoroumeBoxes from "../assets/case-studies/BoroumeBoxes.png";
import BoroumeCart  from "../assets/case-studies/BoroumeCart.png";

// 3) UNI OF YORK / BINANCE ACADEMY LAUNCH
import UniYorkTeam   from "../assets/case-studies/UniOfYorkBinanceTeam.jpg";
import UniYorkBanner from "../assets/case-studies/UniOfYorkBinance.jpg";

// 4) Supporting University Online Conference (placeholder for now)
import Dummy1        from "../assets/case-studies/dummy1.png";

// 5) Managing Online Sales on Kaspi.kz (placeholder for now)
import Dummy2        from "../assets/case-studies/dummy2.png";

export const caseStudies: TCaseStudy[] = [
  {
    title:     "Volunteer Support at Binance Meetups",
    date:      "Nov 2022 & Mar 2023",
    summary:   "Streamline check‑in & setup for Athens & Thessaloniki events.",
    images:    [CZMeetup, ATHenTeam, THessTeam, THessLogo],
    challenge:
      "Streamline participant check‑in and on‑site setup for two offline Binance community events.",
    action:
      "Scanned QR codes and registered up to 80 attendees in under 15 minutes per event; arranged staging (tables, microphones, projection equipment); guided guests through event schedules and venue layout.",
    result:
      "Reduced average check‑in wait time to 30 seconds (from ~3 minutes) and earned positive feedback on event organization and flow.",
  },
  {
    title:     "Volunteer Food Drive with Boroume",
    date:      "May 2024",
    summary:   "Collect & distribute food donations with Boroume.",
    images:    [BoroumeBoxes, BoroumeCart],
    challenge:
      "Organize the collection and distribution of food donations for vulnerable families in Thessaloniki, in partnership with Boroume.",
    action:
      "Assembled an 8‑person volunteer team; partnered with three local market stalls to place donation bins; managed logistics for collection, storage, and distribution through a community center.",
    result:
      "Collected 120 kg of food over a few hours and delivered donations to 60 families; received a formal thank‑you letter from Boroume.",
  },
  {
    title:     "Launching Binance Academy at University",
    date:      "Apr 2023",
    summary:   "Kick‑off on‑campus Binance Academy lectures.",
    images:    [UniYorkTeam, UniYorkBanner],
    challenge:
      "Drive student awareness of Binance Academy and introduce crypto education on campus.",
    action:
      "Secured agreement from the Binance Greece director and team to deliver an on‑campus lecture; coordinated venue logistics for a 100‑seat auditorium; scheduled the event and promoted via student chats and social media; built and managed registration through a Google Form, sending reminders and tracking sign‑ups.",
    result:
      "45 students attended (50 % of auditorium capacity), and 90 % of attendees rated the lecture as “Excellent” in post‑event feedback.",
  },
  {
    title:     "Supporting University Online Conference",
    date:      "May 2022",
    summary:   "Seamless participant experience & certificates.",
    images:    [Dummy1],
    challenge:
      "Ensure seamless participant experience and timely issuance of certificates for a student‑focused academic conference.",
    action:
      "Managed Zoom registration (120 sign‑ups) and setup; prepared and emailed 110 digital certificates within 24 hours post‑event; moderated chat and resolved technical queries in real time.",
    result:
      "Achieved 100 % certificate delivery within 24 hours with zero access complaints; organizers praised support as “best in two years.”",
  },
  {
    title:     "Managing Online Sales on Kaspi.kz",
    date:      "May 2021 – Jun 2022",
    summary:   "Scale product listings & inventory control.",
    images:    [Dummy2],
    challenge:
      "Increase daily order volume from 2–3 to a sustainable level on Kaspi.kz, where listings lacked systematic management.",
    action:
      "Created and published 300 product listings with optimized descriptions, images, and pricing; implemented daily order tracking per listing; expanded to Wildberries, Halyk Market, Jusan Market, and Forte Market under unified inventory control; applied dynamic pricing strategies including discounts and bundle offers.",
    result:
      "Daily orders rose to ~10 per day (+230 %). Orders reverted to 2–3 per day after departure, underscoring my direct impact.",
  },
];
