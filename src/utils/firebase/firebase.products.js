import { collection, getFirestore } from "firebase/firestore";

const db = getFirestore()

export const addProducts = async (collectionKey, productsToAdd) => {
    const collectionRef = collection()
}