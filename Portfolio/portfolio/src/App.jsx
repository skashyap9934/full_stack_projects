/* eslint-disable no-unused-vars */

// Packages
import React, { useContext } from "react";

// Stylesheets
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import PostNavBody from "./components/PostNavBody";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThanksNote from "./components/ThanksNote";
import { MyThemeContext } from "./context/ThemeContextProvider";

const App = () => {
  const { theme } = useContext(MyThemeContext);

  return (
    <div className={`App ${theme}`}>
      <p>Hi</p>
      <Navbar />
      <PostNavBody />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Experience />
      <Stats />
      <Contact />
      <ThanksNote />
    </div>
  );
};

export default App;
