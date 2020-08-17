import React from 'react';
import styled from 'styled-components';

const P = styled.p `
  text-transform: uppercase;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  margin-left: 200px;

`;

class Coupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pop = this.pop.bind(this);
  }
  pop(e) {
    e.preventDefault();
    this.props.coupon();
  }
  render() {
    return (
      <P onClick={this.pop}>up to 25% off | code: savings</P>
    );
  }
}

export default Coupon;