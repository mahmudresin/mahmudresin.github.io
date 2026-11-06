import { useState } from "react";
import { useSmoothScroll } from "./utils/smoothScroll";
import { CinematicLoader } from "./components/CinematicLoader";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { KineticMarquee } from "./components/KineticMarquee";
import { About } from "./components/About";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ProjectGallery } from "./components/ProjectGallery";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { Credentials } from "./components/Credentials";
import { ResearchInterests } from "./components/ResearchInterests";
import { Contact } from "./components/Contact";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize high-performance smooth scroll
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black antialiased overflow-x-hidden">
      {/* Cinematic Opening Preloader */}
      <CinematicLoader onComplete={() => setIsLoaded(true)} />

      {/* Desktop-Only Custom Interactive Cursor */}
      <CustomCursor />

      {/* Persistent Floating Navigation */}
      <Navbar ready={isLoaded} />

      {/* Main Experience Flow */}
      <main>
        <Hero ready={isLoaded} />
        <KineticMarquee />
        <About />
        <ExperienceTimeline />
        <ProjectGallery />
        <SkillsMatrix />
        <Credentials />
        <ResearchInterests />
        <Contact />
      </main>
    </div>
  );
}
