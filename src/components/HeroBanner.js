import styled from 'styled-components';

const HeroHeader = styled.div`
  display: flex;
  min-height: 100vh;
  padding-top: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 4rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: gainsboro;
  color: var(--color-foreground);
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.05);
`;

export default HeroHeader;
