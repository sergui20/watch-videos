import React, { Component } from 'react';
import './video.css';

class Video extends Component {
    togglePlay() {
        if(this.props.pause) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }

    componentWillReceiveProps(nextProps) { // Se llama despues montarse el video (se re-renderiza) porque cambia el estado de pause
        if( nextProps.pause !== this.props.pause ) { // Se valida si en verdad se cambiaron las propiedades
            this.togglePlay()
        }
    }

    setRef = (el) => {
        this.video = el;
    }

    render() {
        const { handleLoadedMetadata, handleTimeUpdate, handleSeeking, handleSeeked, handleReady } = this.props;
        return ( // Finalmente renderiza el video con las propiedades ya actualizadas
            <div className="Video">
                <video src={this.props.src} autoPlay={this.props.autoplay} ref={this.setRef} onLoadedMetadata={handleLoadedMetadata} onTimeUpdate={handleTimeUpdate} onSeeking={handleSeeking} onSeeked={handleSeeked} onCanPlayThrough={handleReady}></video>
            </div>
        )
    }
}

export default Video;