import { combineReducers } from 'redux-immutable';

import data from './data';
import modal from './modal';
import loader from './loader';

const rootReducer = combineReducers({
    data,
    modal,
    loader
})

export default rootReducer;
