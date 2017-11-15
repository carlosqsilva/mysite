import React from 'react';
import { github, linkedin, instagram, mail, picture } from './assets';
import Player from './player'

const profile = {
  name: "Carlos Silva",
  age: 23,
  social: [
    {
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
      link: "https://www.instagram.com/carloshenj/",
      logo: instagram
    },
    {
      title: "Quer Conversar?",
      link: "mailto:carlosqsilva@outlook.com",
      logo: mail
    }
  ]
}

const Profile = () => {
  return (
    <div className="profilePicture" title="it's me Carlos">
      <img src={picture} alt="" />
    </div>
  )
}

const SocialNetwork = (props) => {
  return (
    <div className="socialWrapper">
      <span />
      {
        props.socials.map((social, i) =>
          <div className="socialIcons" key={i}>
            <a title={social.title} href={social.link} target="_blank" rel="noopener">
              <img src={social.logo} alt="" />
            </a>
          </div>
        )
      }
      <span />
    </div>
  )
}

const Home = () => {
  const {
    name,
    age,
    social
  } = profile

  return (
    <div className="homeWrapper">
      <div className="cardWrapper">
        <Profile />
        <div className="card">
          <p>Olá, meu nome é <span>{name}</span>, tenho {age} anos e moro em Ananindeua, Pará.</p>
          <p>Sou graduado pela UEPA, com diploma em Engenharia de Produção, atualmente faço Pós-Graduação em Engenharia de Software.</p>
          <p>Em meu tempo livre gosto de desenvolver scripts em Python e aplicações Web com Reactjs.</p>
          <SocialNetwork socials={social} />
        </div>
      </div>
      <Player />
    </div>
  )
}

export default Home;