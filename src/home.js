import React, { Component } from 'react';
import styled from 'styled-components';
import { background, picture } from './assets'
import { media, flipInX, rotate } from './utils'
import profile from './profile'
import Player from './player'

const Wrapper = styled.div`
  ${media.small`padding: 20px 20px;`}
  ${media.medium`padding: 20px 80px;`}
  ${media.full`padding: 40px 120px;`}
  with: 100vw;
  height: 100vh;
  perspective: 1000px;
  background-color: #04A46D;
  background-image: url(${background});
  background-size: 180px;
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #282B2E;
    font-size: 0.6rem;    
  }
`

const CardWrapper = styled.div`
  position: relative;
`

const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  margin-top: -75px;
  margin-left: -75px;
  z-index:100;
  transition: all 0.3s ease-in-out;
  filter: drop-shadow(0px 0px 2px rgba(0,0,0,0.15));
  animation: ${rotate} 0.8s 0.2s;

  &:hover {
    transform: translateY(-10px);
    filter: drop-shadow(5px 10px 2px rgba(0,0,0,0.15));
  }

  > img {
    border: 5px solid #fff;
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
`

const Card = styled.div`
  transform-origin: top;
  transform: rotateX(-80deg);
  opacity: 0;
  perspective: 500px;
  max-width: 1000px;
  padding: 80px 40px 40px 40px;
  background: #ffffff;
  box-shadow: 8px 8px rgba(0,0,0,0.15);
  animation: ${flipInX} 0.4s 1s;
  animation-fill-mode: forwards;
  > p {
    margin-bottom: 40px;
  }
  
  ${media.small`font-size: 1rem;`}
  ${media.medium`font-size: 1.5rem;`}
  ${media.full`
    font-size: 1.7rem;
    padding: 80px 80px;`}
`

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    display: block;
    height: 1px;
    border-bottom: 1px dotted #282B2E;
    flex: 1;
  }
`

const Icon = styled.div`
  height: 40px;
  width: 40px;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    filter: drop-shadow(8px 8px rgba(0,0,0,0.15))
  }

  > a {
    text-decoration: none;
  }

  > a > img {
    height: 100%;
    width: 100%;
  }
`

const Profile = (props) => {
  return (
    <Logo>
      <img src={picture} alt="" />
    </Logo>
  )
}

const SocialNetwork = (props) => {
  return (
    <SocialWrapper>
      <span />
      {
        props.socials.map((social, i) =>
          <Icon key={i}>
            <a title={social.title} href={social.link}>
              <img src={social.logo} alt="" />
            </a>
          </Icon>
        )
      }
      <span />
    </SocialWrapper>
  )
}

class Home extends Component {
  render() {
    const {
      name,
      description,
      social,
      repo
    } = profile
    return (
      <Wrapper>
        <CardWrapper>
          <Profile name={name} />
          <Card>
            {description.map((text, index) => <p key={index}>{text}</p>)}
            <SocialNetwork socials={social} />
          </Card>
        </CardWrapper>
        <Player />
        <a href={repo}>Source</a>
      </Wrapper>
    );
  }
}

export default Home;