import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Nav from "./components/Nav";
import Links from "./components/Links";
import Skills from "./components/Skills";
import Overview from "./components/Overview";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <Overview />

        <Nav />
        <div name="education"></div>
        <Education />
        <div name="skills"></div>
        <Skills />

        <div name="portfolio"></div>

        <Portfolio />

        <div name="resume"></div>
        <Resume />
        <div name="links"></div>
        <Links />
        <Footer />
      </div>
      <Backdrop />
    </div>
  );
}
