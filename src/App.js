import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
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
    </div>
  );
}

export default App;
