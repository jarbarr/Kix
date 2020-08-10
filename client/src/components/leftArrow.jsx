import React from 'react';
import styled from 'styled-components';

const L = styled.button `
  cursor: pointer;

`;

class LeftArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

  }
  render() {
    return (
      <L onClick={this.handleClick}>Click Me</L>
    );
  }
}

export default LeftArrow;