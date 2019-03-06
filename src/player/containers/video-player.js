import React, { Component } from 'react';
import VideoPlayerLayout from '../component/video-player-layout';
import Video from '../component/video';
import Title from '../component/title';
import PlayPause from '../component/play-pause';
import Timer from '../component/timer';
import Controls from '../component/controls';
import ProgressBar from '../component/progress-bar';
import Spinner from '../component/spinner';
import Volume from '../component/volume';
import FullScreen from '../component/full-screen';

import { connect } from 'react-redux';
 
class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        lastVolume: 1, // Variable que guarda el volumen asignado anteriormente
        volume: 1 // Volumen en tiempo real, es decir, el volumen que controla el sonido.
    }

    toggleVideo = (ev) => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount() { // Funcion que se dispara cuando todo lo del render se ha montado
        this.setState({
            pause: !this.state.pause,
        })
    }

    handleLoadedMetadata = (ev) => {
        this.video = ev.target;
        this.setState({
            duration: this.video.duration
        });
    }

    handleTimeUpdate = (ev) => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    leftPad = (num) => {
        const pad = '00';
        return pad.substring(0, pad.length - num.length) + num;
    }
    
    formatTime = (secs) => {
        const minutes = parseInt(secs / 60, 10)
        const seconds = parseInt(secs % 60, 10)
    
        return `${minutes} : ${this.leftPad(seconds.toString())}`
    }

    handleProgress = (ev) => {
        this.video.currentTime = ev.target.value
    }

    handleSeeking = (ev) => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = (ev) => {
        this.setState({
            loading: false
        })
    }

    handleReady = (ev) => { // Se dispara cuando el video este listo para reproducirse
        this.setState({
            loading: false
        })
    }

    handleVolume = (ev) => {
        this.setState({
            lastVolume: ev.target.value,
            volume: ev.target.value
        })

        this.video.volume = ev.target.value;
    }

    muteVideo = (ev) => {
        if (this.state.volume > 0) {

            this.video.volume = 0;
            
            this.setState({
                volume: 0
            })
        } 
        
        if (this.state.volume === 0) {
            this.setState({
                volume: this.state.lastVolume
            })

            this.video.volume = this.state.lastVolume
        }
        // console.log(`Volumen video: ${this.video.volume}, Volumen anterior: ${this.state.lastVolume}`);
    }

    handleFullScreen = (ev) => {
        if (!document.webkitIsFullScreen) {
            this.player.webkitRequestFullscreen()
        } else {
            document.webkitExitFullscreen();
        }
    }

    setRef = (el) => {
        this.player = el
    }

    render() {
        return ( // Las propiedades del <Video> van a cambiar, pause se va a volver falso, al ocurrir esto se llama a la funcion componentWillReceiveProps, dentro del componente video
            <VideoPlayerLayout setRef={this.setRef}>
                <Title title={this.props.media.get('title')}></Title>
                <Controls>
                    <PlayPause handleClick={this.toggleVideo} pause={this.state.pause}></PlayPause>
                    <Timer duration={this.state.duration} currentTime={this.state.currentTime} leftPad={this.leftPad} formatTime={this.formatTime}></Timer>
                    <ProgressBar duration={this.state.duration} value={this.state.currentTime} handleProgress={this.handleProgress}></ProgressBar>
                    <Volume handleVolume={this.handleVolume} muteVideo={this.muteVideo} value={this.state.volume} lastVolume={this.state.lastVolume}></Volume>
                    <FullScreen handleFullScreen={this.handleFullScreen}></FullScreen>
                </Controls>
                <Spinner active={this.state.loading}></Spinner>
                <Video src={this.props.media.get('src')} autoplay={this.props.autoplay} pause={this.state.pause} handleLoadedMetadata={this.handleLoadedMetadata} handleTimeUpdate={this.handleTimeUpdate} handleSeeking={this.handleSeeking} handleSeeked={this.handleSeeked} handleReady={this.handleReady}></Video>
            </VideoPlayerLayout>
        )
    }
}

function mapStateToProps (state, props) {
    return {
        media: state.get('data').get('entities').get('media').get(props.id)
    }
}

export default connect(mapStateToProps)(VideoPlayer);