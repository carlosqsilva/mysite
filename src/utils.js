import { css, keyframes } from 'styled-components';

export const media = {
  full: (...args) => css`@media screen and (min-width: 1201px) { ${css(...args)} }`,
  medium: (...args) => css`@media screen and (max-width: 1200px) and (min-width: 601px) {${css(...args)}}`,
  small: (...args) => css`@media screen and (max-width: 600px) {${css(...args)}}`
}

export const flipInX = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(-80deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
`

export const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`