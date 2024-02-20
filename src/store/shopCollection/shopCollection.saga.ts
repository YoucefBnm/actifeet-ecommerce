import { fetchProducts } from "@/firebase/products/fetchProducts";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchFailed, fetchProductsSuccess, loadMoreProductsSuccess } from "./shopCollection.action";
import { SHOP_COLLECTION_TYPES } from "./shopCollection.types";


function* fetchShopProductsAsync ({payload: {params, sortOption, limitNumber, filters, lastVisible}}) {

    try {
        const fetchShopProducts = yield call(fetchProducts, { params, sortOption, limitNumber, filters, lastVisible })
        yield put(fetchProductsSuccess(fetchShopProducts))
    } catch(error) {
        yield put(fetchFailed(error))
    }
}

function* loadProductsAsync ({payload: {params, sortOption, limitNumber, filters, lastVisible}}) {

    try {
        const loadProducts = yield call(fetchProducts, { params, sortOption, limitNumber, filters, lastVisible })
        yield put(loadMoreProductsSuccess(loadProducts))
    } catch(error) {
        yield put(fetchFailed(error))
    }
}

function* onFetchProducts() {
    yield takeLatest(
        SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START,
        fetchShopProductsAsync
    )
}

function* onLoadMoreProducts() {
    yield takeLatest(
        SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START,
        loadProductsAsync
    )
}

export function* shopCollectionSagas () {
    yield all([
        call(onFetchProducts),
        call(onLoadMoreProducts)
    ])
}