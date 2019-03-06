import React from 'react';
import './play-pause.js';
import { Play, Pause, Volume, Screen } from '../../icons/components/play';
import './play-pause.css'

function PlayPause (props) { //props.pause es true antes de montar el componente en la pagina, luego de montarlo se vuelve false
    return (
        <div className="PlayPause">
            {
                props.pause ?
                    <button onClick={props.handleClick}>
                        <Play size={25} color="white"></Play>
                    </button>
                :
                <button onClick={props.handleClick}>
                    <Pause size={25} color="white"></Pause>
                </button>
            }
        </div>
    )
}

export default PlayPause;