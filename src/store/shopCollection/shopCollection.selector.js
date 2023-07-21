import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const selectCollectionReducer = state => state.shopCollection

export const slectShopCollection = createSelector(
    [selectCollectionReducer],
    shopCollection => shopCollection.shopCollection
)