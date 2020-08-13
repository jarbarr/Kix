import React from 'react';
import { shallow } from 'enzyme';
import Options from '../client/src/components/options.jsx';


const wrapper = shallow(<Options />);
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });

});