import React from 'react';
import { Screen } from '../../icons/components/play';
import './full-screen.css'

function FullScreen (props) {
    return (
        <div className="FullScreen" onClick={props.handleFullScreen}>
            <Screen size={25} color="white"></Screen>
        </div>
    )
}

export default FullScreen;