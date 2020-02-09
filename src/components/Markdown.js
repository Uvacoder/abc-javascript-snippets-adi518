import Prism from 'prismjs';
import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';
import ReactMarkdown from 'react-markdown';
import styled, { css } from 'styled-components';

import 'prism-themes/themes/prism-shades-of-purple.css';

const inlineStyle = css`
  h1:first-child {
    margin-top: 4rem;
  }
`;

export const StyledMarkdown = styled.div`
  width: 100%;

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    margin-top: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  }

  code[class*='language-'],
  pre[class*='language-'] {
    line-height: 40px;
  }

  ${({ inline }) => inline && inlineStyle}

  h1:not(:first-child) {
    margin-top: 6rem;
  }
`;

const Markdown = ({ pathToMarkdown, inline }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffectOnce(() => {
    (async () => {
      const markdown = await fetch(pathToMarkdown);
      const text = await markdown.text();
      setMarkdown(text);
      Prism.highlightAll();
    })();
  });

  return (
    <StyledMarkdown inline={inline}>
      <ReactMarkdown source={markdown} />
    </StyledMarkdown>
  );
};

export default Markdown;
