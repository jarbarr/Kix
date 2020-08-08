import React from 'react';

class RightArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.seed();
  }
  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}

export default RightArrow;