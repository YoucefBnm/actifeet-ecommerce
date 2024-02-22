import { SortOptionsTypes, filtersType } from "@/firebase/types";
import { ActionWithPayload, createAction, withMatcher } from "@/utils/reducer/reducer.utils";
import { DocumentData } from "firebase/firestore";
import { Params } from "react-router-dom";
import { SHOP_COLLECTION_TYPES } from "./shopCollection.types";
import { fetchSuccessResponse } from "@/firebase/products/fetchProducts";

// params, sortOption, limitNumber, filters, lastVisible
export type FetchProductsStart = ActionWithPayload<SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START, {params:Readonly<Params<string>>, sortOption: keyof SortOptionsTypes,limitNumber:number, filters: filtersType}>
export type LoadMoreStart = ActionWithPayload<SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START, {params:Readonly<Params<string>>, sortOption: keyof SortOptionsTypes, limitNumber:number,filters: filtersType,lastVisible: DocumentData | undefined}>

export type FetchProductsSuccess = ActionWithPayload<SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_SUCCESS, {response: fetchSuccessResponse}>
export type LoadMoreProductsSuccess = ActionWithPayload<SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_SUCCESS, {response: fetchSuccessResponse}>

export type FetchFailed = ActionWithPayload<SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_FAILED, Error>

export const fetchProductsStart = withMatcher((
    params: Readonly<Params<string>>,
    sortOption:keyof SortOptionsTypes,
    limitNumber:number,
    filters: filtersType,
):FetchProductsStart => createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START, {params, sortOption, limitNumber, filters}))
export const loadMoreStart = withMatcher((
    params: Readonly<Params<string>>,
    sortOption: keyof SortOptionsTypes,
    limitNumber:number,
    filters: filtersType,
    lastVisible: DocumentData | undefined
):LoadMoreStart => createAction(SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START, {params, sortOption, limitNumber, filters, lastVisible}))

export const fetchProductsSuccess = withMatcher((response:fetchSuccessResponse):FetchProductsSuccess => 
    createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_SUCCESS, {response}))

export const loadMoreProductsSuccess = withMatcher((response:fetchSuccessResponse) => 
    createAction(SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_SUCCESS, {response}))
export const fetchFailed = withMatcher((error:Error):FetchFailed => 
    createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_FAILED, error))
