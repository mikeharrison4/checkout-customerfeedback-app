import React from 'react';
import { Formik, Form, Field } from 'formik';
import content from '../../data/feedbackForm.json';
import FieldTextInput from './FieldInputs/FieldTextInput';
import { validateForm } from '../../utils/formValidation';
import FieldRatingInput from './FieldInputs/FieldRatingInput';

const FeedbackForm = () => {
  return (
    <div className="text-white">
      <h1 className="text-5xl font-bold tracking-wider pb-4">
        {content.title}
      </h1>
      <Formik
        initialValues={{ name: '', email: '', rating: 2 }}
        validate={(values) => validateForm(values)}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="my-8 flex justify-between">
              <Field
                component={FieldTextInput}
                name="name"
                pattern="[a-z_A-Z\s]+"
                className="mr-2"
                label={content.nameField}
              />
              <Field
                component={FieldTextInput}
                name="email"
                type="email"
                className="ml-2"
                label={content.emailField}
              />
            </div>
            <div className="my-8">
              <Field
                component={FieldRatingInput}
                name="rating"
              />
            </div>
            <div className="my-8">
              <button
                type="submit"
                disabled={isSubmitting}
              >
                {!isSubmitting ? content.submit : 'Submitting..'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackForm;
