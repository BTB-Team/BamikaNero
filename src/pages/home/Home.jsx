import Banner from "../home/Banner";
import About from "../home/About";
import Services from "../home/services";
import Projects from "../home/Projects";
import Stats from "../home/Stats";
// import Values from "../home/Values";
import CTA from "../home/CTA";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <Projects />
      <Stats />
      {/* <Values /> */}
      <CTA />
    </main>
  );
}
