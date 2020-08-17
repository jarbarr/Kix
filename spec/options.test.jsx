import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Options from '../client/src/components/options.jsx';


const wrapper = shallow(<Options />);
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });
  // it('should exist', () => {
  //   const Img = wrapper.find('styled.img');
  //   expect(Img).children.toEqual(1);

  // });

});