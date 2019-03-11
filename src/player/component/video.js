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

    componentWillReceiveProps(nextProps) {
        if( nextProps.pause !== this.props.pause ) {
            this.togglePlay()
        }
    }

    setRef = (el) => {
        this.video = el;
    }

    render() {
        const { handleLoadedMetadata, handleTimeUpdate, handleSeeking, handleSeeked, handleReady } = this.props;
        return (
            <div className="Video">
                <video src={this.props.src} autoPlay={this.props.autoplay} ref={this.setRef} onLoadedMetadata={handleLoadedMetadata} onTimeUpdate={handleTimeUpdate} onSeeking={handleSeeking} onSeeked={handleSeeked} onCanPlayThrough={handleReady}></video>
            </div>
        )
    }
}

export default Video;
