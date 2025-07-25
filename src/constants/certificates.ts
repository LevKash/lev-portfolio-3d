// src/constants/certificates.ts

export interface TCertificate {
  title: string;
  date: string;
  src: string;
}

import sss from '../assets/certificates/sss.pdf';
import su from  '../assets/certificates/su.pdf';
import ai from  '../assets/certificates/ai.pdf';
import be from  '../assets/certificates/be.pdf';
import fr from  '../assets/certificates/fr.pdf';
import pr from  '../assets/certificates/pr.pdf';

export const certificates: TCertificate[] = [
  {
    title: "20th Student Spring Symposium",
    date:  "May 15–16, 2024",
    src:   sss,
  },
  {
    title: `"Success Mindset and Leadership" Seminar`,
    date:  "13 May 2025",
    src:   su,
  },
  {
    title: `"AI in Language Learning and Education" Seminar`,
    date:  "5 Nov 2024",
    src:   ai,
  },
  {
    title: `"Becoming a Skilled Communicator" Seminar`,
    date:  "7 Nov 2023",
    src:   be,
  },
  {
    title: `"From Words to Sound: Storytelling in Podcasts" Seminar`,
    date:  "3 Dec 2024",
    src:   fr,
  },
  {
    title: "PPD Seminar Volunteer Reference Letter",
    date:  "Autumn 2024–Spring 2025",
    src:   pr,
  },
];
