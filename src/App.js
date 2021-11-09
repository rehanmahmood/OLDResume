import React from "react";
import "./App.css";
import Profile from "./components/Home/Profile";
import About from "./components/About/About";
import Projects from "./components/Resume/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Profile/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;