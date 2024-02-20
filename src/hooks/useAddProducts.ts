import { SHOP_DATA } from "@/assets/shop_data";
import { addProducts } from "@/firebase/products/addProducts";
import { useEffect } from "react";


export function useAddProudcts () {

    useEffect(() => {
        addProducts(SHOP_DATA)
    }, [])
}