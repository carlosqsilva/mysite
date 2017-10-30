import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bgpattern, github, linkedin, instagram} from '../assets'
import { media, flipInX } from '../utils'

const Wrapper = styled.div`
  with: 100vw;
  height: 100vh;
  background-color: #08AEEA;
  background-image: url(${bgpattern}), linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
  background-size: 20px, cover;
  display: flex;
  align-items: center;
   
  ${media.full`padding: 40px 120px;`}
  ${media.medium`padding: 20px 80px;`}
  ${media.small`padding: 20px 20px;`}
`

const Card = styled.div`
  padding: 80px 40px 40px 40px;
  background: #ffffff;
  box-shadow: 8px 8px rgba(0,0,0,0.15);
  backface-visibility: visible !important;
  animation-name: ${flipInX};
  animation-duration: 0.8s;
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

let info = [{
    title: "Github",
    link: "https://github.com/carlosqsilva",
    logo: github
  },
  {
    title: "Linkedin",
    link: "https://github.com/carlosqsilva",
    logo: linkedin
  },
  {
    title: "Instagram",
    link: "https://github.com/carlosqsilva",
    logo: instagram
  }
]

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
          <p>
            Graduado pela UEPA, com diploma em Engenharia de Produção, atualmente faço Pos Graduação em Engenharia de Software.
          </p>
          <p>
            Em meu tempo livre gosto de 
          </p>
          <p>
            Say hello, or keep scrolling.
          </p>
        <SocialNetwork socials={info} />
        </Card>
      </Wrapper>
    );
  }
}

export default Home;