import { COLLECTION_ACTION_TYPES } from "./shopCollection.types";

export const COLLECTION_INITIAL_STATE = {
    collection: null 
}

export const collectionReducer = (state=COLLECTION_INITIAL_STATE, { type, payload}) => {
    switch(type) {
        case COLLECTION_ACTION_TYPES.SET_COLLECTION:
            return {
                ...state,
                collection: payload
            }
        default: 
            return state
    }
}