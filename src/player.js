import React, { Component } from 'react'
import styled from 'styled-components'
import { previous, play, pause, next, soundcloud } from './assets'

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  color: #fff;
  text-align: center;
  transform: translateX(-50%);
`
const Buttons = styled.div`
  display: block;
  margin-botton: 10px;
  > button {
    border: none;
    background: none;
    outline: none;
    margin: 0 5px;
    padding: 0;
  }
  > button > img {
    width: 20px;
    height:20px;
  }
`

const Info = styled.div`
  > a {
    text-decoration: none;
    text-transfrom: capitalize;
    color: #fff;
    &:first-child {
      font-weight: 700;
    }
  }
  > a > img {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 4px;
    width: 25px;
    height: 25px;
  }
`

let songs = [
  'https://soundcloud.com/ohbeclever/river',
  'https://soundcloud.com/ohbeclever/next-to-you-album-version',
  'https://soundcloud.com/thebrinksmusic/temporary-love',
  'https://soundcloud.com/thebrinksmusic/hide-your-love',
  'https://soundcloud.com/sanholobeats/light',
  'https://soundcloud.com/whethan/savage',
  'https://soundcloud.com/xylo100/alive',
  'https://soundcloud.com/xylo100/afterlife',
  'https://soundcloud.com/xylo100/iswfyou',
  'https://soundcloud.com/veritemusic/somebody-else',
  'https://soundcloud.com/veritemusic/underdressed',
  'https://soundcloud.com/veritemusic/weekend1',
  'https://soundcloud.com/mchnheart/stonecold',
  'https://soundcloud.com/marshmellomusic/alone',
  'https://soundcloud.com/marshmellomusic/movingon',
  'https://soundcloud.com/anamanaguchi/wheelie'
]

class Player extends Component {
  constructor(props) {
    super(props)
    this.client_id = "x3d1i5dxXwTtUNJAy8djMDh7yYdxSZX0"
    this.audio = new Audio()
    this.audio.crossOrigin = 'anonymous'
    this.state = {
      isPlaying: false,
      title: "",
      titleUrl: "",
      user: "",
      userUrl: ""
    }
    this.song = Math.floor(Math.random() * songs.length)
    this.songPrev = null
    this.songNext = null
  }
    
  componentDidMount() {
    this.songPrev = (this.song !== 0) ? this.song - 1 : songs.length - 1
    this.songPrev = (this.song !== songs.length) ? this.song + 1 : 0

    const _this = this
    let url = `//api.soundcloud.com/resolve.json?url=${songs[this.song]}&client_id=${this.client_id}`

    fetch(url).then( response => response.json())
      .then( data => {

        _this.setState({
          titleUrl: data.permalink_url,
          title: data.title,
          userUrl: data.user.permalink_url,
          user: data.user.username
        })

        if (data.stream_url) {
          _this.audio.src = `${data.stream_url}?client_id=${_this.client_id}`
        }
      })
    this.audio.play()
  }

  render() {
    return (
      <Wrapper>
        <Buttons>
          <button><img src={previous} alt=""/></button>
          <button><img src={this.state.isPlaying ? play : pause} alt=""/></button>
          <button><img src={next} alt=""/></button>
        </Buttons>
        <Info>
          <a href="https://soundcloud.com" >
            <img src={soundcloud} alt=""/> SOUNDCLOUD - 
          </a>
          <a href={this.state.titleUrl}>{this.state.title}{" "}</a>
          by
          <a href={this.state.userUrl}>{" "}{this.state.user}</a>
        </Info>
      </Wrapper>
    )
  }
}

export default Player