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
    cursor: pointer;
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
    this.state = {
      isPlaying: false,
      title: "",
      titleUrl: "",
      user: "",
      userUrl: ""
    }
    this.song = null
    this.audio = null
    
    this.load = this.load.bind(this)
    this.playNext = this.playNext.bind(this)
    this.playPrevious = this.playPrevious.bind(this)
    this.toggle = this.toggle.bind(this)
  }
    
  componentDidMount() {
    this.audio = new Audio()
    this.audio.crossOrigin = 'anonymous'
    this.song = Math.floor(Math.random() * songs.length)

    this.load(this.song)
    this.audio.addEventListener("ended", this.playNext)
  }

  load(song = 0) {
    let url = `//api.soundcloud.com/resolve.json?url=${songs[song]}&client_id=${this.client_id}`
    
    const _this = this

    fetch(url).then(response => response.json())
      .then(data => {

        _this.setState({
          titleUrl: data.permalink_url,
          title: data.title,
          userUrl: data.user.permalink_url,
          user: data.user.username,
          isPlaying: true
        })

        if (data.stream_url) {
          _this.audio.src = `${data.stream_url}?client_id=${_this.client_id}`
        }

        _this.audio.play()
        _this.song = song
      })
  }

  playNext() {
    let nextSong = (this.song !== songs.length) ? this.song + 1 : 0
    this.load(nextSong)
  }

  playPrevious() {
    let previousSong = (this.song !== 0) ? this.song - 1 : songs.length - 1
    this.load(previousSong)
  }

  toggle() {
    if (this.audio.paused) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }))
  }

  render() {
    return (
      <Wrapper>
        <Buttons>
          <button onClick={this.playPrevious} ><img src={previous} alt=""/></button>
          <button onClick={this.toggle} ><img src={this.state.isPlaying ? pause : play} alt=""/></button>
          <button onClick={this.playNext} ><img src={next} alt=""/></button>
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