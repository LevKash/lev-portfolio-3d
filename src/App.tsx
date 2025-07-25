// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Education,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import DownloadCV from "./components/DownloadCV";
// remove Feedbacks import, add Certificates:
import Certificates from "./components/sections/Certificates";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        {/* Floating Download CV button*/}
        <DownloadCV />
        {/* About Me */}
        <About />

        {/* NEW Education block */}
        <Education />

        {/* Work Experience */}
        <Experience />

        

        {/* Projects */}
        <Works />

        {/* Certifications (replaces Testimonials) */}
        <Certificates />

        <div className="relative z-0">
          {/* Contact Links */}
          <Contact />

          {/* Stars background */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
