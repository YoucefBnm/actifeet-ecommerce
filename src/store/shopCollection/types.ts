import { ProductProps } from "@/components/types"
import { sortOption } from "@/firebase/types";
import { DocumentSnapshot } from "firebase/firestore"

export type fetchSuccess = {
    products: ProductProps[],
    count: number,
    lastVisibleItem: DocumentSnapshot
}

export interface ShopCollectionStateType {
    readonly products: ProductProps[];
    readonly lastVisible: undefined | DocumentSnapshot;
    readonly count: null | number;
    readonly selectedSortOption: sortOption;
    readonly isFetching: boolean;
    readonly error: null | string
}