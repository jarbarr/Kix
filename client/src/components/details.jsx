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
`;

const Details = (props) => {
  return (
    <Body>
      <Pad></Pad>
      <MainBody>
        <Header>SPECIFCATIONS</Header>
        <Div>
          <Ul>
            <Li><p>Regular fit</p></Li>
            <Li><p>Lace Closure</p></Li>
            <Li><p>Leather upper</p></Li>
            <Li><p>Leather trainers with lace jewels</p></Li>
          </Ul>
          <Ul>
            <Li><p>Rubber outsole</p></Li>
            <Li><p>Imported</p></Li>
            <Li><p>Product Color White / Core Black / Gold Metallic</p></Li>
            <Li><p>Product Code FV3396</p></Li>
          </Ul>
        </Div>
      </MainBody>
      <Pad></Pad>
    </Body>
  );
};

export default Details;