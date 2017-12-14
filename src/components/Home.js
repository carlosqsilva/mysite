import React from 'react';
import { github, linkedin, instagram, mail, picture } from '../assets';

const profile = {
  name: "Carlos Silva",
  age: 24,
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

const Home = () => {
  const {
    name,
    age,
    social
  } = profile

  return (
    <section className="homeWrapper">

      <div className="cardWrapper">
              
        <img  className="profilePicture" src={picture} alt="" />
        
        <div className="card">

          <p>Olá, sou <span>{name}</span>, tenho {age} anos e moro em Ananindeua, Pará.</p>
          <p>Sou formado em Engenharia de Produção e atualmente faço Pós-Graduação em Engenharia de Software.</p>
          <div className="socialWrapper">
            <span />
            {
              social.map((social, i) =>
                <a className="socialIcons" href={social.link} key={i} target="_blank"  rel="noopener">
                  <img src={social.logo} alt={social.title}/>
                </a>
              )
            }
            <span />
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Home;