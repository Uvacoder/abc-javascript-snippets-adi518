import styled from 'styled-components';

const StyledSocial = styled.div`
  z-index: 1;
  display: grid;
  grid-gap: 0.5rem;
  margin-left: auto;
  grid-auto-flow: column;
`;

export const SocialIcon = styled.div`
  opacity: 0.5;
  transition: opacity 0.5s;

  a {
    font-size: 0;
    display: block;
  }

  svg {
    width: 2rem;
    fill: var(--color-foreground);
  }

  &:hover {
    opacity: 1;
  }
`;

export default StyledSocial;
