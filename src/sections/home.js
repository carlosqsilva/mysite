import React, { Component } from 'react';
import styled from 'styled-components';
import { bgpattern, picture } from '../assets'
import { media, flipInX, tada } from '../utils'
import profile from './profile'

const Wrapper = styled.div`
  ${media.small`padding: 20px 20px;`}
  ${media.medium`padding: 20px 80px;`}
  ${media.full`padding: 40px 120px;`}
  with: 100vw;
  height: 100vh;
  background-color: #08AEEA;
  background-image: url(${bgpattern}), linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
  background-size: 20px, cover;
  display: flex;
  align-items: center;
`

const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  margin-top: -75px;
  margin-left: -75px;
  z-index:100;

  > img {
    border: 5px solid #fff;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    &:hover {
      animation-name: ${tada};
      animation-duration: 0.5s;
    }
  }
`

const Card = styled.div`
  position: relative;
  max-width: 1000px;
  padding: 80px 40px 40px 40px;
  background: #ffffff;
  box-shadow: 8px 8px rgba(0,0,0,0.15);
  backface-visibility: visible !important;
  animation: ${flipInX} 0.8s;
  > p {
    margin-bottom: 40px;
  }
  > a {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #282B2E;
    font-size: 0.6rem;    
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
  padding: 2px;
  margin: 0 10px;
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
    <Logo title={props.name} >
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
              <img src={social.logo} alt={social.title}/>
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
    return (
      <Wrapper>
        <Card>
          <Profile name={profile.name}/>
          {
            profile.description.map((text, index) => <p key={index}>{text}</p>)
          }
          <p>Say hello, or keep scrolling.</p>
          <SocialNetwork socials={profile.social} />
          <a href={profile.repo}>Source</a>
        </Card>
      </Wrapper>
    );
  }
}

export default Home;