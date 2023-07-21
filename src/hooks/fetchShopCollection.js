import { useEffect, useState } from "react";
import { getFilters, getProducts } from "../utils/firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setShopCollection } from "../store/shopCollection/shopCollection.action";
import { slectShopCollection } from "../store/shopCollection/shopCollection.selector";

export function fetchShopCollection () {
    const dispatch = useDispatch()
    const { collection } = useParams()
    
    const [lastDoc, setLastDoc] = useState(null)

    const shopCollection = useSelector(slectShopCollection)

    useEffect(() => {
        const fetchCollection = async () => {
            const products = await getProducts(collection, 12, lastDoc)
            const filters = await getFilters(`${collection}-filters`)

            dispatch(setShopCollection({products, filters}))

        }


        fetchCollection()

    }, [collection, lastDoc])

    return shopCollection
}