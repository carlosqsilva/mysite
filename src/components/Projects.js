import React from "react"

const myprojects = {
  last:[
    {
      name: "CCharts Online",
      description: "Plot quality control charts online",
      link: "https://carlosqsilva.github.io/ccharts-online/",
      tech: ["Reactjs", "Redux", "Chartjs"]
    },
    {
      name: "Astronomy Picture of the Day",
      description: "Uses Nasa APOD api to display new Astronomy picture every day",
      link: "https://carlosqsilva.github.io/Astronomy-Picture-of-the-Day/",
      tech: ["Vuejs", "Bulma"]
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

        <h2 className="p1">Projetos Recentes</h2>

        <div className="cardProject">
          {
            myprojects.last.map( (project, i) => 
              <div className="project" key={i}>
                <a href={project.link} target="_blank">
                  <img src="http://via.placeholder.com/550x380" alt="" />
                  <span>{project.name}</span>
                </a>
                
                <p>{project.description}</p>
              </div>
            )
          }        
        </div>
        
        <h2 className="p2">Outros Projetos</h2>
        
        <div className="otherProjects">
            {
              myprojects.other.map( (project, i) =>
                <a className="other" key={i} href={project.link} target="_blank">
                  <span >{project.name}</span>
                  <p>{project.description}</p>
                </a>
              )
            }
        </div>
      
      </div>

    </section>
  )
}

export default Projects