import React from 'react';
import styled from 'styled-components';
import { useWindowScroll } from 'react-use';

const StyledNav = styled.div`
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  padding: 1rem;
  align-items: center;
  position: absolute;
  transition: background-color 0.5s, padding 0.5s;

  &.is-sticky {
    position: fixed;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(var(--color-foreground-rgb), 0.85);

    // FIXME: hacky workaround
    svg {
      fill: white;
      width: 1.5rem;
    }

    .Title {
      color: white;
      visibility: visible;

      @media (max-width: 425px) {
        display: unset;
      }
    }
  }
`;

const Nav = ({ children }) => {
  const { y: scrollYPosition } = useWindowScroll();

  return (
    <StyledNav className={scrollYPosition > 0 ? 'is-sticky' : null}>
      {children}
    </StyledNav>
  );
};

export default Nav;
