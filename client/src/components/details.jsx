import React from 'react';
import styled from 'styled-components';

const DetD = styled.div `
`;

const DetUL = styled.ul `
`;
const DetLi = styled.li `
`;
const DetH = styled.p `
font-size: 36px;
font-weight: bold;
`;

const Details = (props) => {
  <DetD>
    <DetH></DetH>
    <DetUL>
      <DetLi><p>Regular fit</p></DetLi>
      <DetLi><p>Lace Closure</p></DetLi>
      <DetLi><p>Leather upper</p></DetLi>
      <DetLi><p></p></DetLi>
      <DetLi><p></p></DetLi>
      <DetLi><p></p></DetLi>
      <DetLi><p></p></DetLi>
      <DetLi><p></p></DetLi>
    </DetUL>
  </DetD>
};

export default Details;