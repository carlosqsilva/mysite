import React from 'react'
import styled from 'styled-components'
import { media } from '../utils'

const Wrapper = styled.div`
  width: 100vw;
  padding: 20px;
  text-align: center;
  background: #282B2E;
  color: #ffffff;
  font-size: 0.9rem;
  > a {
    color: #E08282;
    cursor: pointer;
  }

  ${media.small`padding: 10px`}
`

const Footer = (props) => {
  return (
    <Wrapper>
      Made by Carlos Silva with 
      <a > Reactjs</a> and 
      <a > Styled-Components</a>, check on
      <a > Github</a>.
    </Wrapper>
  )
}

export default Footer