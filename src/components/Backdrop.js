import React from "react";

import spaceBG from "../img/space-bg.png";
import stars from "../img/stars-bg.png";
import bigPlanet from "../img/big-planet-bg.png";
import farPlanets from "../img/far-planets-bg.png";
import ringPlanet from "../img/ring-planet-bg.png";

const Backdrop = () => {
  return (
    <div>
      <img src={spaceBG} className="space-bg" alt="spaceBG" />
      <img src={stars} className="stars" alt="stars" />
      <img src={farPlanets} className="farPlanets" alt="farPlanets" />
      <img src={bigPlanet} className="bigPlanet" alt="bigPlanet" />
      <img src={ringPlanet} className="ringPlanet" alt="ringPlanet" />
    </div>
  );
};

export default Backdrop;
