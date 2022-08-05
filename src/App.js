import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
