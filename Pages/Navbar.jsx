import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Eventify</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Create Event
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
