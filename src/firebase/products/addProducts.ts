import { ProductProps } from "@/components/types";
import { doc, writeBatch } from "firebase/firestore";
import { db } from "../controllers";
import { collectionRef } from "./products.controllers";


export const addProducts = async(productsToAdd:ProductProps[]) => {

    const batch = writeBatch(db)

    productsToAdd.forEach(async (product:ProductProps) => {
        const docRef = doc(collectionRef, product.id)

        batch.set(docRef, product)
    })

    await batch.commit()
    console.log('done')
}