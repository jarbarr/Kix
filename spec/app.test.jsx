import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/app.jsx';

let wrapper = shallow(<App />);
// app should exist
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

});