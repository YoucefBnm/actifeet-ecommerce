import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, resetPassword, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from "@/firebase/user/user";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "sonner";
import { USER_ACTION_TYPES } from "./user.types";
import { authFailed, resetPasswordSuccess, signInSuccess, signOutSuccess, signUpSuccess } from "./user.action";

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    toast.success('Signin successfully.')
  } catch (error) {
    yield put(authFailed(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(authFailed(error))
    toast.error(error.message)
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
    toast.success('Logged successfully')

  } catch (error) {
    if(error.code==='auth/user-not-found') {
      toast.error('user not found')
    }
    if(error.code==='auth/wrong-password') {
      toast.error('Wrong password')
    }
    else {
      toast.error(error.message)
    }
    yield put(authFailed(error))
    
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(authFailed(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }))
  } catch (error) {

    yield put(authFailed(error))
    if(error.code==='auth/email-already-in-use') {
      toast.error('email already in use')
    } 
    if(error.code==='auth/weak-password') {
      toast.error('weak password, password should be at least 6 characters.')
    }
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
    toast.success('Successfully signout')
  } catch (error) {
    yield put(authFailed(error))
    toast.error(error.message)
  }
}

function* resetPasswordAsync ({payload: email}) {
  try {
    yield call(resetPassword, email)
    yield put(resetPasswordSuccess())
    toast.success('Check your Email')
  } catch(error) {
    yield put(authFailed(error))
    if(error.code==='auth/user-not-found') {
      toast.error('user not found')
    }
  }
} 

export function* signInAfterSignUp({ payload: { user, additionalInfo } }) {
  yield call(getSnapshotFromUserAuth, user, additionalInfo);
  

}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onResetPassword() {
  yield takeLatest(USER_ACTION_TYPES.RESET_PASSWORD_START, resetPasswordAsync)
  
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
  
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
    call(onResetPassword)
  ]);
}