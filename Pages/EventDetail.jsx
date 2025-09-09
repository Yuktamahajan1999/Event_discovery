import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEventById } from "../api/events";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      const data = await fetchEventById(id);
      setEvent(data);
    };
    getEvent();
  }, [id]);

  if (!event) return <div className="loading">Loading...</div>;

  const handleRSVP = () => {
    navigate(`/rsvp/${id}`);
  };

  return (
    <div className="event-detail">
      <h1 className="event-detail-title">{event.title}</h1>
      <p className="event-detail-description">{event.description}</p>
      <p className="event-detail-date">Date: {event.date}</p>
      <p className="event-detail-location">Location: {event.location}</p>
      <p className="event-detail-host">Host: {event.host}</p>
      <button className="event-rsvp-button" onClick={handleRSVP}>
        Join Event
      </button>
    </div>
  );
};

export default EventDetail;
