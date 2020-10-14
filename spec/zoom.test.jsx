import React from 'react';
import { shallow } from 'enzyme';
import Zoom from '../client/src/components/zoom.jsx';



const wrapper = shallow(<Zoom />);
describe('wrapper', () => {
  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });

  it('should have state', () => {
    const instance = wrapper.instance();
    expect(instance).to.be.instanceOf(wrapper);
  });

  it('should have a className of zoom', () => {
    const Div = wrapper.find('styled.div');
    expect(Div).toBeDefined();
    expect(Div).hasClass('zoom').to.equal(true);
  });

  it('should have props passed from its parent component', () => {
    expect(wrapper.props()).toBeDefined();
    expect(wrapper.prop('zoomIn')).toEqual('this.zoomMore');
  });

});