import React from 'react';
import styled from 'styled-components';

// import logo from 'images/logo.png';

// const StyledOldLogo = styled.div`
//   img {
//     display: block;
//   }
// `;

const StyledLogo = styled.div`
  --scale: 1;
  --dim: calc(10rem * var(--scale));
  --span1-font-size: calc(4rem * var(--scale));
  --span2-font-size: calc(2rem * var(--scale));
  // https://stackoverflow.com/a/51432213/4106263
  display: flex;
  text-align: left;
  align-items: left;
  position: relative;
  width: var(--dim);
  height: var(--dim);
  flex-direction: column;
  justify-content: center;
  transform-style: preserve-3d;
  transform: skew(-10deg, 0deg);
  padding: calc(1rem * var(--scale));
  transition: width 0.5s height 0.5s;
  background: rgb(93, 0, 165);
  background: linear-gradient(
    0deg,
    rgba(93, 0, 165, 0.3309698879551821) 0%,
    rgba(143, 0, 205, 1) 100%
  );

  &::before {
    height: var(--dim);
    width: var(--dim);
    content: '';
    opacity: 0.25;
    display: block;
    background: white;
    position: absolute;
    box-shadow: 1rem 1rem 1rem;
    transform: translateZ(-1px) translateY(1rem);
  }

  span {
    color: white;
    transition: font-size 0.5s;
  }

  span:nth-child(1) {
    font-size: var(--span1-font-size);
    text-shadow: 1rem 1rem 0.5rem rgba(0, 0, 0, 0.25);
  }

  span:nth-child(2) {
    font-size: var(--span2-font-size);
  }

  @media (max-width: 768px) {
    --scale: 0.9;
  }

  @media (max-width: 425px) {
    --scale: 0.666;
  }
`;

// <img src={logo} alt="JS snippets" />

const Logo = () => (
  <StyledLogo>
    <span>JS</span>
    <span>Snippets</span>
  </StyledLogo>
);

export default Logo;
