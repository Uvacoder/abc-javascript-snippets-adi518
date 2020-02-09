import styled from 'styled-components';

const Link = styled.a.attrs(() => ({
  rel: 'noopener noreferrer'
}))`
  color: var(--color-foreground);
  transition: background-color 0.5s;

  &:hover {
    color: white;
    background-color: var(--color-foreground);
  }
`;

export default Link;
