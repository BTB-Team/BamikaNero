import {HashRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Cantact";
import Project from "./pages/project/Project";
import Services from "./pages/services/Services";
import ServiceDetail from "./pages/services/ServiceDetail";
import ProjectDetail from "./pages/project/ProjectDetail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
