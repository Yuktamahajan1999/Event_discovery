# Event Discovery App

## Overview
This is a **React-based web application** for discovering, exploring, and joining local community events. The app allows users to browse events, filter them by type, date, and location, view event details, RSVP to events, and (optionally) create new events.

---

## Features

### 1. Home / Explore Events
- Displays a list of all available events in a card/grid format.
- Users can **filter events** by:
  - Type (Workshop, Music, Sports, Meetup, etc.)
  - Date
  - Location
- Filters are interactive and update the displayed events dynamically.

### 2. Event Detail Page
- Displays all relevant information about a selected event:
  - Event title
  - Description
  - Date
  - Location
  - Host information
- Users can click **"Join Event"** to RSVP, which navigates to a confirmation page.

### 3. RSVP Confirmation
- Confirms that the user has successfully joined the event.
- Provides a link to navigate back to the home page.

### 4. Create Event
- Form allows adding a new event with fields:
  - Title
  - Type
  - Date
  - Location
  - Host
  - Description
- Includes basic input validation.

---

## Technical Implementation

### Frontend
- **React** for building UI components.
- **React Router** for navigation between pages.
- **Axios** for API calls to fetch events data.
- **State Management**: Local component state using `useState` and `useEffect`.
- **CSS**: External CSS files used for styling components.

### API Handling
- Events are fetched from a **mock JSON file** (`public/events.json`) using Axios.
- Functions in `api/events.js`:
  - `fetchEvents()` → Fetches all events.
  - `fetchEventById(id)` → Fetches a single event by ID.
  - `createEvent(eventData)` → Placeholder function for adding a new event (logs data).

---

## Author
**Yukta Mahajan**  
[GitHub Repository](https://github.com/Yuktamahajan1999/Event_discovery)
