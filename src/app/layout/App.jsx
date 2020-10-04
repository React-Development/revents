import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventsDashboard/EventDashboard";
import NavBar from "../../features/events/nav/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </>
  );
};

export default App;
