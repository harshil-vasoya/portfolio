import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Language from "./language";
import "./style.scss";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Language />
      <Projects />
      <div className="h-28"></div>
    </>
  );
}

export default Home;
