import React, { useState } from "react";
import { Container } from "nes-react";
import Col from "./Col";
import Row from "./Row";
import Modal from "react-bootstrap/Modal";

import msuLogo from "../img/MSU-horiz.png";
import awsLogo from "../img/aws-logo.png";
import awsCert from "../img/aws-cert.png";

const Education = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <Container title="Education and Certifications" dark>
      <div className="font12 educationSection">
        <Row>
          <Col>
            <h6>Montana State University</h6>
            <img src={msuLogo} alt="Montana State University" />
            <p>Bachelor of Arts (B.A.), Film/Video and Photographic Arts</p>
            <p>3.31 GPA, Honors</p>
          </Col>
          <Col>
            <h6>Amazon Web Services (AWS)</h6>
            <img
              src={awsLogo}
              alt="Amazon Web Services Solutions Architect Associate"
            />
            <p>Amazon Web Services Solutions Architect Associate</p>
            <p>
              <span
                onClick={() => {
                  toggleModal(true);
                }}
                className="pseudoLink"
              >
                See credential
              </span>
            </p>
          </Col>
        </Row>
      </div>

      <Modal
        show={showModal}
        onHide={() => toggleModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            src={awsCert}
            alt="Amazon Web Services Solutions Architect Associate"
            style={{
              width: "100%",
              border: "rgb(33, 37, 41) 3px solid",
              boxSizing: "border-box"
            }}
          />
          <p
            style={{ textAlign: "center", marginTop: "1rem" }}
            className="font12"
          >
            Credential ID: 4FS93S62DJE1Q49N
          </p>
          <p style={{ textAlign: "center" }} className="font12">
            <a
              href="http://aws.amazon.com/verification"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Ceritifcation
            </a>
          </p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Education;
