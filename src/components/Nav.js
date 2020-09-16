import React from "react";
import { Container, Button } from "nes-react";
import { scroller } from "react-scroll";

const Nav = () => {
  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  return (
    <Container dark title="Navigation">
      <Button
        to="education"
        onClick={() => scrollTo("education")}
        style={{ color: "#212529" }}
      >
        Education
      </Button>
      <Button
        to="skills"
        onClick={() => scrollTo("skills")}
        style={{ color: "#212529" }}
      >
        Skills
      </Button>
      <Button
        to="portfolio"
        onClick={() => scrollTo("portfolio")}
        style={{ color: "#212529" }}
      >
        Portfolio
      </Button>
      <Button
        to="resume"
        onClick={() => scrollTo("resume")}
        style={{ color: "#212529" }}
      >
        Resume
      </Button>
      <Button
        to="links"
        onClick={() => scrollTo("links")}
        style={{ color: "#212529" }}
      >
        Links & Contact
      </Button>
    </Container>
  );
};

export default Nav;
