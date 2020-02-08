import styled from 'styled-components';

const Button = styled.button`
  min-width: 10rem;
  font-size: 1.25rem;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  font-family: var(--font-family);
  transition: background-color 0.5s;
  color: var(--color-foreground);
  border: 0.125rem solid var(--color-foreground);

  &:hover {
    color: white;
    background-color: var(--color-foreground);
  }
`;

export default Button;
