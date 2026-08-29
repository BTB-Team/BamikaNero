import { useEffect } from "react";
import Banner from "../home/Banner";
import AboutStats from "../home/About";
import Services from "../home/Services";
import Projects from "../home/Projects";
import Stats from "../home/Stats";
import CTA from "../home/CTA";

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const target = params.get("to");
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  return (
    <main>
      <Banner />
      <AboutStats />
      <Services />
      <Projects />
      <Stats />
      <CTA />
    </main>
  );
}
