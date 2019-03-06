import React from 'react';
import './timer.css'

function Timer (props) {
    return (
        <div className="Timer">
            <p>
                <span>{ props.formatTime(props.currentTime) } / { props.formatTime(props.duration) }</span>
            </p>
        </div>
    )
}

export default Timer;