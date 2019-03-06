import React from 'react';
import { VolumeIcon, Mute } from '../../icons/components/play';
import './volume.css'

function Volume (props) {
    debugger;
    return (
        <div className="Volume">
            <button onClick={props.muteVideo}>
                {
                    props.value == 0 ? 
                    <Mute color="white" size={25}></Mute>
                    :
                    <VolumeIcon color="white" size={25}></VolumeIcon>
                }
            </button>
            <div className="Volume-range">
                <input type="range" min={0} max={1} step={.05} onChange={props.handleVolume} value={props.value}></input>
            </div>
        </div>
    )
}

export default Volume