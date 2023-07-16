import { initializeApp } from 'firebase/app'
import {
    collection,
    getFirestore,
    writeBatch,
    doc,
    orderBy,
    where,
    limit,
    startAfter,
    getDocs,
    query,
    getDoc,

} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBj6N8ZBY7dRS05i6FlAr7pi7_AJ_3o3Kc",
    authDomain: "mill-ecommercedb.firebaseapp.com",
    projectId: "mill-ecommercedb",
    storageBucket: "mill-ecommercedb.appspot.com",
    messagingSenderId: "965185858816",
    appId: "1:965185858816:web:4fe6c5ecef62cb6c5ed7e5"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore()

// add products 
export const addProducts = async (collectionKey, productsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    productsToAdd.map(product => {
        const docRef = doc(collectionRef, product.collection.toLowerCase())
        const { collection, products, filters } = product
        batch.set(docRef, { collection: collection, products: products, filters: filters})
    })

    await batch.commit()
    console.log('done')
} 

// get Products 
export const getProducts = async () => {
    const collectionRef = collection(db, 'shopCollections')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)

    const collectionMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { collection, products, filters } = docSnapshot.data()
        acc[collection.toLowerCase()] = { products, filters}
        return acc
    }, {})
    return collectionMap
}