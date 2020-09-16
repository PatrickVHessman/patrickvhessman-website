import React from "react";
import { Container } from "nes-react";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <Container dark>
      <p className="font12">
        Created with{" "}
        <a
          href="https://nostalgic-css.github.io/NES.css/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NES.css
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/jonhermansen/nes-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          nes-react
        </a>
        .
        {" | "}
        <a
          href="https://github.com/PatrickVHessman/patrickvhessman-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          View site source code
        </a>
      </p>
      <p className="font12">© Copyright {copyrightYear} Patrick Hessman</p>
    </Container>
  );
};

export default Footer;
