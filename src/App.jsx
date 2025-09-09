import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import EventDetail from "../Pages/EventDetail";
import RSVPConfirmation from "../Pages/RSVPConfirmation";
import Navbar from "../Pages/Navbar";
import CreateEvent from "../Components/CreateEvent";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/rsvp/:id" element={<RSVPConfirmation />} />
            <Route path="/create" element={<CreateEvent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
