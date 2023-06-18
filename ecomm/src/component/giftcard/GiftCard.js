import React from "react";
import { GiftFilled } from "@ant-design/icons";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import Accordion from "react-bootstrap/Accordion";

function GiftCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const giftStyle = {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    border: "1px solid black",
    borderRadius: "50%",
    padding: "10px",
    zIndex: "1",
  };
  return (
    <div style={giftStyle}>
      <div className="gift">
        {show && (
          <div className="giftCard">
            <Card border="dark" style={{ width: "18rem" }}>
              <Card.Header>Offers</Card.Header>
              <Card.Body style={{height: '400px'}}>
                <Card.Title>Coupon cards for you!</Card.Title>
                <Accordion >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
              <Button style={{width: '100px', margin: 'auto', marginBottom: '5px'}} variant="secondary" onClick={handleClose}>
                  Close
                </Button>
            </Card>
          </div>
        )}
      </div>
      <GiftFilled onClick={handleShow} style={{ fontSize: "30px" }} />
    </div>
  );
}

export default GiftCard;
