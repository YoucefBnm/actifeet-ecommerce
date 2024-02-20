import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { shopCollectionReducer } from "./shopCollection/shopCollection.reducer";
import { cartReducer } from "./cart/cart.reducer";


export const rootReducer = combineReducers({
    user: userReducer,
    shopCollection: shopCollectionReducer,
    cart: cartReducer
})