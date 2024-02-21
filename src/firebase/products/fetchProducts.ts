import { DocumentData, QueryFieldFilterConstraint, QueryFilterConstraint, and, doc, getCountFromServer, getDoc, getDocs, limit, or, query, startAfter } from "firebase/firestore";
import { SortOptionsTypes, filtersType } from "../types";
import { collectionRef, filterQueries, sortOptions } from "./products.controllers";
import { ProductProps } from "@/components/types";
import { Params } from "react-router-dom";

export type fetchSuccessResponse = {
    products: ProductProps[];
    count: number;
    lastVisibleItem: DocumentData
}

type FetchOptions = {
    params:Readonly<Params<string>>, 
    sortOption:keyof SortOptionsTypes, 
    limitNumber:number, 
    filters:filtersType, 
    lastVisible:DocumentData|undefined
}
export const fetchProducts = async (options: FetchOptions):Promise<fetchSuccessResponse> => {

    const {params, sortOption, limitNumber, filters, lastVisible} = options
    
    console.log(params, sortOption, limitNumber, filters, lastVisible)

    const sortQuery = sortOption ? sortOptions[sortOption] : sortOptions['suggested']
    const limitQuery = limit(limitNumber)

    const getFiltersParams: Array<QueryFilterConstraint> = []

    filters && Object.keys(filters).forEach(filterKey => {
        const filterValues = filters[filterKey as keyof filtersType]

        if(filterValues) {
            filterValues.map((filterValue) => {
                const filterItem = {[filterKey]: filterValue}
                const checkedFilters = Object.values(filterQueries(filterItem))?.filter(Boolean) as QueryFieldFilterConstraint[]
                getFiltersParams.push(...checkedFilters)
            })
        }
    })

    const getParamsQuery = filterQueries(params)
    const paramsQuery = Object.values(getParamsQuery).filter(Boolean) as QueryFieldFilterConstraint[]
    const allParams = (and(...paramsQuery, or(...getFiltersParams)))
    
    const q = lastVisible 
    ? query(
        collectionRef,
        allParams,
        sortQuery,
        startAfter(lastVisible),
        limitQuery
    ) 
    : query(
        collectionRef,
        allParams,
        sortQuery,
        limitQuery
    )

    const documentSnapshot = await getDocs(q)

    const products:ProductProps[] = []
    
    documentSnapshot.docs.forEach(doc => {
        products.push(doc.data() as ProductProps)
    })

    const count = (await getCountFromServer(query(collectionRef, allParams, sortQuery))).data().count
    
    const lastVisibleIndex = documentSnapshot.docs.length - 1
    const lastVisibleItem = documentSnapshot.docs[lastVisibleIndex]

    return {
        products,
        count,
        lastVisibleItem
    }
}

export const fetchProductItem = async (productId:string):Promise<ProductProps | void> => {

    const productDoc = doc(collectionRef, productId)

    const productSnapshot = await getDoc(productDoc)
    
    if(productSnapshot.exists()) {
        return productSnapshot.data() as ProductProps
    } 
}