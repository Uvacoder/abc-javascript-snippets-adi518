import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  min-width: 10rem;
  font-size: 1.25rem;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  color: var(--color-foreground);
  font-family: var(--font-family);
  transition: background-color 0.5s;
  border: 0.125rem solid var(--color-foreground);

  &:focus {
    box-shadow: 0 0 0.25rem;
  }

  &:hover {
    color: white;
    background-color: var(--color-foreground);
  }
`;

export default Button;
