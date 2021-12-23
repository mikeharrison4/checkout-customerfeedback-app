import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../../../components/Comments/Comments';
import { useFetchComments } from '../../../components/Comments/useFetchComments';

jest.mock('../../../components/Comments/useFetchComments', () => ({
  useFetchComments: jest.fn(),
}));

let useState;

describe('Comments.jsx', () => {
  const setState = jest.fn();
  const comments = [{
    id: 1,
    name: 'mockName',
    email: 'mockEmail@mockaroo.com',
    rating: 5,
    comment: 'mockComment'
  }];

  beforeEach(() => {
    useFetchComments.mockImplementation(() => ({
      isLoading: false,
      isError: false,
    }));
    useState = jest.spyOn(React, 'useState');
    useState.mockImplementation(() => [comments, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should render correctly when isLoading and isError are both false', () => {
    const renderedComponent = shallow(<Comments />);
    expect(useFetchComments).toHaveBeenCalledTimes(1);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render correctly when isLoading is true', () => {
    useFetchComments.mockImplementation(() => ({
      isLoading: true
    }));
    const renderedComponent = shallow(<Comments />);
    expect(useFetchComments).toHaveBeenCalledTimes(1);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render correctly when isLoading is true', () => {
    useFetchComments.mockImplementation(() => ({
      isError: true
    }));
    const renderedComponent = shallow(<Comments />);
    expect(useFetchComments).toHaveBeenCalledTimes(1);
    expect(renderedComponent).toMatchSnapshot();
  });
});