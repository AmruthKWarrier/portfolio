import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Achievements from "./components/achievements/Achievements";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Achievements />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
};

export default App;
