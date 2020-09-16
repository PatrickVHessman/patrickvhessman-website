import React from "react";
import { Container, List } from "nes-react";

import skillList from "../content/Skills.json";

const Skills = () => {
  const items = skillList.skills;

  return (
    <Container title="Skills" dark>
      <div className="col2ListDiv font12">
        <List>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </List>
      </div>
    </Container>
  );
};

export default Skills;
