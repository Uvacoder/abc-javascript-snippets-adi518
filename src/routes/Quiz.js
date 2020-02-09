import React from 'react';
import styled from 'styled-components';

import { StyledPage } from 'components/Page';
import Markdown, { StyledMarkdown } from 'components/Markdown';

import questionPath from 'markdowns/question.md';

const Page = styled(StyledPage)`
  // background-color: gainsboro;
  // background-color: var(--color-foreground-alternative);
  background-color: var(--color-foreground);
`;

const StyledQuiz = styled.div`
  width: 100%;
  margin: auto;
  flex-grow: 1;
  display: flex;
  max-width: 50rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  flex-direction: column;
  background-color: white;
  // background-color: gold;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

  ${StyledMarkdown} {
    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
      box-shadow: none;
    }
  }
`;

const Answer = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 0.125rem;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid #dcdcdc;
  color: var(--color-foreground);

  &::before {
    content: '';
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-top: 0.25rem;
    margin-left: 0.25rem;
    margin-right: 1.25rem;
    margin-bottom: 0.25rem;
    display: inline-block;
    background-color: gainsboro;
  }
`;

const Quiz = () => (
  <Page>
    <StyledQuiz>
      <Markdown pathToMarkdown={questionPath} />
      <Answer>The first h1 DOM element</Answer>
      <Answer>The last h1 DOM element</Answer>
      <Answer>Throw TypeError: Illegal invocation</Answer>
      <Answer>NodeList with all the h1 DOM elements</Answer>
    </StyledQuiz>
  </Page>
);

export default Quiz;
