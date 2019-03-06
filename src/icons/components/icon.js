import React from 'react';

function Icon (props) {
    const { color, size } = props
    // props.children, permite que los elementos que se creen dentro del componente, aparezcan en el lugar donde se ubica esa propiedad
    return (
        <svg fill={color} width={size} height={size} viewBox="0 0 32 32">
            {props.children} 
        </svg>
    )
}

export default Icon;