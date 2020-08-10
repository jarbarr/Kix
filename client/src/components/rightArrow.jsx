import React from 'react';
import styled from 'styled-components';

const R = styled.button `
  cursor: pointer;

`;

class RightArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

  }
  render() {
    return (
      <R onClick={this.handleClick}>Click Me</R>
    );
  }
}

export default RightArrow;