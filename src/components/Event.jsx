import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function Event(props) {
  const [event, setEvent] = useState(props.event);

  const handleLike = () => {
    setEvent((eventPrev) => ({
      ...eventPrev,
      like: eventPrev.like ? 0 : 1,
    }));
  };

  const handleBuy = () => {
    props.showBuyAlert();
    setEvent((eventPrev) => ({
      ...eventPrev,
      nbParticipants: eventPrev.nbParticipants + 1,
      nbTickets: eventPrev.nbTickets - 1,
    }));
  };

  return (
    <Col style={{ width: "20%" }} className="m-2">
      <Card>
        <Card.Img
          variant="top"
          style={{ height: 400 }}
          src={`/images/${!!event.nbTickets ? event.img : "sold_out.png"}`}
        />
        <Card.Body>
          <NavLink to={`${event.name}`}>
            <Card.Title>{event.name}</Card.Title>
          </NavLink>
          <Card.Text>Price : {event.price}</Card.Text>
          <Card.Text>Number of tickets : {event.nbTickets}</Card.Text>
          <Card.Text>Number of participants : {event.nbParticipants}</Card.Text>
          <Card.Text>Like : {event.like}</Card.Text>
          <Button variant="info" onClick={handleLike} className="mx-5">
            Like
          </Button>
          <Button
            variant="primary"
            onClick={handleBuy}
            disabled={!!event.nbTickets ? false : true}
            className="mx-5"
          >
            Buy
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
