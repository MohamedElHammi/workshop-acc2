import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import events from "../data/events.json";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((evt) => evt.name === id);

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={`/images/${event.img}`}
            alt="Product Img"
            height="300"
          />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={12}>
              <h1>{event.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Description</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{event.description}</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Price</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{event.price} DT</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Likes</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{event.like}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
