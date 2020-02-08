import Prism from 'prismjs';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react';

import snippetsPath from 'SNIPPETS.md';

import 'prism-themes/themes/prism-shades-of-purple.css';

const StyledMarkdown = styled.div`
  margin: auto;

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    margin-top: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  }

  h1 {
    margin-top: 6rem;

    &::before {
      content: '📝'; // FIXME: find a better looking emoji
      margin-right: 1ch;
    }
  }
`;

const Markdown = () => {
  const [snippets, setSnippets] = useState(null);

  useEffect(() => {
    (async () => {
      const snippets = await fetch(snippetsPath);
      const text = await snippets.text();
      setSnippets(text);
      Prism.highlightAll();
    })();
  }, []);

  return (
    <StyledMarkdown>
      <ReactMarkdown source={snippets} />
    </StyledMarkdown>
  );
};

export default Markdown;
