import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

export const getProducts = async (subCollection) => {
    const collectionRef = (db, 'all_products')
    const q = query(
        collectionRef,
        where('gender', '==', subCollection),
        limit(12)
    )

    const querySnapshot = await getDocs(q)
    const products = []
    const collectionMap = querySnapshot.map(docSnapshot => {
        products.push(docSnapshot.data())
        return products
    })

    console.log(collectionMap)
    return collectionMap
}