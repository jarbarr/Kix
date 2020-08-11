import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul `
  list-style-type: none
`;

const Li = styled.li `
  display: inline;
  padding: 20px
`;

const NavBar = (props) => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default NavBar;

