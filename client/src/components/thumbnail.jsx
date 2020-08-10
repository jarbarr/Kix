import React from 'react';
import styled from 'styled-components';

const TN = styled.div `
  cursor: pointer
`;

const ThumbNail = (props) => {
  return (
    <div style={divStyle}>
      <img style={imgStyle}/>
      <img />
      <img />
      <img />
      <img />
      <img />
      <img />
      <img />
      <img />
      <img />
      <img />
    </div>
  );
};

export default ThumbNail;