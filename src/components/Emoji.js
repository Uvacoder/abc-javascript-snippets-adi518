import React from 'react';

const Emoji = ({ children, ariaLabel = 'Emoji', ...restProps }) => (
  <span role="img" aria-label={ariaLabel} {...restProps}>
    {children}
  </span>
);

export const InlineEmoji = ({ children }) => <Emoji>&nbsp;{children}</Emoji>;

export default Emoji;
