import React from 'react';
import styled from 'styled-components';

const TN = styled.div `
`;
const T1 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px;
`;
const T2 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;
const T3 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;
const T4 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;
const T5 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;
const T6 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;
const T7 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;
const T8 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;
const T9 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;
const T10 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;
const T11 = styled.img `
  cursor: pointer;
  height:25px;
  width: auto;
  display: inline;
  padding: 10px
`;

class ThumbNail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TN>
        <T1 src="o1.jpg"/>
        <T2 src="o1.jpg"/>
        <T3 src="o1.jpg"/>
        <T4 src="o1.jpg"/>
        <T5 src="o1.jpg"/>
        <T6 src="o1.jpg"/>
        <T7 src="o1.jpg"/>
        <T8 src="o1.jpg"/>
        <T9 src="o1.jpg"/>
        <T10 src="o1.jpg"/>
        <T11 src="o1.jpg"/>
      </TN>
    );
  }
}

export default ThumbNail;