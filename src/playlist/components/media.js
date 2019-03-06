import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

// React-router
import { Link } from 'react-router-dom';

                                    // PureComponent pueden usarse para componentes que se tengan que actualizar multiples veces, en este caso nuestro Media lo require, asi no tenemos que validar la actualizacion y se optimiza nuestra app
class Media extends PureComponent { // Se puede utilizar React.Component o simplemente Component para componentes de estado, pero para componentes puros (componentes que tienen shouldComponentUpdate ya integrado) se usa PureComponent
    // constructor(props){ // Es un metodo llamado en el momento de la creacion de instancias. Se llama al principio cuando se carga nuestro componente en el DOM
    //     super(props) //Super llama al constructor de una clase padre, en este caso le pasamos los props de la clase Media
    //     // this.handleClick = this.handleClick.bind(this) // Aqui hacemos bind o enlazamos a Media para poder definir props, ya que solo se encuentran dentro de ella
    //     this.state = {
    //         author: props.author
    //     }
    // }

    // state = {
    //     author: 'Sergui Morejon'
    // }

    render() {
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return ( // onClick={this.handleClick} propiedad que tenia Media
           <Link to={{
               pathname: '/videos',
               search: `?id=${this.props.id}`,
               state: {
                   modal: true,
                   id: this.props.id
               }
           }}>
                <div className="Media" onClick={this.handleClick}>
                    <div className="Media-cover">
                        <img src={this.props.cover} className="Media-image" alt="" width={260} height={160}></img>
                        <h3 className="Media-title">{this.props.title}</h3>
                        <p className="Media-author">{this.props.author}</p>
                    </div>
                </div>
           </Link>
        )
    }
    handleClick = (ev) => {
        // console.log(this.props.title) // this.props.title esta declarado en la clase Media, lo enlazamos gracias al metodo bind
        this.props.openModal(this.props.id);
    }

    // handleClick = (ev) => {     // Las arrow-functions heredan por defecto el contexto de su padre, asi podemos acceder a los props de Media facilmente
    //     // console.log(this.props.title)
    //     this.setState({
    //         author: 'Ricardo Celis'
    //     })
    // }
}

// Sirve para validar que tipo de dato es en especifico, tambien para especificar si es requerido o no el dato. Se puede tambien validar si el dato tiene dos o mas tipos
Media.propTypes = { // Se escribe la primera letra con minusculas propTypes por ser un metodo de la clase Media
    cover: PropTypes.string, // Aqui se escribe con mayusculas porque lo estamos requiriendo
    title: PropTypes.string.isRequired,
    author: PropTypes.string
}

export default Media;