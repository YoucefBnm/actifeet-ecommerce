import { QueryDocumentSnapshot, QueryOrderByConstraint } from "firebase/firestore";
import { Params } from "react-router-dom";


export type sortOption = 'suggested' | 'best seller' | 'sale' | 'low to high' | 'high to low'

export type SortOptionsTypes = {
    [Key in sortOption]: QueryOrderByConstraint
}


export type filtersType = {
    gender?: string[],
    category?: string[],
    brand?: string[],
    badges?: string[],
    sizes?: string[],
    colors?: string[],
}


export type fetchOptionsProps = {
    params: Params,
    sortOption: keyof SortOptionsTypes,
    lastVisible: QueryDocumentSnapshot | undefined,
    limitNumber: number,
    filters: filtersType
}
