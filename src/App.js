import "./App.css";
import Forside from "./components/pages/Forside";
import About from "./components/pages/About";
import CV from "./components/pages/CV";
import Navbar from "./components/Navbar";
import Projects from "./components/pages/Projects";
import ParticlesBackground from "./components/ParticlesBackground";
import { Route, Routes } from "react-router-dom";
import Logos from "./components/Logos";

function App() {
  return (
    <>
      <div className="Navigation">
        <Navbar />
        <ParticlesBackground />
      </div>

      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Forside />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Logos />
      </div>
    </>
  );
}

export default App;
