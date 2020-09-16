import React from "react";
import Fade from "react-reveal/Fade";
import { Container } from "nes-react";
import PortfolioItem from "./PortfolioItem";
import portfolioItems from "../content/PortfolioItems.json";

const Portfolio = () => {
  const items = portfolioItems.portfolioItems;

  return (
    <Container title="Portfolio" dark>
      <div className="waterfallGrid">
        {items.map((item, index) => {
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
    </Container>
  );
};

export default Portfolio;
