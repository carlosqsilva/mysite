import { css, keyframes } from 'styled-components';

export const media = {
  full: (...args) => css`@media screen and (min-width: 1024px) { ${css(...args)} }`,
  medium: (...args) => css`@media screen and (min-width: 769px) {${css(...args)}}`,
  small: (...args) => css`@media screen and (max-width: 768px) {${css(...args)}}`
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
  0% {
    filter: opacity(0%);
    transform: scale(0.3) rotate(-30deg);
  }
  50% {
    filter: opacity(80%);
    transform: scale(1.4) rotate(30deg);
  }
  100% {
    filter: opacity(100%);
    transform: scale(1) rotate(360deg);
  }
`

export const rainbow = keyframes`
  0%, 100% {
    background-position: 0px 0px, 0% 0%;
  }
  50% {
    background-position: 0px 0px, 100% 100%;
  }
`