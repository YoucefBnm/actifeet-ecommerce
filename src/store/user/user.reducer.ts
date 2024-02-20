import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  loading: false,
  isChecking: false,
  error: null,
}

export const userReducer = (state = INITIAL_STATE, {type, payload}) => {

  switch(type) {
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
    case USER_ACTION_TYPES.SIGN_UP_START:
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
    case USER_ACTION_TYPES.SIGN_OUT_START:
      return {
        ...state,
        loading: true,
        error: null 
      }
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        isChecking: false,
        currentUser: payload,
        error: null,
      }
    case USER_ACTION_TYPES.CHECK_USER_SESSION:
      return {
        ...state,
        isChecking: true
      }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: null,
        isChecking: false 
      }

    case USER_ACTION_TYPES.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        isChecking: false, 
        error: payload
      }
    default:
      return state
  }
}