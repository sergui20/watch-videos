import React from 'react';
import './search.css';

import { Prompt } from 'react-router';

function Search (props) {
    return (
        <form action="" className="Search" onSubmit={props.handleSubmit}> 
            <Prompt when={props.prompt} message="¿Estás seguro de querer abandonar la página?"></Prompt>
            <input ref={props.setRef} type="text" name="search" className="Search-input" placeholder="Buscar videos" value={props.value} onChange={props.handleChange}></input>
        </form> // Con defaultValue agregamos un valor por defecto a nuestro input y permite editar el input, con value agregamos valor por defecto, pero no podemos editar el input
    )
    
}

export default Search;
