import { initializeApp } from 'firebase/app'
import {
    collection,
    writeBatch,
    doc,
    orderBy,
    limit,
    startAfter,
    getDocs,
    query,
} from 'firebase/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyBj6N8ZBY7dRS05i6FlAr7pi7_AJ_3o3Kc",
    authDomain: "mill-ecommercedb.firebaseapp.com",
    projectId: "mill-ecommercedb",
    storageBucket: "mill-ecommercedb.appspot.com",
    messagingSenderId: "965185858816",
    appId: "1:965185858816:web:4fe6c5ecef62cb6c5ed7e5"
};
 
const app = initializeApp(firebaseConfig)

// add products 
export const addProducts = async (collectionKey, productsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    productsToAdd.map(product => {
        const docRef = doc(collectionRef, product.id.toString().toLowerCase())
        
        batch.set(docRef, product)
    })

    await batch.commit()
    console.log('done')
} 

// add Filters 
export const addFilters = async(collectionKey, filtersToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    Object.keys(filtersToAdd).map(key => {
        const docRef = doc(collectionRef, key.toLowerCase())

        batch.set(docRef, {...filtersToAdd[key]})
    })

    await batch.commit()
    console.log('filters added')
}
// get Products 
export const getProducts = async (collectionKey, limitKey, lastKey) => {
    const collectionRef = collection(db, collectionKey)
    
    const q = query(
        collectionRef,
        orderBy('id'),
        startAfter(lastKey || 0),
        limit(limitKey)
    )
    const querySnapshot = await getDocs(q)
    
    const collectionMap = querySnapshot.docs.map(docSnapshot => {
        const product = docSnapshot.data()
        return product
    })
    
    return collectionMap
}
// get Filters 
export const getFilters = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey)
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)

    const collectionKeys = Object.keys(querySnapshot.docs).map(key => {
        const docKey = querySnapshot.docs[key].id || docKey

        return { [docKey]: Object.values(querySnapshot.docs[key].data())}
    })

    const collectionMap = collectionKeys.reduce((a,b) => Object.assign({}, a, b))

    return collectionMap
}