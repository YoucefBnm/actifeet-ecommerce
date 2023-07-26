import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

const db = getFirestore()
const app = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signinWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signinWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const createUserDocumentFromAuth = async (userAuth, additionalInformations={}) => {
    if(!userAuth) return 
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const { displayName, email, photoURL } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalInformations
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const onAuthStateChangeListener = callback => onAuthStateChanged(auth, callback)

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return 
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)