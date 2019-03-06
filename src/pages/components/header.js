import React, { Component } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

import { withRouter } from 'react-router'; // Agrega propiedades y metodos a componentes que no formen parte de react-router.

class Header extends Component {
    handleClick = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <header className="Header">
                <img src={logo} width={250} />
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="is-selected"> {/* Exact porque no queremos que forme parte de las demas rutas. Es decir, queremos que cada ruta sea independiente*/}
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/videos" activeClassName="is-selected">
                                Videos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/v" activeClassName="is-selected">
                                Redirect
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" activeClassName="is-selected">
                                Contacto
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/perfil" activeClassName="is-selected">
                                Perfil
                            </NavLink>
                        </li>
                        <li>
                            <a onClick={this.handleClick}>
                                👈
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header)