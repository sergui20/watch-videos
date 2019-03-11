import { combineReducers } from 'redux-immutable'; // Simplemente para combinar nuestros reducers y hacerlos immutales

import data from './data';
import modal from './modal';
import loader from './loader';

const rootReducer = combineReducers({
    data,
    modal,
    loader
})

export default rootReducer;
