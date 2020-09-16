import React from "react";
import { Container } from "nes-react";
import ResumeItem from "./ResumeItem";
import ResumeItems from "../content/ResumeItems";

const Resume = () => {
  const items = ResumeItems();

  return (
    <Container title="Resume" dark>
      <div className="font12">
        {items.map((position, index) => {
          return (
            <div className="resumeItems">
              <ResumeItem position={position} key={index} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Resume;
