import React from 'react';
import { videowebm, videomp4 } from "../assets"

const Home = () => {
  
  return (
    <section className="intro--wrapper">

      <video autoplay="true" loop>
        <source src={videowebm} type="video/webm" />
        <source src={videomp4} type="video/mp4" />
      </video>

      <div className="intro--container">

        <h1 className="intro--name">CARLOS SILVA</h1>

        <p className="intro--desc">I'm 24 years old, from Brazil. I have a bachelor degree in Production Engineering and getting a major in software engineering.</p>

        <div className="social">
          <a href="https://github.com/carlosqsilva" target="_blank"  rel="noopener noreferrer">Github</a>
          <a href="https://github.com/carlosqsilva" target="_blank"  rel="noopener noreferrer">Linkedin</a>
          <a href="mailto:carlosqsilva@outlook.com" target="_blank"  rel="noopener noreferrer">Email</a>
        </div>
      
      </div>
        
    </section>
  )
}

export default Home;