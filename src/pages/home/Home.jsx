import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../home/Banner";
import AboutStats from "../home/About";
import Services from "./Services";
import Projects from "../home/Projects";
import Stats from "../home/Stats";
import CTA from "../home/CTA";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash || window.location.hash || "";
    const hashQuery = hash.includes("?")
      ? hash.slice(hash.indexOf("?") + 1)
      : "";
    const queryString = location.search || hashQuery;
    const params = new URLSearchParams(queryString);
    const target = params.get("to");

    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location.hash, location.search]);

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
