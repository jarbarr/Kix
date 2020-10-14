import React from 'react';
import { shallow } from 'enzyme';
import Description from '../client/src/components/description.jsx';


const wrapper = shallow(<Description />);
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });

});