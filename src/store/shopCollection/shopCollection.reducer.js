import { COLLECTION_ACTION_TYPES } from "./shopCollection.types";

export const COLLECTION_INITIAL_STATE = {
    shopCollection: {
        filters: null,
        products: [] 
    },
}

export const collectionReducer = (state=COLLECTION_INITIAL_STATE, { type, payload }) => {
    
    switch(type) {
        case COLLECTION_ACTION_TYPES.SET_COLLECTION:
            return {
                ...state,
                shopCollection: payload
            }
        case COLLECTION_ACTION_TYPES.LOAD_MORE_PRDOUCTS:
            return {
                ...state,
                shopCollection: payload
            }
        default: 
            return state
    }
}