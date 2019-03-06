import React, { Component } from 'react';
import Layout from '../components/layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../errors/containers/handleError';
import VideoPlayer from '../../player/containers/video-player';

import { List as list } from 'immutable';

// Action functions creators
import { openModal, closeModal } from '../../actions/index'; // * es para referirnos a todos los exports

// React-redux
import { connect } from 'react-redux'; // Conectar mi componente con el estado general de la aplicacion

class Home extends Component {
    // state = {
    //     modalVisible: false
    // }

    openModal = (id) => {
        // this.setState({
        //     modalVisible: true,
        //     media
        // })
        this.props.openModal(id) // La accion openModal() ahora se encuentra en las propiedades del componente, gracias a mapDispatchToProps(dispatch) que agrega como propiedad a mis acciones.
    }

    closeModal = () => {
        // this.setState({
        //     modalVisible: false
        // })
        this.props.closeModal() // Se encuentra en las propiedades gracias a mapDispatchToProps()
    }

    componentDidMount() {
        const search = this.props.location.search;

        if (search) {
            const id = search.split('=')[1]
            this.openModal(id);
        }
    }
    
    render() {
        return (
            <HandleError>
                <Layout>
                    <Related></Related>
                    <Categories categories={this.props.categories} openModal={this.openModal} search={this.props.search} loader={this.props.loader}></Categories>
                    {
                        this.props.modal.get('visibility') &&
                        <ModalContainer>
                            <Modal closeModal={this.closeModal}>
                                <VideoPlayer autoplay id={this.props.modal.get('mediaId')}></VideoPlayer>
                            </Modal>
                        </ModalContainer>
                    }
                </Layout>
            </HandleError>
        )
    }
}

function mapStateToProps(state, props) { // Función pura que devuelve las propiedades necesarias, los datos que el componente utilizará.  Es una función en la que si el argumento está especificado el nuevo componente se suscribe para recibir actualizaciones, lo que significa que cada vez que el store es actualizado la función mapStateToProps será llamada para obtener las propiedades.
    const categories = state.get('data').get('categories').map( (categoryID) => {
        return state.get('data').get('entities').get('categories').get(categoryID) // En objetos tambien se puede usar [] para obtener datos en especifico
    })

    let searchResults = list()
    const search = state.get('data').get('search');
    if(search) {
        const mediaList = state.get('data').get('entities').get('media'); // Devuelve un mapa
        
        searchResults = mediaList.filter( (item) => {
            return item.get('author').includes(search)
        }).toList();
    }

    return {
        categories, // map retorna un array
        search: searchResults,
        modal: state.get('modal'),
        loader: state.get('loader').get('active')
    }
}

const mapDispatchToProps = {
    openModal,
    closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); // Funcion currificada. Primero tenemos la funcion connect que nos retornara una funcion mapStateToProps y nuestro componente HOME. Y al final nos retornara un componente mezclado con las propiedades categories y nuestro componente HOME. De esa forma nuestras categories ya se encuentran en las props de mi componente HOME.