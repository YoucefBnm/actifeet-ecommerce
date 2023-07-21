import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const ShopCollectionContext = createContext({
    filters: null,
    products: null,
    lastDoc: null
})

const SHOP_COLLECTION_ACTION_TYPES = {
    SET_COLLECTION_FILTERS: 'SET_COLLECTION_FILTERS',
    SET_COLLECTION_PRODUCTS: 'SET_COLLECTION_PRODUCTS',
    LOAD_MORE_PRODUCTS: 'LOAD_MORE_PRODUCTS'
}

const INITIAL_STATE = {
    filters: null,
    setFilters: () => {},
    products: null,
    setProducts: () => {},
    lastDoc: null,
    setLastDoc: () => {}
}

const ShopCollectionReducer = (state, {type, payload}) => {

    switch(type) {
        case SHOP_COLLECTION_ACTION_TYPES.SET_COLLECTION:
            return {
                ...state,
                filters: payload,
                products: payload 
            }
        case SHOP_COLLECTION_ACTION_TYPES.LOAD_MORE_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default: 
            throw new Error(`unhandled type of ${type} in shopCollection reducer`)
    }
}

export const ShopCollectionProvider = ({ children }) => {
    const [{ filters, products, lastDoc }, dispatch] = useReducer(ShopCollectionReducer, INITIAL_STATE)
    
    const value = {
        filters,
        setShopCollectionFilters,
    }
    
    return <ShopCollectionContext.Provider value={value}>{children}</ShopCollectionContext.Provider>
}

const setShopCollectionFilters = shopCollectionFilters => {
    dispatch(createAction(SHOP_COLLECTION_ACTION_TYPES.SET_COLLECTION_FILTERS), shopCollectionFilters)
    console.log('shop Filters: ', shopCollectionFilters, filters)
}

