import React from 'react';
import { shallow } from 'enzyme';
import Zoom from '../client/src/components/zoom.jsx';


const wrapper = shallow(<Zoom />);
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });

});