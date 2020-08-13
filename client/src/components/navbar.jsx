import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav `
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const Pad = styled.div `
  flex: .5;
`;
const Ul = styled.ul `
  list-style-type: none;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 50px;
  padding: 10px;
  flex: 4;
  justify-content: center;
`;

const Li = styled.li `
  display: inline;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    border-bottom: 4px solid black;
  }
`;

const NavBar = (props) => {
  return (
    <Nav className="navbar">
      <Pad></Pad>
      <Ul>
        <Li><a>Gallery</a></Li>
        <Li><a>Hilights</a></Li>
        <Li><a>Description</a></Li>
        <Li><a>Details</a></Li>
        <Li><a>Story</a></Li>
        <Li><a>Complete The Look</a></Li>
        <Li><a>How To Style</a></Li>
        <Li><a>Reviews</a></Li>
      </Ul>
      <Pad></Pad>
    </Nav>
  );
};

export default NavBar;

