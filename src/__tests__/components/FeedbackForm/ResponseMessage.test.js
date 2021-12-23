import React from 'react';
import { shallow } from 'enzyme';
import ResponseMessage from '../../../components/FeedbackForm/ResponseMessage';
import { act } from 'react-dom/test-utils';

let useState;
let useEffect;

const mockUseEffect = () => {
  useEffect.mockImplementationOnce(f => f());
};

describe('ResponseMessage.jsx', () => {
  let props;
  const setState = jest.fn();

  beforeEach(() => {
    props = {
      isError: false,
      message: 'mockMessage'
    };
    jest.useFakeTimers();
    useState = jest.spyOn(React, 'useState');
    useEffect = jest.spyOn(React, 'useEffect');
    useState.mockImplementation((init) => [init, setState]);
    mockUseEffect();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call useEffects setTimeout and turn showPopup to false', () => {
    shallow(<ResponseMessage {...props} />);
    act(() => {
      jest.runOnlyPendingTimers();
      expect(setState).toHaveBeenNthCalledWith(1, false);
    });
  });

  it('should render correctly when useState showPopup is true', () => {
    const renderedComponent = shallow(<ResponseMessage {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render correctly when useState showPopup is true and isError is true', () => {
    props.isError = true;
    const renderedComponent = shallow(<ResponseMessage {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render null when useState showPopup is false', () => {
    useState.mockImplementation(() => [false, setState]);
    const renderedComponent = shallow(<ResponseMessage {...props} />);
    expect(renderedComponent.html()).toEqual(null);
  });
});