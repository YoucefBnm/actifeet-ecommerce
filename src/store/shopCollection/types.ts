import { ProductProps } from "@/components/types"
import { sortOption } from "@/firebase/types";
import { DocumentSnapshot } from "firebase/firestore"

export type fetchSuccess = {
    products: ProductProps[],
    count: number,
    lastVisibleItem: DocumentSnapshot
}

export interface ShopCollectionStateType {
    products: ProductProps[];
    lastVisible: undefined | DocumentSnapshot;
    count: null | number;
    selectedSortOption: sortOption;
    isFetching: boolean;
    error: null | string
}