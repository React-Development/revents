import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import NavBar from "../../features/events/nav/NavBar";
import EventDashboard from "../../features/events/eventsDashboard/EventDashboard";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

const App = () => {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
};

export default App;
