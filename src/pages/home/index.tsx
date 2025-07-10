import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Language from "./language";
import RealisticWaterfall from "@/components/shared/realistic-waterfall";
import ParticleSystem from "@/components/shared/particle-system";
import "./style.scss";

function Home() {
  return (
    <>
      <RealisticWaterfall />
      <ParticleSystem />
      <div className="relative z-20">
        <Hero />
        <About />
        <Skills />
        <Language />
        <Projects />
        <div className="h-28"></div>
      </div>
    </>
  );
}

export default Home;
