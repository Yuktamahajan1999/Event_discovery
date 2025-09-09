import { useParams, Link } from "react-router-dom";

const RSVPConfirmation = () => {
  const { id } = useParams();
  return (
    <div className="rsvp-confirmation">
      <h2 className="rsvp-message">Successfully joined event #{id}!</h2>
      <Link to="/" className="rsvp-back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default RSVPConfirmation;
