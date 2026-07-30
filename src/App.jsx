import { Route, Switch } from "wouter";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import CV from "./components/pages/CV.jsx";
import Forside from "./components/pages/Forside.jsx";
import Projects from "./components/pages/Projects.jsx";

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
            <Route path="/cv" component={CV} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
