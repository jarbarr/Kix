import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  margin-top: 100px;
`;
const Pad = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  flex: 1;
`;
const Div = styled.div`
  display: flex;
`;
const MainBody = styled.div`
  margin-right: 120px;
  margin-left: 120px;
  flex: 4;
`;

const Ul = styled.ul`
  padding-left: 20px;
  padding-right: 0px;
  margin-left: 0px;
  margin-right: 200px;
`;
const Li = styled.li`
  padding-right: 0px;

`;
const Header = styled.p`
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 0px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
`;

const Details = (props) => {
  return (
    <Body>
      <Pad></Pad>
      <MainBody>
        <Header>SPECIFCATIONS</Header>
        <Div>
          <Ul>
            <Li><p>{props.data[1]}</p></Li>
            <Li><p>{props.data[2]}</p></Li>
            <Li><p>{props.data[3]}</p></Li>
            <Li><p>{props.data[4]}</p></Li>
          </Ul>
          <Ul>
            <Li><p>{props.data[5]}</p></Li>
            <Li><p>{props.data[6]}</p></Li>
            <Li><p>{props.data[7]}</p></Li>
            <Li><p>{props.data[8]}</p></Li>
          </Ul>
        </Div>
      </MainBody>
      <Pad></Pad>
    </Body>
  );
};

export default Details;