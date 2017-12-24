import React from "react"
import { screen1, screen2 } from "../assets"

const myprojects = {
  last:[
    {
      name: "CCharts Online",
      description: "Plot quality control charts online",
      link: "https://carlosqsilva.github.io/ccharts-online/",
      tech: "Reactjs Redux Chartjs",
      shot: screen1
    },
    {
      name: "Astronomy Picture of the Day",
      description: "Uses Nasa APOD api to display new Astronomy picture every day",
      link: "https://carlosqsilva.github.io/Astronomy-Picture-of-the-Day/",
      tech: "Vuejs Bulma",
      shot: screen2
    }
  ],
  other: [
    {
      name: "Pyspc",
      description: "Python library to plot quality control charts.",
      link: "https://github.com/carlosqsilva/pyspc"
    },
    {
      name: ".Dotfiles",
      description: "My dotfiles just for backup purposes",
      link: "https://github.com/carlosqsilva/dotfiles",
    },
    {
      name: "ytview",
      description: "Node cli tool to search and view youtube in mpv/vlc player",
      link: "https://github.com/carlosqsilva/ytview"
    },
    {
      name: "SpreadSheet-unlock",
      description: "Unlock SpreadSheets Protected by Passwords",
      link: "https://github.com/carlosqsilva/SpreadSheet-Unlock"
    },
    {
      name: "Youtube Music Player",
      description: "Electron App to listen youtube music videos in background",
      link: "https://github.com/carlosqsilva/Youtube-Music-Player"
    }
  ]

}

const Projects = () => {
  return (
    <section className="project--wrapper">

      <div>

        <h2 className="header">Recent Projects</h2>

        <div className="cardProject">
          {
            myprojects.last.map( (project, i) => 
              <div className="project" key={i}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" >
                  <img src={project.shot} alt="" />
                  <span className="project--title">{project.name}</span>
                  <span className="project--tech">{project.tech}</span>
                  <p>{project.description}</p>
                </a>
              </div>
            )
          }        
        </div>
        
        <h2 className="header">Other Projects</h2>
        
        <div className="otherProjects">
            {
              myprojects.other.map( (project, i) =>
                <a className="other" key={i} href={project.link} target="_blank" rel="noopener noreferrer" >
                  <span >{project.name}</span>
                  <p>{project.description}</p>
                </a>
              )
            }
        </div>

        <span className="author">Developed by: Carlos Silva 2017</span>
      </div>

    </section>
  )
}

export default Projects