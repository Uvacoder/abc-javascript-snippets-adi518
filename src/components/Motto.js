import React from 'react';
import styled from 'styled-components';

const StyledMotto = styled.div`
  margin-top: 4rem;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.5rem;
`;

const Line = styled.div`
  line-height: 2;
  transition: font-size 0.5s;

  &::before {
    content: '< ';
  }

  &::after {
    content: ' />';
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Motto = () => (
  <StyledMotto>
    <Line className="animated pulse infinite slow">
      Improve your JavaScript
    </Line>
  </StyledMotto>
);

export default Motto;
