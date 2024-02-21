import { NextOrObserver, User, UserCredential, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth, db, googleProvider } from "../controllers";
import { QueryDocumentSnapshot, doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "sonner";

export type AdditionalInfo = {
  displayName?: string;
  photoURL?: string
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
  photoURL?: string
}

export const createAuthUserWithEmailAndPassword = async (email:string,password:string) => {
  if(!email || !password) return 
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const resetPassword = (email:string) => {
  console.log(email)
  return sendPasswordResetEmail(auth, email)
}
  
export const createUserDocumentFromAuth = async (
  userAuth:User,
  additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
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
        createdAt,
        photoURL,
        ...additionalInfo
      })
    } catch (error) {
      toast.error(`createUserDocFromAuth: ${error}`)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const signInAuthUserWithEmailAndPassword = async(email:string, password:string):Promise<UserCredential | void> => {
  if(!email || !password) return

  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  )
}
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback:NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)

export const getCurrentUser = ():Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

