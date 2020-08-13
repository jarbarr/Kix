import React from 'react';
import { shallow } from 'enzyme';
import HighLights from '../client/src/components/highlights.jsx';


describe('wrapper', () => {
  const wrapper = shallow(<HighLights />);
  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });

});