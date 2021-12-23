import React from 'react';
import { shallow } from 'enzyme';
import FieldTextInput from '../../../components/FeedbackForm/Fields/FieldTextInput';

describe('FieldTextInput.jsx', () => {
  let props;
  
  beforeEach(() => {
    props = {
      field: {
        name: 'mockFieldName'
      },
      label: 'mockLabel',
      className: 'mockClassName',
      form: {
        isSubmitting: false,
        values: { mockFieldName: 'mockName' },
        errors: {},
        touched: {}, 
      }
    };
  });
  
  it('should render correctly when no errors are present', () => {
    const renderedComponent = shallow(<FieldTextInput {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render correctly when no className is provided', () => {
    delete props.className;
    const renderedComponent = shallow(<FieldTextInput {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render correctly when field value is empty', () => {
    props.form.values = {};
    const renderedComponent = shallow(<FieldTextInput {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render correctly errors are present but the field has not been touched', () => {
    props.form.errors = { mockFieldName: 'Required' };
    const renderedComponent = shallow(<FieldTextInput {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should show errors when errors are present and the field has been touched', () => {
    props.form.errors = { mockFieldName: 'Required' };
    props.form.touched = { mockFieldName: true };
    const renderedComponent = shallow(<FieldTextInput {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

});