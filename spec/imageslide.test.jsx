import React from 'react';
import { shallow } from 'enzyme';
import ImageSlide from '../client/src/components/imageslide.jsx';

const wrapper = shallow(<ImageSlide />);

describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });

});