import { useEffect, useState } from "react";
import { fetchEvents } from "../api/events";
import EventList from "../Components/EventList";
import EventFilters from "../Components/EventFilter";
const Home = () => {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({ type: "", date: "", location: "" });

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
    };
    getEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    return (
      (!filters.type || event.type.toLowerCase().includes(filters.type.toLowerCase())) &&
      (!filters.date || event.date === filters.date) &&
      (!filters.location || event.location.toLowerCase().includes(filters.location.toLowerCase()))
    );
  });

  return (
    <div className="home-page">
      <h1 className="home-title">Explore Events</h1>
      <EventFilters filters={filters} setFilters={setFilters} />
      <EventList events={filteredEvents} />
    </div>
  );
};

export default Home;
