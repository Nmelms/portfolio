import "./App.css";
import ReactGA from "react-ga";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const TRACKING_ID = "UA-225326777-1";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <NavBar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
