import React, { useEffect, useState } from "react";
import Event from "./Event";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { deleteEvent, getallEvents } from "../services/api";

export default function Events() {
  const [eventList, setEventList] = useState([]);
  const [isWelcome, setIsWelcome] = useState(true);
  const [isShowBuyAlert, setIsShowBuyAlert] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsResult = await getallEvents();
      setEventList(eventsResult.data);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const isWelcomeTimeout = setTimeout(() => {
      setIsWelcome(false);
    }, 3000);

    return () => {
      clearTimeout(isWelcomeTimeout);
    };
  }, []);

  const showBuyAlert = () => {
    setIsShowBuyAlert(true);
    setTimeout(() => {
      setIsShowBuyAlert(false);
    }, 2000);
  };

  const handleDelete = async (eventId) => {
    await deleteEvent(eventId);
    setEventList(eventList.filter((eventItem) => eventItem.id !== eventId));
  };

  return (
    <div>
      {isWelcome && (
        <Alert style={{ width: "70%", marginBottom: 40 }} variant="success">
          Hey welcome to the Shop
        </Alert>
      )}
      <Row xs={1} md={4} className="g-4">
        {eventList.map((eventItem, index) => (
          <Event
            key={index}
            event={eventItem}
            showBuyAlert={showBuyAlert}
            onDelete={handleDelete}
          />
        ))}
      </Row>
      {isShowBuyAlert && (
        <Alert style={{ width: "70%", marginTop: 20 }} variant="primary">
          You bought an Item
        </Alert>
      )}
    </div>
  );
}
