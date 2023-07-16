import { createAction } from "../../utils/reducer/reducer.utils";
import { COLLECTION_ACTION_TYPES } from "./shopCollection.types";

export const setCollection = collection => createAction(COLLECTION_ACTION_TYPES.SET_COLLECTION, collection)