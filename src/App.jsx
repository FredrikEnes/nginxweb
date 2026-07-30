import "./App.css";
import Forside from "./components/pages/Forside.jsx";
import About from "./components/pages/About.jsx";
import CV from "./components/pages/CV.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/pages/Projects.jsx";
import { Route, Switch } from "wouter";

function App() {
  return (
    <>
      <div className="App">
        <div className="Navigation">
          <Navbar />
        </div>

        <div className="container">
          <Switch>
            <Route path="/" component={Forside} />
            <Route path="/about" component={About} />
            <Route path="/cv" component={CV} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
