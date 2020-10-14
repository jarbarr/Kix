import React from 'react';
import { shallow } from 'enzyme';
import ZoomMore from '../client/src/components/zoomMore.jsx';



const wrapper = shallow(<ZoomMore />);
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });

  it('should have props passed from its parent component', () => {
    expect(wrapper.props()).toBeDefined();
  });

  // expect(wrapper.find('.foo')).to.have.lengthOf(1);
  // expect(wrapper.find('.bar')).to.have.lengthOf(0);
  // wrapper.setState({ name: 'bar' });
  // expect(wrapper.find('.foo')).to.have.lengthOf(0);
  // expect(wrapper.find('.bar')).to.have.lengthOf(1);

});