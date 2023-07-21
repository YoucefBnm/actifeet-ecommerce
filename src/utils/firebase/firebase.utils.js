import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    collection,
    getFirestore,
    writeBatch,
    doc,
    orderBy,
    limit,
    startAfter,
    getDocs,
    query,
    getDoc,
    setDoc,
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

// user
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})
export const auth = getAuth()
export const signinWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signinWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const signinAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password) return
    return await signInWithEmailAndPassword(auth,email,password)
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformations={}) => {
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformations
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userDocRef
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return 
    return await createUserWithEmailAndPassword(auth, email, password)
}

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