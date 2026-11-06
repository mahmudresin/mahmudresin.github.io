import { useState } from "react";
import { useSmoothScroll } from "./utils/smoothScroll";
import { CinematicLoader } from "./components/CinematicLoader";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { KineticMarquee } from "./components/KineticMarquee";
import { About } from "./components/About";
import { ProjectGallery } from "./components/ProjectGallery";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize smooth inertia scroll
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black antialiased overflow-x-hidden">
      {/* Editorial Opening Transition */}
      <CinematicLoader onComplete={() => setIsLoaded(true)} />

      {/* Minimalist Precision Indicator */}
      <CustomCursor />

      {/* Monograph Navigation */}
      <Navbar ready={isLoaded} />

      {/* Editorial Body */}
      <main>
        <Hero ready={isLoaded} />
        <KineticMarquee />
        <About />
        <ProjectGallery />
        <ExperienceTimeline />
        <SkillsMatrix />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}
