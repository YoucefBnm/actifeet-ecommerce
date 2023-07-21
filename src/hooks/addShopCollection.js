import { useEffect } from "react";
import { ALL_FILTERS, ALL_PRODUCTS, SHOP_COLLECTIONS } from '../assets/shop_data'
import { addFilters, addProducts } from "../utils/firebase/firebase.utils";

export function addShopCollection () {
    useEffect(() => {
        addProducts('all_products', ALL_PRODUCTS)
        addFilters('all_products-filters', ALL_FILTERS)
    }, [])
}