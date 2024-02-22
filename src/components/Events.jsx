import React, { useEffect, useState } from "react";
import Event from "./Event";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { deleteEvent } from "../services/api";
import { useSelector, useDispatch } from "react-redux";
import { deleteEventReducer, selectEvents } from "../redux/slices/eventsSlice";

export default function Events() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isShowBuyAlert, setIsShowBuyAlert] = useState(false);
  const [eventList] = useSelector(selectEvents);
  const dispatch = useDispatch();

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
    dispatch(deleteEventReducer(eventId));
  };

  return (
    <div>
      {isWelcome && (
        <Alert style={{ width: "70%", marginBottom: 40 }} variant="success">
          Hey welcome to Esprit Events
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
          You have booked an event
        </Alert>
      )}
    </div>
  );
}
