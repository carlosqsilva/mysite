import React from 'react'
import styled from 'styled-components'
import { media } from '../utils'
import { cogs } from '../assets'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #08AEEA;
  background-image: url(${cogs}), linear-gradient(180deg, #08AEEA 0%, #E08282 100%);
  background-size: 300px, cover;
  display: flex;
  align-items: center;

  ${media.full`padding: 40px 120px;`}
  ${media.medium`padding: 20px 80px;`}
  ${media.small`padding: 20px 40px;`}
`

const Card = styled.div`
  padding: 80px 40px 40px 40px;
  background: #ffffff;
  box-shadow: 8px 8px rgba(0,0,0,0.15);
  border-left: 40px solid #eee;
`

const Bio = (props) => {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  )
}

export default Bio