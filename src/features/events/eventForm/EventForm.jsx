import React from "react";
import { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";
import { Formik } from "formik";

const EventForm = ({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) => {
  // null conditional operator
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = () => {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: "/assets/user.png",
        });
    setFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <input
                type='text'
                placeholder='Event title'
                value={values.title}
                name='title'
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='text'
                value={values.category}
                placeholder='Category'
                name='category'
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='text'
                value={values.description}
                placeholder='Description'
                name='description'
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='text'
                value={values.city}
                placeholder='City'
                name='city'
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='text'
                value={values.venue}
                placeholder='Venue'
                name='venue'
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='date'
                value={values.date}
                placeholder='Date'
                name='date'
                onChange={handleChange}
              />
            </Form.Field>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button
              type='submit'
              floated='right'
              content='Cancel'
              onClick={() => setFormOpen(false)}
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default EventForm;
