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

class Player extends Component {
  constructor(props) {
    super(props)
    this.client_id = "x3d1i5dxXwTtUNJAy8djMDh7yYdxSZX0"
    this.playlist = "https://soundcloud.com/carlos-silva-527/sets/website"
    this.state = {
      isPlaying: false,
      title: "",
      titleUrl: "",
      user: "",
      userUrl: ""
    }
    this.song = null
    this.songs = null
    this.audio = null
    
    this.loadPlaylist = this.loadPlaylist.bind(this)
    this.play = this.play.bind(this)
    this.playNext = this.playNext.bind(this)
    this.playPrevious = this.playPrevious.bind(this)
    this.toggle = this.toggle.bind(this)
  }
    
  componentDidMount() {
    this.audio = new Audio()
    this.audio.crossOrigin = 'anonymous'
    
    this.loadPlaylist(() => this.play())
    this.audio.addEventListener("ended", this.playNext)
  }

  loadPlaylist(callBack = null) {
    let url = `//api.soundcloud.com/resolve.json?url=${this.playlist}&client_id=${this.client_id}`
    const _this = this

    fetch(url).then(resp => resp.json())
      .then( data => {
        
        _this.songs = data.tracks.map( track => {
          return {
            title: track.title,
            titleUrl: track.permalink_url,
            user: track.user.username,
            userUrl: track.user.permalink_url,
            stream: track.stream_url
          }
        })

        if (callBack) {
          callBack()
        }
      })
  }

  play(song = null) {

    if (!song) {
      song = Math.floor(Math.random() * this.songs.length)
    } 
    
    let currentSong = this.songs[song]
    this.setState({
      titleUrl: currentSong.titleUrl,
      title: currentSong.title,
      userUrl: currentSong.userUrl,
      user: currentSong.user,
      isPlaying: true
    })

    if (currentSong.stream) {
      this.audio.src = `${currentSong.stream}?client_id=${this.client_id}`
    }

    this.audio.play()
    this.song = song
  }

  playNext() {
    let nextSong = (this.song !== this.songs.length) ? this.song + 1 : 0
    this.play(nextSong)
  }

  playPrevious() {
    let previousSong = (this.song !== 0) ? this.song - 1 : this.songs.length - 1
    this.play(previousSong)
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