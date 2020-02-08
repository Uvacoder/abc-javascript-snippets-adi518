import React from 'react';
// import styled from 'styled-components';

import { SocialIcon } from './Social';

// const StyledFacebookAnchor = styled(SocialIcon)``;

const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const FacebookAnchor = () => (
  <SocialIcon>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/snippetsJS"
    >
      <FacebookLogo />
    </a>
  </SocialIcon>
);

export default FacebookAnchor;
