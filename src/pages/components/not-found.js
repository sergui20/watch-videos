import React, { PureComponent } from 'react';
import './generic-page.css';

class NotFound extends PureComponent {
    backwardClick = () => { // Dentro de los componentes que renderizamos por medio de React-Router, encontramos en sus props metodos como history. Y este cuenta a su vez con propiedades y metodos
        this.props.history.goBack(); //goBack navega hacia la pagina anterior
        // this.props.history.go(-2); //go navega de acuerdo al valor que le pongamos como metodo
    }

    forwardClick = () => {
        this.props.history.goForward();
    }

    randomVideo = () => {
        const random = Math.round(Math.random() * (10 - 1) + 1)
        this.props.history.push(`/videos?id=${random}`)
    }

    render() {
        return (
            <div className="Page NotFound">
                <h1>404 Not Found</h1>
                <h3 className="SadFace">:(</h3>
                <h2>No hemos encontrado la pagina que buscabas</h2>
                <button className="Button" onClick={this.forwardClick}>Ir a la siguiente pagina 👉</button>
                <button className="Button" onClick={this.backwardClick}>Ir a la anterior pagina 👈</button>
                <button className="Button" onClick={this.randomVideo}>Video Random</button>
            </div>
        )
    }
}

export default NotFound;