import { createSelector } from "reselect";

const selectCollectionReducer = state => state.shopCollection

export const selectCollection = createSelector(
    [selectCollectionReducer],
    (shopCollection) => shopCollection
)