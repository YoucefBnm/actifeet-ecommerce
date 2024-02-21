import { ActionWithPayload, createAction, withMatcher } from "@/utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { Action } from "redux";
import { AdditionalInfo, UserData } from "@/firebase/user/user";
import { User } from "firebase/auth";

/*
CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
  GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'user/SIGN_IN_FAILURE'
*/

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>
export type GoogleSignStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>
export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string}>
export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, {email: string, password:string, displayName:string}>
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user:User, additionalInfo:AdditionalInfo}>
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>
export type ResetPasswordStart = ActionWithPayload<USER_ACTION_TYPES.RESET_PASSWORD_START, string>
export type ResetPasswordSuccess = Action<USER_ACTION_TYPES.RESET_PASSWORD_SUCCESS>
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export type AuthFailed = ActionWithPayload<USER_ACTION_TYPES.AUTH_FAILED, Error>

export const checkUserSession = withMatcher(():CheckUserSession =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));
export const setCurrentUser = withMatcher((user:UserData):SetCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
export const googleSignInStart = withMatcher(():GoogleSignStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));
export const emailSignInStart = withMatcher((email:string, password:string):EmailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));
export const signInSuccess = withMatcher((user:UserData & {id: string}):SignInSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user))
export const resetPasswordStart = withMatcher((email:string):ResetPasswordStart => 
  createAction(USER_ACTION_TYPES.RESET_PASSWORD_START, email))
export const resetPasswordSuccess = withMatcher(():ResetPasswordSuccess =>
  createAction(USER_ACTION_TYPES.RESET_PASSWORD_SUCCESS))
export const signUpStart = withMatcher((email:string, password:string, displayName:string):SignUpStart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  }));
export const signUpSuccess = withMatcher((user:User, additionalInfo:AdditionalInfo):SignUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo }))
export const signOutStart = withMatcher(():SignOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START));
export const signOutSuccess = withMatcher(():SignOutSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

  
export const authFailed = withMatcher((error:Error):AuthFailed =>
  createAction(USER_ACTION_TYPES.AUTH_FAILED, error))
