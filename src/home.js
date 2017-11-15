import React from 'react';
import styled from 'styled-components';
import { background, picture } from './assets'
import { media, flipInX, rotate, rainbow } from './utils'
import profile from './profile'
import Player from './player'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px 10px 20px 10px;
  perspective: 1000px;
  background-image: url(${background}), linear-gradient(124deg, #A13939, #E75151, #FCC88A, #C2C57F);
  background-size: 200px, 800%;
  animation: ${rainbow} 9s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.medium`padding: 20px 80px;`}
  ${media.full`padding: 20px 100px;`}
`

const CardWrapper = styled.div`
  position: relative;
`

const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  z-index:100;
  transition: all 0.1s ease-in-out;
  filter: drop-shadow(0px 0px 2px rgba(0,0,0,0.15));
  animation: ${rotate} 1.4s 0.2s;

  &:hover {
    transform: translateY(-10px);
    filter: drop-shadow(5px 10px 2px rgba(0,0,0,0.15));
  }

  > img {
    border: 5px solid #fff;
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }

  ${media.medium`
    margin-top: -70px;
    margin-left: -70px;
    > img {
      height: 140px;
      width: 140px;
    }
  `}

  ${media.full`
    margin-top: -75px;
    margin-left: -75px;
    > img {
      height: 150px;
      width: 150px;
    }
  `}
`

const Card = styled.div`
  transform-origin: top;
  transform: rotateX(-80deg);
  opacity: 0;
  perspective: 500px;
  max-width: 100%;
  font-size: 0.9rem;
  border-radius: 4px;
  padding: 75px 30px 15px 30px;
  background: #ffffff;
  box-shadow: 8px 8px rgba(0,0,0,0.25);
  animation: ${flipInX} 0.4s 1s;
  animation-fill-mode: forwards;
  > p {
    margin: 0;
    line-height: 1.6;
    margin-bottom: 15px;
    > span {
      font-weight: 700;
    }
  }
  
  ${media.medium`
    font-size: 1.5rem;
    max-width: 800px;
    padding: 90px 40px 50px 40px;
    p {
      margin-bottom: 30px;
    }
  `}

  ${media.full`
    font-size: 1.7rem;
    padding: 90px 80px 60px 80px;
    max-width: 1000px;
    p {
      margin-bottom: 40px;
    }
  `}
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
  height: 30px;
  width: 30px;
  margin: 0 10px;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    filter: drop-shadow(8px 8px rgba(0,0,0,0.15));
  }

  > a > img {
    height: 100%;
    width: 100%;
  }

  ${media.medium`
    height: 40px;
    width: 40px;
  `}
`

const Profile = () => {
  return (
    <Logo title="it's me Carlos">
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
            <a title={social.title} href={social.link} target="_blank" rel="noopener">
              <img src={social.logo} alt="" />
            </a>
          </Icon>
        )
      }
      <span />
    </SocialWrapper>
  )
}

const Home = () => {
  const {
    name,
    age,
    social
  } = profile

  return (
    <Wrapper>
      <CardWrapper>
        <Profile name={name} />
        <Card>
          <p>Olá, meu nome é <span>{name}</span>, tenho {age} anos e moro em Ananindeua, Pará.</p>
          <p>Sou graduado pela UEPA, com diploma em Engenharia de Produção, atualmente faço Pós-Graduação em Engenharia de Software.</p>
          <p>Em meu tempo livre gosto de desenvolver scripts em Python e aplicações Web com Reactjs.</p>
          <SocialNetwork socials={social} />
        </Card>
      </CardWrapper>
      <Player />
    </Wrapper>
  )
}

export default Home;