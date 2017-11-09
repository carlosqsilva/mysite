import { github, linkedin, instagram, mail } from './assets'

const age = (date = "1993-11-27") => {
  let birthday = new Date(date)
  let today = new Date()
  let age = today.getFullYear() - birthday.getFullYear()
  if (today < new Date(today.getFullYear(), birthday.getMonth() + 1, birthday.getDay())) {
    age--
  }
  return age
}

const profile = {
  name: "Carlos Silva",
  age: age(),
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
      link: "https://github.com/carlosqsilva",
      logo: instagram
    },
    {
      title: "Quer Conversar?",
      link: "mailto:carlosqsilva@outlook.com",
      logo: mail
    }
  ]
}

export default profile