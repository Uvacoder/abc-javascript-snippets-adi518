import React from 'react';
import styled from 'styled-components';

import pjson from '../../package.json';

const StyledTitle = styled.span`
  // visibility: hidden;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Title = () => (
  <StyledTitle className="Title">JS Snippets {pjson.version}</StyledTitle>
);

export default Title;
