import { useEffect } from "react";
import { SHOP_COLLECTIONS } from '../assets/shop_data'
import { addProducts } from "../utils/firebase/firebase.utils";

export function addShopCollection () {
    useEffect(() => {
        addProducts('shopCollections', SHOP_COLLECTIONS)
    }, [])
}