import React from 'react';
import styled from 'styled-components';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import HighLights from '../client/src/components/highlights.jsx';


describe('wrapper', () => {
  const wrapper = shallow(<HighLights />);
  it('should exist', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children()).toEqual(3);
  });

  it('should have a header', () => {
    const Header = wrapper.find('styled.p');
    expect(Header).toBeDefined();
    // expect(Header.text()).to.equal('HIGHLIGHTS');
  });

  it('should have 3 images', () => {
    const Img = wrapper.find('styled.img');
    expect(Img).toBeDefined();
    // expect(Img).to.have.length(3);
  });

});