import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../client/src/components/navbar.jsx';


const wrapper = shallow(<NavBar />);
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();



  });

});