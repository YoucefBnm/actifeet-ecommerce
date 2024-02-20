import { filtersType, sortOption } from "@/firebase/types";
import { createAction } from "@/utils/reducer/reducer.utils";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { Params } from "react-router-dom";
import { SHOP_COLLECTION_TYPES } from "./shopCollection.types";
import { fetchSuccess } from "./types";

// params, sortOption, limitNumber, filters, lastVisible

export const fetchProductsStart = (
    params: Readonly<Params<string>>,
    sortOption:sortOption | undefined,
    limitNumber:number,
    filters: filtersType,
) => createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START, {params, sortOption, limitNumber, filters})

export const loadMoreStart = (
    params: Readonly<Params<string>>,
    sortOption:sortOption | null | string,
    limitNumber:number,
    filters: filtersType,
    lastVisible: QueryDocumentSnapshot | undefined
) => createAction(SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START, {params, sortOption, limitNumber, filters, lastVisible})

export const fetchProductsSuccess = ({ products, count, lastVisibleItem}:fetchSuccess) => 
    createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_SUCCESS, {products, count, lastVisibleItem})

export const loadMoreProductsSuccess = ({ products, count, lastVisibleItem}:fetchSuccess) => 
    createAction(SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_SUCCESS, {products, count, lastVisibleItem})

export const fetchFailed = (error:Error) => 
    createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_FAILED, error)
