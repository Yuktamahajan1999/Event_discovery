import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3 className="event-title">{event.title}</h3>
      <p className="event-type">Type: {event.type}</p>
      <p className="event-date">Date: {event.date}</p>
      <p className="event-location">Location: {event.location}</p>
      <Link to={`/event/${event.id}`} className="event-detail-link">
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
