import React from "react";
import Row from "./Row";

const ResumeItem = (props) => {
  return (
    <Row>
      <div style={{ flex: "1", marginBottom: "1rem" }}>
        <h4>
          <a
            href={props.position.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.position.company}
          </a>
        </h4>
        <div>{props.position.title}</div>
        <div>{props.position.location}</div>
        <div>{props.position.date}</div>
      </div>
      <div style={{ flex: "2", marginBottom: "1rem" }}>
        <div>{props.position.description}</div>
      </div>
    </Row>
  );
};

export default ResumeItem;
