import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/app.jsx';

let wrapper = shallow(<App />);
// app should exist
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
  it ('should have 7 div tags', () => {
    expect(wrapper.find('div').length).toEqual(7);
  });

  it ('should render zoom component conditionally through click event', () => {
    const mock = jest.fn();
    wrapper.instance().Zoom = mock;
    const ImageSlide = wrapper.find('ImageSlide');
    ImageSlide.simulate('click');
    expect(mock).toHaveBeenCalled();

  });

});