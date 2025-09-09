const EventFilters = ({ filters, setFilters }) => {
  return (
    <div className="event-filters">
      <input
        className="filter-input filter-type"
        type="text"
        placeholder="Search by type"
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
      />
      <input
        className="filter-input filter-date"
        type="date"
        value={filters.date}
        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
      />
      <input
        className="filter-input filter-location"
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      />
    </div>
  );
};

export default EventFilters;
