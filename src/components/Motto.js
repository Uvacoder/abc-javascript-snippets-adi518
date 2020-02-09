import cx from 'classnames';
import { useHoverDirty } from 'react-use';
import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Emoji from 'components/Emoji';

const StyledMotto = styled.div`
  cursor: default;
  margin-top: 4rem;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.5rem;
`;

const rotateEmoji = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(-720deg);
  }
`;

const Line = styled.div`
  line-height: 2;
  transition: font-size 0.5s;

  &::before {
    content: '< ';
  }

  &::after {
    content: ' />';
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  .emoji {
    display: inline-block;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-play-state: paused;
    animation-iteration-count: 1;
    animation-name: ${rotateEmoji};

    &--animate,
    &--reverse-animate {
      animation-play-state: running;
    }

    &--reverse-animate {
      animation-direction: reverse;
    }
  }
`;

const resetAnimation = element => {
  element.style.animation = 'none';
  element.offsetHeight; /* eslint-disable-line no-unused-expressions */
  element.style.animation = null;
};

const Motto = () => {
  const emojiRef = useRef(null);
  const isHovering = useHoverDirty(emojiRef);
  const [animationEnded, setAnimationEnded] = useState(false);

  if (emojiRef.current && isHovering && animationEnded)
    resetAnimation(emojiRef.current);

  return (
    <StyledMotto>
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <Line className="animated pulse infinite slow">
        Improve your JavaScript{' '}
        <Emoji
          ref={emojiRef}
          onAnimationStart={() => setAnimationEnded(false)}
          onAnimationEnd={() => setAnimationEnded(true)}
          className={cx('emoji', {
            'emoji--animate': isHovering,
            'emoji--reverse-animate': emojiRef.current && !isHovering
          })}
        >
          🦄
        </Emoji>
      </Line>
    </StyledMotto>
  );
};

export default Motto;
