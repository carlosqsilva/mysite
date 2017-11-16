import React, { Component } from 'react'
import { previous, play, pause, next, soundcloud } from './assets'

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
    this.audio = null
    this.song = null
    this.songs = null
    this.constrols = "mediaSession" in navigator

    this.loadPlaylist = this.loadPlaylist.bind(this)
    this.play = this.play.bind(this)
    this.playNext = this.playNext.bind(this)
    this.playPrevious = this.playPrevious.bind(this)
    this.toggle = this.toggle.bind(this)
    this.isPlaying = this.isPlaying.bind(this)
    this.shouldPlay = this.shouldPlay.bind(this)
  }

  componentDidMount() {
    this.audio = new Audio()
    this.audio.crossOrigin = 'anonymous'  
    this.loadPlaylist(() => this.shouldPlay())

    if (this.constrols) {
      navigator.mediaSession.playbackState = "Carregando media..."
      navigator.mediaSession.setActionHandler('previoustrack', this.playPrevious)
      navigator.mediaSession.setActionHandler('play', this.toggle)
      navigator.mediaSession.setActionHandler('pause', this.toggle)
      navigator.mediaSession.setActionHandler('nexttrack', this.playNext)
    }

    this.audio.addEventListener("ended", this.playNext)
    this.audio.addEventListener("pause", this.isPlaying)    
    this.audio.addEventListener("play", this.isPlaying)
  }

  async shouldPlay() {
    // Conditions
    let battery = false
    let memory = false
    let connection = false

    // don play if battery is charging or bellow 25%
    if ("getBattery" in navigator) {
      const batt = await navigator.getBattety()
      if (!batt.charging && batt.level < 0.25) {
        battery = true
      }
    }

    // dont play if memory device is bellow 1Gb
    if ("deviceMemory" in navigator) {
      if (navigator.deviceMemory < 1) {
        memory = true
      }
    }

    // dont play if network is limited
    if ("connection" in navigator) {
      if (navigator.connection.type === "cellular") {
        connection = true
      }
    }

    if (battery || memory || connection) {
      return null
    }
    this.play()
  }

  loadPlaylist(callBack = null) {
    let url = `https://api.soundcloud.com/resolve.json?url=${this.playlist}&client_id=${this.client_id}`
    const _this = this

    fetch(url).then(resp => resp.json())
      .then(data => {

        _this.songs = data.tracks.map(track => {
          return {
            title: track.title,
            titleUrl: track.permalink_url,
            user: track.user.username,
            userUrl: track.user.permalink_url,
            artwork: track.artwork_url,
            stream: track.stream_url
          }
        })

        if (callBack) {
          callBack()
        }
      })
  }

  play(song = null) {

    if (song === null) {
      song = Math.floor(Math.random() * this.songs.length)
    }

    let currentSong = this.songs[song]
    
    if (currentSong.stream) {
      this.audio.src = `${currentSong.stream}?client_id=${this.client_id}`
    }
    
    if (this.constrols) {
      /* eslint-disable */
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentSong.title,
        artist: currentSong.user,
        album: currentSong.title,
        artwork: [
          { src: currentSong.artwork, sizes: '100x100', type: 'image/png' },
        ]
      })
      /* eslint-enable */
    } else {
      this.setState({
        titleUrl: currentSong.titleUrl,
        title: currentSong.title,
        userUrl: currentSong.userUrl,
        user: currentSong.user,
      })
    }
    
    this.audio.play()
    this.song = song
  }

  playNext() {
    let nextSong = (this.song !== this.songs.length - 1) ? this.song + 1 : 0;
    this.play(nextSong)
  }

  playPrevious() {
    let previousSong = (this.song !== 0) ? this.song - 1 : this.songs.length - 1;
    this.play(previousSong)
  }

  toggle() {
    if (this.audio.paused) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
  }

  isPlaying() {
    this.setState({
      isPlaying: !this.audio.paused
    })
  }

  render() {
    if (!this.constrols) {
      return (
        <div className="playerWrapper">
          <div className="playerButtons">
            <button onClick={this.playPrevious} ><img src={previous} alt="" /></button>
            <button onClick={this.toggle} ><img src={this.state.isPlaying ? pause : play} alt="" /></button>
            <button onClick={this.playNext} ><img src={next} alt="" /></button>
          </div>
          <div className="playerInfo">
            <a href="https://soundcloud.com" >
              <img src={soundcloud} alt="" /> SOUNDCLOUD -
            </a>
            <a href={this.state.titleUrl}>{this.state.title}{" "}</a>
            by
            <a href={this.state.userUrl}>{" "}{this.state.user}</a>
          </div>
        </div>
      )
    }
    return null
  }
}

export default Player