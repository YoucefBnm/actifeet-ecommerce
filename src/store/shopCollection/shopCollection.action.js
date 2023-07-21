import { COLLECTION_ACTION_TYPES } from "./shopCollection.types";
import { createAction } from "../../utils/reducer/reducer.utils";



export const setShopCollection = (shopCollection) => createAction(COLLECTION_ACTION_TYPES.SET_COLLECTION, shopCollection)


export const loadMoreProducts =  (prevProducts, nextProducts) => {

    return createAction(COLLECTION_ACTION_TYPES.LOAD_MORE_PRDOUCTS, {prevProducts,nextProducts})
    
}
