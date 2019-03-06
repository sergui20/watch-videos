import React from 'react';
import './controls.css'

function Controls (props) {
    return (
        <div className="Controls">
            {props.children}
        </div>
    )
}

export default Controls;