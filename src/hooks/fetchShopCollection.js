import { useEffect } from "react";
import { getProducts } from "../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCollection } from "../store/shopCollection/shopCollection.action";

export function fetchShopCollection () {
    const dispatch = useDispatch()
    const { collection } = useParams()

    useEffect(() => {
        const fetchCollection = async () => {
            const products = await getProducts()
            dispatch(setCollection(products[collection]))
        }

        fetchCollection()
    }, [])
}