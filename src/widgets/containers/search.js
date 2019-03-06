import React, { Component } from 'react';
import Search from '../components/search';

import { connect } from 'react-redux';

// Action function creator
import { searchAsyncEntities } from '../../actions/index';

class SearchContainer extends Component {
    state = {
        value: '',
        prompt: false
    }

    handleSubmit = (ev) => {
        ev.preventDefault(); // Para prevenir la accion por defecto, que es la de refrescar la pagina
        this.props.searchAsyncEntities(this.input.value) // Accion que viene en las propiedades gracias a mapDispatchToProps
    }

    getInput = (input) => {
        // console.log(input);
        this.input = input;
    }

    changeInput = (ev) => {
        this.setState({
            value: ev.target.value.replace(' ', '-'),
            prompt: !!(ev.target.value.length)
        })
    }

    render() {
        return (
            <Search handleSubmit={this.handleSubmit} setRef={this.getInput} handleChange={this.changeInput} value={this.state.value} prompt={this.state.prompt}></Search> //setRef es una variable donde almacenamos el elemento HTML input, y le pasamos ese valor a una funcion getInput() para obtener el valor de ese input
        )
    }
}

const mapDispatchToProps = {
    searchAsyncEntities
}

export default connect(null, mapDispatchToProps)(SearchContainer); // Aqui como no requiero de datos de mi store, no declaro la funcion mapStateToProps, y simplemente conecto mi SearchContainer con el store general de la aplicacion