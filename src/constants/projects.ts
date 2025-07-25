// src/constants/projects.ts

export type TCaseStudy = {
  title:       string;
  description: string;
  date:        string;
  images?:     string[];      // paths under public/assets/case-studies
};

export const caseStudies: TCaseStudy[] = [
  {
    title:       "Launching Binance Academy at University",
    description: `
      Challenge: Drive student awareness of Binance Academy and introduce crypto education on campus.
      Action: Secured agreement from the Binance Greece director and team to deliver an on‑campus lecture. 
        Coordinated venue logistics for a 100‑seat auditorium, promoted via student chats & social media, 
        and managed registration & reminders through Google Forms.
      Result: 45 students attended (50% of capacity). 90% rated the lecture “Excellent” in post‑event feedback.
    `,
    date:        "September 2022 – Present",
    images: [
      "/assets/case-studies/Uni of york Binance Team.png",
      "/assets/case-studies/Uni of york Binance.png",
    ],
  },
  {
    title:       "Volunteer Food Drive with Boroume Foundation",
    description: `
      Challenge: Organize the collection and distribution of food donations for vulnerable families in Thessaloniki.
      Action: Assembled an 8‑person volunteer team. Partnered with three local market stalls to place donation bins. 
        Managed logistics for collection, storage, and distribution through a community center.
      Result: 120 kg of food collected in a few hours. Donations delivered to 60 families in need. 
        Received a formal thank‑you letter from Boroume.
    `,
    date:        "July 2022",
    images: [
      "/assets/case-studies/Boroume Boxes.png",
      "/assets/case-studies/Boroume Cart.png",
    ],
  },
  {
    title:       "Supporting University Online Conference",
    description: `
      Challenge: Ensure seamless participant experience and timely issuance of certificates for a student‑focused academic conference.
      Action: Managed Zoom registration for 120 sign‑ups and technical setup. Prepared and emailed 110 digital certificates 
        within 24 hours post‑event. Moderated the chat, resolving technical queries in real time.
      Result: 0 complaints regarding access or timing issues. 100% certificate delivery within 24 hours.
        Organizers praised the support as “best in two years.”
    `,
    date:        "May 2022",
    // no screenshots for this one yet, so just omit or add placeholders
  },
  {
    title:       "Volunteer Support at Binance Meetups (Athens & Thessaloniki)",
    description: `
      Challenge: Streamline participant check‑in and on‑site setup for two offline Binance community events.
      Action: Scanned QR codes and registered up to 80 attendees in under 15 minutes per event. Arranged staging 
        (tables, microphones, projection). Guided guests through schedules and venue layouts.
      Result: Reduced average check‑in wait time to 1 minute (from ~3 minutes). Received positive feedback on 
        event organization and flow.
    `,
    date:        "Feb 2022",
    images: [
      "/assets/case-studies/Binance Athens Meetup CZ.png",
      "/assets/case-studies/Binance Athens Meetup Team.png",
      "/assets/case-studies/Binance Thessaloniki Team.png",
      "/assets/case-studies/Binance Thessaloniki.png",
    ],
  },
  {
    title:       "Managing Online Sales on Kaspi.kz & Partner Marketplaces",
    description: `
      Challenge: Increase daily order volume from 2–3 to a sustainable level on Kaspi.kz, where listings lacked systematic management.
      Action: Created and published 300 product listings with optimized descriptions, images, and pricing. Implemented daily tracking 
        of orders per listing. Expanded to Wildberries, Halyk Market, Jusan Market, and Forte Market under unified inventory control.
        Applied dynamic pricing strategies, including discounts and bundle offers.
      Result: Daily orders rose to ~10 per day (+230 %). Orders reverted to 2–3 per day after my departure, underscoring my direct impact.
    `,
    date:        "May 2021 – Jun 2022",
    // you can add images here if you have screenshots, otherwise omit
  },
];
