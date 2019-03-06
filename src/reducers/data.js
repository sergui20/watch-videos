import schema from '../schemas/index';
import { fromJS } from 'immutable';

//Action-types
import { SEARCH_ENTITIES } from '../action-types/index';

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: []
})

// console.log(schema);

function data (state = initialState, action) {
    switch (action.type) {
        case SEARCH_ENTITIES: {
            // let results = [];

            // if(action.payload.query) {
            //     state.data.categories.map( (item) => {
            //         item.playlist.filter( (item) => {
            //             return item.author.includes(action.payload.query) && results.push(item)
            //         })
            //     })
            // }

            // return {
            //     ...state,
            //     search: results
            // }

            return state.set('search', action.payload.query)
        }
            
        default:
            return state
    }
}

export default data;