// Action-types
import { CLOSE_MODAL, OPEN_MODAL, SEARCH_ENTITIES, IS_LOADING } from '../action-types/index';

// Action creators

export function openModal(mediaId) {
    return {
        type: OPEN_MODAL,
        payload: {
            mediaId
        }
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function searchEntities(query) {
    return {
        type: SEARCH_ENTITIES,
        payload: {
            query
        }
    }
}

export function loader (value) {
    return {
        type: IS_LOADING,
        payload: {
            value
        }
    }
}

export function searchAsyncEntities(query) {
    return (dispatch) => {
        // fetch, o alguna llamada a una api para luego mediante esa data hacer un filtro de mis busquedas
        dispatch(loader(true));

        setTimeout( () => {
            dispatch(loader(true))
            dispatch(searchEntities(query))
        }, 5000)
    }
}