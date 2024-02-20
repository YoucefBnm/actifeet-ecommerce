import { SHOP_COLLECTION_TYPES } from "./shopCollection.types";
import { ShopCollectionStateType } from "./types";


const SHOP_COLLECTION_INITIAL_STATE:ShopCollectionStateType = {
    products: [],
    lastVisible: undefined,
    count: null,
    selectedSortOption: 'suggested',
    isFetching: false,
    error: null
}

export const shopCollectionReducer = (state=SHOP_COLLECTION_INITIAL_STATE, {type, payload}) => {

    switch(type) {
        case SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START:
        case SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START:
            return {
                ...state,
                isFetching: true,
                error: null 
            }
        
        case SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                products: payload.products,
                lastVisible: payload.lastVisibleItem,
                count: payload.count
            }
        
        case SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                products: [...state.products, ...payload.products],
                lastVisible: payload.lastVisibleItem,
                count: payload.count
            }
        
        case SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: payload
            }
        
        default:
            return state
    }
}