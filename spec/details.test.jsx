import React from 'react';
import { shallow } from 'enzyme';
import Details from '../client/src/components/details.jsx';


const wrapper = shallow(<Details />);
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });

});