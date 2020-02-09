import React from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';

import Button from 'components/Button';

import pjson from '../../package.json';

const StyledGetStarted = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-top: 3rem;
  text-align: center;
  flex-direction: column;
  text-transform: uppercase;
`;

const Buttons = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;

  @media (max-width: 425px) {
    grid-gap: 0;
  }
`;

const StyledGitHubStar = styled.div`
  font-size: 0;
  margin-top: 2rem;
  letter-spacing: 0.05rem;
  transform: translateY(5px);

  @media (max-width: 425px) {
    position: absolute;
    margin-top: 0;
    left: 1rem;
    top: 1rem;
  }
`;

const GitHubStar = () => (
  <StyledGitHubStar>
    <a
      data-size="large"
      data-show-count="true"
      className="github-button"
      href={pjson.repository.url}
      aria-label="Star JSsnippets/JavaScript-snippets on GitHub"
    >
      Star
    </a>
  </StyledGitHubStar>
);

const StyledGitHubButton = styled(Button)`
  @media (max-width: 425px) {
    display: none;
  }
`;

const GitHubButton = () => (
  <a target="_blank" rel="noopener noreferrer" href={pjson.repository.url}>
    <StyledGitHubButton>GitHub</StyledGitHubButton>
  </a>
);

const GetStarted = () => (
  <StyledGetStarted>
    <Buttons>
      <Scroll.Link to="Page-Markdown" smooth>
        <Button>Get started</Button>
      </Scroll.Link>
      <GitHubButton />
    </Buttons>
    <GitHubStar />
  </StyledGetStarted>
);

export default GetStarted;
