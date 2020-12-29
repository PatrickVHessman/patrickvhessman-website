import React from "react";
import { Container } from "nes-react";
import Row from "./Row";
import Col from "./Col";

import patrickAvatar from "../PatHessBig2.png";

const Overview = () => {
  return (
    <Container dark>
      <Row>
        <Col>
          <h1 className="headline">Patrick V. Hessman</h1>
          <h4>Innovative and Dynamic Developer</h4>
        </Col>
        <Col>
          <div style={{ textAlign: "center" }}>
            <img
              src={patrickAvatar}
              className="avatar"
              alt="Patrick V. Hessman"
            />
          </div>
        </Col>
      </Row>

      <p>
        I am a self-taught designer and developer always seeking a new
        challenge to tackle and new skills to learn. My skills have been applied
        to a wide range of projects; including COVID-19 data modeling, nonprofit
        organizations, magazine publications, and gaming assistance tools. I
        have worked on teams that served clients such as Samsung, Intel, Siemens, VMware, Cisco, Xerox, Dell, HP,
        Lenovo, Oracle, IBM, Red Hat, and Google.
      </p>

      <p>
        I live by a simple principle: Always keep advancing and always keep
        growing.
      </p>
    </Container>
  );
};

export default Overview;
