import { css, keyframes } from 'styled-components';

export const media = {
  full: (...args) => css`@media screen and (min-width: 1201px) { ${css(...args)} }`,
  medium: (...args) => css`@media screen and (max-width: 1200px) and (min-width: 601px) {${css(...args)}}`,
  small: (...args) => css`@media screen and (max-width: 600px) {${css(...args)}}`
}

export const flipInX = keyframes`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`