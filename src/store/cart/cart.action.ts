import { ProductProps } from "@/components/types"
import { CART_ACTION_TYPES, CartItemProps } from "./cart.types"
import { ActionWithPayload, createAction, withMatcher } from "@/utils/reducer/reducer.utils"

export type SetCartItemsStart = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS_START, {cartItems:CartItemProps[], itemToAdd:ProductProps, selectedColor:number, selectedSize:number|undefined}>
export type AddCartItemStart = ActionWithPayload<CART_ACTION_TYPES.ADD_CART_ITEM_START, {cartItems:CartItemProps[], itemTarget:CartItemProps}>
export type RemoveCartItemStart = ActionWithPayload<CART_ACTION_TYPES.REMOVE_CART_ITEM_START, {cartItems:CartItemProps[], itemTarget:CartItemProps}>
export type ClearCartItemStart = ActionWithPayload<CART_ACTION_TYPES.CLEAR_CART_ITEM_START, {cartItems:CartItemProps[], itemTarget:CartItemProps}>
export type SetCartItemsSuccess = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS_SUCCESS, CartItemProps[]>
export type AddCartItemSuccess = ActionWithPayload<CART_ACTION_TYPES.ADD_CART_ITEM_SUCCESS, CartItemProps[]>
export type RemoveCartItemSuccess = ActionWithPayload<CART_ACTION_TYPES.REMOVE_CART_ITEM_SUCCESS, CartItemProps[]>
export type ClearCartItemSuccess = ActionWithPayload<CART_ACTION_TYPES.CLEAR_CART_ITEM_SUCCESS, CartItemProps[]>
export type SetCartItemsFailed = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS_FAILED, Error>

export const setCartItemsStart = withMatcher((cartItems:CartItemProps[], itemToAdd:ProductProps, selectedColor:number, selectedSize:number|undefined):SetCartItemsStart => 
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS_START, {cartItems, itemToAdd, selectedColor, selectedSize}))
export const addCartItemStart = withMatcher((cartItems:CartItemProps[], itemTarget:CartItemProps):AddCartItemStart => 
    createAction(CART_ACTION_TYPES.ADD_CART_ITEM_START, {cartItems, itemTarget}))
export const removeCartItemStart = withMatcher((cartItems:CartItemProps[], itemTarget:CartItemProps):RemoveCartItemStart => 
    createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM_START, {cartItems, itemTarget}))
export const clearCartItemStart = withMatcher((cartItems:CartItemProps[], itemTarget:CartItemProps):ClearCartItemStart => 
    createAction(CART_ACTION_TYPES.CLEAR_CART_ITEM_START, {cartItems, itemTarget}))
export const setCartItemsSuccess = withMatcher((cartItems:CartItemProps[]):SetCartItemsSuccess =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS_SUCCESS, cartItems))
export const addCartItemSuccess = withMatcher((cartItems:CartItemProps[]):AddCartItemSuccess => 
    createAction(CART_ACTION_TYPES.ADD_CART_ITEM_SUCCESS, cartItems))
export const removeCartItemSuccess = withMatcher((cartItems:CartItemProps[]):RemoveCartItemSuccess =>
    createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM_SUCCESS, cartItems))
export const clearCartItemSuccess = withMatcher((cartItems:CartItemProps[]):ClearCartItemSuccess =>
    createAction(CART_ACTION_TYPES.CLEAR_CART_ITEM_SUCCESS, cartItems))
export const setCartItemsFailed = withMatcher((error:Error):SetCartItemsFailed =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS_FAILED, error))