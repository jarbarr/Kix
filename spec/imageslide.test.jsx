import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import ImageSlide from '../client/src/components/imageslide.jsx';

const wrapper = shallow(<ImageSlide />);

describe('wrapper', () => {

  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });
  // it('should call props.zoomIn when image is clicked', () => {
  //   const mock = jest.fn();
  //   expect(mock).not.toHaveBeenCalled();
  //   wrapper.find('styled.img').simulate('click');


  // });

  // it('should have background color of #eceff0', () => {
  //   const slide = wrapper.find('Slide');

  // });
  // it('')
  // wrapper.instance().Zoom = mock;
  // const ImageSlide = wrapper.find('ImageSlide');
  // ImageSlide.simulate('click');
  // expect(mock).toHaveBeenCalled();

});
