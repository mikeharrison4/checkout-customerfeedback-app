import React from 'react';
import { Formik, Form, Field } from 'formik';
import content from '../../data/feedbackForm.json';
import FieldTextInput from './Fields/FieldTextInput';
import { validateForm } from '../../utils/formValidation';
import FieldRatingInput from './Fields/FieldRatingInput';
import FieldTextArea from './Fields/FieldTextArea';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import LoadingSpinner from '../Util/LoadingSpinner';
import ResponseMessage from './ResponseMessage';
import Button from '../Util/Button';
import { usePostComment } from './usePostComment';

const initialFormValues = {
  name: '',
  email: '',
  rating: 3,
  comment: ''
};

// const postComment = async (formValues) => await axios.post(
//   'http://localhost:3001/comments',
//   { ...formValues }
// );

const FeedbackForm = () => {
  // const queryClient = useQueryClient();
  let responseMessage = '';

  // const { mutate: addComment, isSuccess, isError } = useMutation(postComment, {
  //   onSuccess: () => queryClient.invalidateQueries('comments')
  // });

  const { addComment, isSuccess, isError } = usePostComment();

  const handleFormSubmit = async (values, { resetForm }) => {
    await addComment(values);
    resetForm({ values: '' });
  };

  if (isError) {
    responseMessage = content.responseMessageFailure;
  }

  if (isSuccess) {
    responseMessage = content.responseMessageSuccess;
  }

  return (
    <>
      <h1 className="text-5xl text-white font-bold tracking-wider pb-4">
        {content.title}
      </h1>
      <Formik
        initialValues={initialFormValues}
        validate={(values) => validateForm(values)}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="text-white">
            <div className="mt-8 flex justify-between">
              <Field
                component={FieldTextInput}
                name="name"
                pattern="[a-z_A-Z\s]+"
                className="mr-2"
                label={content.name}
              />
              <Field
                component={FieldTextInput}
                name="email"
                type="email"
                className="ml-2"
                label={content.email}
              />
            </div>
            <div className="mt-12">
              <Field
                component={FieldTextArea}
                name="comment"
                label={content.comment}
              />
            </div>
            <div className="mt-12 mb-8">
              <Field
                component={FieldRatingInput}
                name="rating"
                label={content.rating}
              />
            </div>
            <div>
              <Button
                id='submit'
                type="submit"
                disabled={isSubmitting}
                className="text-primary bg-white"
                aria-label={content.submit}
              >
                <span className="flex items-center">
                  { isSubmitting && <LoadingSpinner className="mr-4" /> }
                  {content.submit}
                </span>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      { responseMessage && (
        <ResponseMessage
          message={responseMessage}
          isError={isError}
        />
      ) }
    </>
  );
};

export default FeedbackForm;
