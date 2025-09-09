import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../api/events";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    location: "",
    host: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(formData);
    navigate("/");
  };

  return (
    <div className="create-event-page">
      <h1 className="create-event-title">Create a New Event</h1>
      <form className="create-event-form" onSubmit={handleSubmit}>
        <input
          className="form-input title-input"
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          className="form-input type-input"
          type="text"
          name="type"
          placeholder="Event Type"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <input
          className="form-input date-input"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          className="form-input location-input"
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          className="form-input host-input"
          type="text"
          name="host"
          placeholder="Host"
          value={formData.host}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-textarea description-textarea"
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button className="submit-button" type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;