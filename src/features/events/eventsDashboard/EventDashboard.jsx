import React, { useState } from "react";
import { Grid } from "semantic-ui-react";

import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

const EventDashboard = () => {
  const [events, setEvents] = useState(sampleData);

  // const handleCreateEvent = (event) => {
  //   setEvents((prevState) => prevState.concat(event));
  // };

  // const handleUpdateEvent = (updatedEvent) => {
  //   setEvents((prevState) =>
  //     prevState.map((currEvent) =>
  //       currEvent.id === updatedEvent.id ? updatedEvent : currEvent
  //     )
  //   );
  //   selectEvent(null);
  // };

  const handleDeleteEvent = (eventId) => {
    setEvents((prevState) => prevState.filter((event) => event.id !== eventId));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
