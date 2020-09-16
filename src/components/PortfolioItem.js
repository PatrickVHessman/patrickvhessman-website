import React from "react";

const PortfolioItem = (props) => {
  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <h5>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </h5>
      <p className="font12">{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          src={props.image}
          className="opacityHover"
          alt={props.title}
          style={{ width: "100%" }}
        />
      </a>
    </div>
  );
};

export default PortfolioItem;
