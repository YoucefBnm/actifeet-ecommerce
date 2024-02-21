import { UserData } from "@/firebase/user/user";
import { UnknownAction } from "redux";
import { authFailed, emailSignInStart, googleSignInStart, signInSuccess, signOutStart, signOutSuccess, signUpSuccess } from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly loading: boolean
  readonly error: Error | null 
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  loading: false,
  error: null,
}

export const userReducer = (state=INITIAL_STATE, action: UnknownAction) => {
  if(
    emailSignInStart.match(action) 
    || signUpSuccess.match(action) 
    || googleSignInStart.match(action) 
    || signOutStart.match(action)) {
    return {
      ...state,
      loading: true,
      error: null 
    }
  }

  if(signInSuccess.match(action)) {
    return {
      ...state,
      loading: false,
      currentUser: action.payload,
      error: null 
    }
  }
  if(signOutSuccess.match(action)) {
    return {
      ...state,
      loading: false,
      currentUser: null
    }
  }
  if(authFailed.match(action)) {
    return {
      ...state,
      loading: false,
      currentUser: null,
      error: action.payload.message
    }
  }

  return state
}