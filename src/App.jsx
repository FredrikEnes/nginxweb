import { Route, Switch } from "wouter";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import CV from "./pages/CV.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/cv" component={CV} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
