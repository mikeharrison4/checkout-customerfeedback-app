import React from 'react';
import { shallow, mount } from 'enzyme';
import FeedbackForm from '../../../components/FeedbackForm/FeedbackForm';
import { usePostComment } from '../../../components/FeedbackForm/usePostComment';
import { Formik } from 'formik';

jest.mock('../../../components/FeedbackForm/usePostComment', () => ({
  usePostComment: jest.fn(),
}));

const resetForm = jest.fn();

describe('FeedbackForm.js',  () => {
  beforeEach(() => {
    usePostComment.mockImplementation(() => ({
      addComment: jest.fn(),
      isSuccess: false,
      isError: false,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly when the form has not been submitted',  () => {
    const renderedComponent = shallow(<FeedbackForm />);
    expect(usePostComment).toHaveBeenCalledTimes(1);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render correctly when form has been submitted and isSuccess is true', () => {
    usePostComment.mockImplementation(() => ({
      addComment: jest.fn(),
      isSuccess: true,
      isError: false,
    }));
    const renderedComponent = shallow(<FeedbackForm />);
    expect(usePostComment).toHaveBeenCalledTimes(1);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render correctly when form has been submitted and isError is true', () => {
    usePostComment.mockImplementation(() => ({
      addComment: jest.fn(),
      isSuccess: false,
      isError: true,
    }));
    const renderedComponent = shallow(<FeedbackForm />);
    expect(usePostComment).toHaveBeenCalledTimes(1);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should call handleFormSubmit when submit btn is clicked', async () => {
    const addComment = jest.fn();
    const formValues = { values: 'mockValues' };
    usePostComment.mockImplementation(() => ({
      addComment,
    }));
    const renderedComponent = shallow(<FeedbackForm />);
    const handleFormSubmit = renderedComponent.find('Formik').props().onSubmit;
    await handleFormSubmit(formValues, { resetForm });

    expect(addComment).toHaveBeenNthCalledWith(1, formValues);
    expect(resetForm).toHaveBeenCalledTimes(1);
  });

  it('should call validation and return empty array when form is valid', async () => {
    const renderedComponent = shallow(<FeedbackForm />);
    const validate = renderedComponent.find('Formik').props().validate;
    const errors = validate({
      name: 'mockName', email: 'mockEmail@mockaroo.com', comment: 'mockComment'
    });
    expect(errors).toEqual({ name: 'mockName', email: 'mockEmail@mockaroo.com', comment: 'mockComment' });
  });

  it('should call validation and return suitable errors', async () => {
    const renderedComponent = shallow(<FeedbackForm />);
    const validate = renderedComponent.find('Formik').props().validate;
    const errors = validate({});
    expect(errors).toEqual({ name: 'Required', email: 'Required', comment: 'Required' });
  });

  it('should render the formik children fields correctly when isSubmitting is false', () => {
    const renderedComponent = shallow(<FeedbackForm />);
    const children = renderedComponent
      .find(Formik)
      .renderProp('children')({ isSubmitting: false });
    expect(children).toMatchSnapshot();
  });

  it('should render the formik children fields correctly when isSubmitting is true', () => {
    const renderedComponent = shallow(<FeedbackForm />);
    const children = renderedComponent
      .find(Formik)
      .renderProp('children')({ isSubmitting: true });
    expect(children).toMatchSnapshot();
  });
});