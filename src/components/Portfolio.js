import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Button } from "nes-react";
import PortfolioItem from "./PortfolioItem";
import secondaryItems from '../content/portfolio/SecondaryItems.json';
import mainItems from '../content/portfolio/MainItems.json';
import {Collapse} from 'react-collapse';

const Portfolio = () => {
  const [collapseStatus, toggleCollapse] = useState(false);
  const [buttonCTA, setCTA] = useState("View More");

  const main = mainItems.mainItems;
  const secondary = secondaryItems.secondaryItems;

  const toggle = () => {
    toggleCollapse(!collapseStatus);
    if (collapseStatus === false) {
      setCTA("View Less");
    }
    else {
      setCTA("View More");
    }
  }

  return (
    <Container title="Portfolio" dark>
      <div className="waterfallGrid">
        {main.map((item, index) => {
          return (
            <Fade bottom key={index}>
              <Container dark>
                <PortfolioItem
                  image={item.image}
                  title={item.title}
                  link={item.URL}
                  description={item.description}
                />
              </Container>
            </Fade>
          );
        })}
      </div>
      <div className="portfolioButtonContainer">
      <Button onClick={toggle}>{buttonCTA}</Button>
      </div>
      <Collapse isOpened={collapseStatus}>
      <div className="waterfallGrid">
      {secondary.map((item, index) => {
          return (
            <Fade bottom key={index} >
              <Container dark>
                <PortfolioItem
                  image={item.image}
                  title={item.title}
                  link={item.URL}
                  description={item.description}
                />
              </Container>
            </Fade>
          );
        })}
        </div>
</Collapse>
      
    </Container>
  );
};

export default Portfolio;
