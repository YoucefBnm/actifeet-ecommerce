import { combineReducers } from "redux";
import { collectionReducer } from "./shopCollection/shopCollection.reducer";

export const rootReducer = combineReducers({
    shopCollection: collectionReducer,
})