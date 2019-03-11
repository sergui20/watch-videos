import React from 'react';
import Videos from './videos';
import Home from '../components/home';
import NotFound from '../components/not-found';
import Header from '../components/header';
import Video from './video';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers/index';

import { Map as map } from 'immutable'; // Maps instead of objects
//Middleware redux
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// Acciones asincronas
import thunk from 'redux-thunk';

//React-router
import { Route, Switch, Redirect } from 'react-router-dom';

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Herramientas de desarrollo
);

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
