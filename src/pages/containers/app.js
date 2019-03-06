import React from 'react'; // React sirve para crear componentes
import Videos from './videos';
import Home from '../components/home';
import NotFound from '../components/not-found';
import Header from '../components/header';
import Video from './video';

import { createStore, applyMiddleware } from 'redux'; // Para crear nuestro unico store de HOME
import { Provider } from 'react-redux'; // Es un HOC, o un componente de alto orden que pasara los datos del store a los componentes hijos.
import reducer from '../../reducers/index'; // Requerimos nuestra funcion pura o tambien llamada reducer, es lo que cambiara el estado de nuestra aplicacion.

import { Map as map } from 'immutable'; // Todos los objetos pasan a ser mapas

//Middleware redux
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// Acciones asincronas
import thunk from 'redux-thunk';

//React-router
import { Route, Switch, Redirect } from 'react-router-dom';

// // Crearemos un reducer para cada key del initialState
// const initialState = { // Estado inicial de redux que le pasaremos a los componentes hijos
//     data: {
//         entities: data.entities,
//         categories: data.result.categories,
//         search: [] // Colocamos un array para la busqueda, aqui se guardaran todas las busquedas que hagamos.
//     },
//     modal: {
//         visibility: false,
//         mediaId: null
//     }
// }

// function logger ({dispatch, getState}) {
//     return (next) => {
//         return (action) => {
//             console.log(`Accion: ${action}`)
//             const value = next(action)
//             console.log(`Nuevo estado: ${getState().toJS()}`)
//             return value
//         }
//     }
// }

// const logger = ({dispatch, getState}) => next => action => {
//     console.log(`Accion: ${JSON.stringify(action)}`)
//     debugger;
//     const value = next(action);
//     debugger;
//     console.log(`Nuevo estado: ${JSON.stringify(getState().toJS())}`);
//     debugger;
//     return value
// }

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Herramientas de desarrollo
);

// console.log(store.getState()); // getState() es para obtener el estado de nuestro store

// ReactDOM.render(que voy a renderizar, donde lo hare)
// Alt + 0191 es para signo de interrogacion, 164,165 para la Ñ, 130 para la é, 160 - 163 para las de mas vocales
// Se puede utilizar ReactDOM.render o simplemente con el metodo render

class App extends React.Component {
    render () {
        return (
            <Provider store={store}> 
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/videos" component={Videos}></Route>
                    <Route exact path="/videos/:id" component={Video}></Route>
                    <Route path="/contacto" render={() => <h1 style={{color:"white"}}>Contacto Sergui Morejon</h1>}></Route>
                    <Redirect from="/v" to="/videos"></Redirect>
                    <Route component={NotFound}></Route>
                </Switch>
            </Provider>
        )
    }
}

export default App;