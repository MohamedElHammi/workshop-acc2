import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../services/api";

export default function EventAddForm() {
  const navigate = useNavigate();
  const [eventItem, setEventItem] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
  });

  const onValueChange = (e) => {
    setEventItem({ ...eventItem, [e.target.name]: e.target.value });
  };
  const onFileHandle = (e) => {
    setEventItem({ ...eventItem, [e.target.name]: e.target.files[0].name });
  };

  const addNewEvent = async () => {
    const eventResult = await addEvent(eventItem);
    if (eventResult.status === 201) {
      navigate("/events");
    }
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Add a new Event to your Event List</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => onValueChange(e)}
            name="name"
            value={eventItem.name}
            type="text"
            placeholder="Enter a Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description "
            onChange={(e) => onValueChange(e)}
            name="description"
            value={eventItem.description}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => onValueChange(e)}
            name="price"
            value={eventItem.price}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => onValueChange(e)}
            name="nbTickets"
            value={eventItem.nbTickets}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => onFileHandle(e)}
            name="img"
          />
        </Form.Group>
        <Button variant="primary" onClick={addNewEvent}>
          Add an Event
        </Button>
        <Button onClick={() => navigate("/events")} variant="secondary">
          Cancel
        </Button>
      </Form>
    </Container>
  );
}
