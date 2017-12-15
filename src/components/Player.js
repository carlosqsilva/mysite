import React, { Component } from 'react'
import { previous, play, pause, next } from '../assets'

const padZero = (num, size) => {
  let s = String(num);
  while (s.length < size) {
    s = `0${s}`;
  }
  return s;
};

const formatSeconds = (num) => {
  const minutes = padZero(Math.floor(num / 60), 2);
  const seconds = padZero(num % 60, 2);
  return `${minutes}:${seconds}`;
};

class Player extends Component {
  constructor(props) {
    super(props)

    this.loadPlaylist = this.loadPlaylist.bind(this)
    this.play = this.play.bind(this)
    this.playNext = this.playNext.bind(this)
    this.playPrevious = this.playPrevious.bind(this)
    this.toggle = this.toggle.bind(this)
    this.isPlaying = this.isPlaying.bind(this)
    this.onTimeUpdate = this.onTimeUpdate.bind(this)
    this.onLoadedMetaData = this.onLoadedMetaData.bind(this)
    this.shouldPlay = this.shouldPlay.bind(this)

    this.client_id = "x3d1i5dxXwTtUNJAy8djMDh7yYdxSZX0"
    this.playlist = "https://soundcloud.com/carlos-silva-527/sets/website"
    this.state = {
      isPlaying: false,
      title: "",
      titleUrl: "",
      user: "",
      userUrl: "",
      duration: 0,
      currentTime: 0,
    }
    this.audio = null
    this.song = null
    this.songs = null
    this.controls = "mediaSession" in navigator
  }

  componentDidMount() {
    this.audio = new Audio()
    this.audio.crossOrigin = 'anonymous'  
    this.loadPlaylist()

    if (this.controls) {
      navigator.mediaSession.playbackState = "Carregando media..."
      navigator.mediaSession.setActionHandler('previoustrack', this.playPrevious)
      navigator.mediaSession.setActionHandler('play', this.toggle)
      navigator.mediaSession.setActionHandler('pause', this.toggle)
      navigator.mediaSession.setActionHandler('nexttrack', this.playNext)
    }
    this.audio.addEventListener("timeupdate", this.onTimeUpdate)
    this.audio.addEventListener("loadedmetadata", this.onLoadedMetaData)
    this.audio.addEventListener("ended", this.playNext)
    this.audio.addEventListener("pause", this.isPlaying)    
    this.audio.addEventListener("play", this.isPlaying)
  }
  componentWillUnmount() {
    this.audio.removeEventListener("timeupdate", this.onTimeUpdate)
    this.audio.removeEventListener("loadedmetadata", this.onLoadedMetaData)
    this.audio.removeEventListener("ended", this.playNext)
    this.audio.removeEventListener("pause", this.isPlaying)    
    this.audio.removeEventListener("play", this.isPlaying)
  }

  async shouldPlay() {
    // Conditions
    let battery = false
    let memory = false
    let connection = false

    // dont play if battery is not charging and bellow 20%
    if ("getBattery" in navigator) {
      const batt = await navigator.getBattery()
      if (!batt.charging && batt.level < 0.2) {
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
    
    return battery || memory || connection
  }

  loadPlaylist() {
    let url = `https://api.soundcloud.com/resolve.json?url=${this.playlist}&client_id=${this.client_id}`
    const _this = this

    fetch(url)
    .then(resp => resp.json())
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
    })
    .then( _ => this.shouldPlay())
    .then( condition => {
      if (!condition) {
        this.play()
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
    
    if (this.controls) {
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
        artwork: currentSong.artwork
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
      isPlaying: !this.audio.paused,
    })
  }

  onLoadedMetaData() {
    this.setState({
      duration: Math.floor(this.audio.duration)
    })
  }

  onTimeUpdate () {
    this.setState({
      currentTime: Math.floor(this.audio.currentTime)
    })
  }

  render() {
    const { currentTime, duration} = this.state
    const width = `${(currentTime / duration) * 100}%`

    return (
      <div className="player--wrapper">
        <div className="player--inner_wrapper">

          <div className="player--song" >
            <img className="player--artwork" src={this.state.artwork} alt="" />
            <div className="player--main" >
              <a className="player--music" target="_blank" href={this.state.titleUrl}>{this.state.title}{" "}</a>
              <a className="player--artist" target="_blank" href={this.state.userUrl}>{" "}{this.state.user}</a>
            </div>
          </div>

          <div className="player--buttons">
            <button onClick={this.playPrevious} ><img src={previous} alt="" /></button>
            <button onClick={this.toggle} ><img src={this.state.isPlaying ? pause : play} alt="" /></button>
            <button onClick={this.playNext} ><img src={next} alt="" /></button>
          </div>

          <div className="player--slider">
            <div className="player--slider_bar" >
              <div className="player--slider_fill" style={{ width }} ></div>
            </div>
          </div>

          <div className="player--time" >
            <div className="player--time_wrapper">
              {formatSeconds(this.state.currentTime)}
              <div className="player--time_separator">
                /
              </div>
              {formatSeconds(this.state.duration)}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Player