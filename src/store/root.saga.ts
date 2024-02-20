import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.saga";
import { shopCollectionSagas } from "./shopCollection/shopCollection.saga";
import { cartSagas } from "./cart/cart.saga";


export function* rootSaga() {
    yield all([
        call(userSagas),
        call(shopCollectionSagas),
        call(cartSagas)
    ])
}