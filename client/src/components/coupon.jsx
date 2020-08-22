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
const Inner = styled.div `
  position: inline flex;
`;
const Outter = styled.div `
  display: flex;
`;
const Img = styled.img `
  width: 5px;
`;

const Coupon = (props) => {
  return (
    <Outter>
      <Inner>
        <P onClick={props.exit}>up to 25% off | code: savings</P>
      </Inner>
      <Inner>
        <P>covid-19 is a team effort</P>
      </Inner>
      <Inner>
        <P>FREE SHIPPING OVER $49 AND FREE 30 DAY RETURNS</P>
      </Inner>
    </Outter>
  );
};

export default Coupon;