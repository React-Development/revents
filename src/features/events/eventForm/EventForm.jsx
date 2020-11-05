import React from "react";
import { useState } from "react";
import { Button, Header, Segment, FormField } from "semantic-ui-react";
import cuid from "cuid";
import { Formik, Form, Field } from "formik";

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
        <Form className='ui form'>
          <FormField>
            <Field name='title' placeholder='Event title' />
          </FormField>
          <FormField>
            <Field name='category' placeholder='Category' />
          </FormField>
          <FormField>
            <Field name='description' placeholder='Description' />
          </FormField>
          <FormField>
            <Field name='city' placeholder='City' />
          </FormField>
          <FormField>
            <Field name='venue' placeholder='Venue' />
          </FormField>
          <FormField>
            <Field name='date' type='date' placeholder='Event date' />
          </FormField>

          <Button type='submit' floated='right' positive content='Submit' />
          <Button
            type='submit'
            floated='right'
            content='Cancel'
            onClick={() => setFormOpen(false)}
          />
        </Form>
      </Formik>
    </Segment>
  );
};

export default EventForm;
