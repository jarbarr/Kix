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
  it ('should have 2 children', () => {
    expect(wrapper.children().length).toBe(2);
  });

  it ('renders its child components', () => {
    wrapper.setProps({

    });

  });

});