import React from 'react';
import { Formik, Form, Field } from 'formik';
import content from '../data/feedbackForm.json';
import FieldInput from './FieldInput';

const FeedbackForm = () => {
  return (
    <div className="text-white">
      <h1 className="text-5xl font-bold tracking-wider pb-12">
        {content.title}
      </h1>
      <Formik
        initialValues={{ name: '', email: '' }}
        validateOnBlur={false}
        validate={values => {
          const errors = {};
          if (!values.name) { // make sure to not allow any numbers here
            errors.name = 'Required';
          } else if (!/^[_A-z\s]*((-|\s)*[_A-z\s])*$/.test(values.name)) {
            errors.name = 'Invalid name';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='feedback-form'>
            <div className="flex justify-between">
              <Field
                component={FieldInput}
                type="text"
                name="name"
                pattern="[a-z_A-Z\s]+"
                label="Name"
              />
              <Field
                component={FieldInput}
                name="email"
                type="email"
                label="Email"
              />
            </div>
            <div className="my-8">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackForm;
