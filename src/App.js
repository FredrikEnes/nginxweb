import "./App.css";
import Forside from "./components/pages/Forside";
import About from "./components/pages/About";
import CV from "./components/pages/CV";
import Navbar from "./components/Navbar";
import Projects from "./components/pages/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <div className="Navigation">
          <Navbar />
        </div>

        <div className="container">
          <Routes>
            <Route path="/" element={<Forside />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
