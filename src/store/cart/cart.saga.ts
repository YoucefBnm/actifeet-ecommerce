import { promiseInterval } from "@/utils/promiseInterval/promiseIntervale.utils";
import { AddCartItemProps, CartItemProps, CartItemTargetProps } from "./types";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { addCartItem, addItemToCart, clearItemFromCart, removeItemFromCart } from "@/utils/cart/cart.utils";
import { toast } from "sonner";
import { addCartItemSuccess, clearCartItemSuccess, removeCartItemSuccess, setCartItemsFailed, setCartItemsSuccess } from "./cart.action";
import { CART_ACTION_TYPES } from "./cart.types";


function* addCartItemAsync ({payload: {cartItems, itemToAdd, selectedColor, selectedSize }}:AddCartItemProps) {

    try {

        yield promiseInterval()

        const newCartItems:CartItemProps[] = yield call(addItemToCart, {
            cartItems, itemToAdd, selectedColor, selectedSize
        })

        yield put(setCartItemsSuccess(newCartItems))
        toast.success('Item Added to cart.')
    } catch(error:Error) {
        yield put(setCartItemsFailed(error))
        toast.error(error.message)
    }
}

function* increaseItemQtyAsync ({payload: {cartItems, itemTarget}}:CartItemTargetProps) {

    try {
        yield promiseInterval()
        const newCartItems = yield call(addCartItem, {cartItems, itemTarget})
        yield put(addCartItemSuccess(newCartItems))
        toast.success('Item added to cart.')
    } catch(error) {
        yield put(setCartItemsFailed({error}))
        toast.error(error.message)
    }
}

function* removeCartItemAsync ({payload: {cartItems, itemTarget}}:CartItemTargetProps) {

    try {
        yield promiseInterval()
        const newCartItems = yield call(removeItemFromCart, {cartItems, itemTarget})
        yield put(removeCartItemSuccess(newCartItems))
        toast.info('Item removed from cart.')
    } catch(error) {
        yield put(setCartItemsFailed({error}))
        toast.error(error.message)
    }
}

function* clearCartItemAsync ({payload: {cartItems, itemTarget}}:CartItemTargetProps) {

    try {
        yield promiseInterval()
        const newCartItems = yield call(clearItemFromCart, { cartItems, itemTarget})
        yield put(clearCartItemSuccess(newCartItems))
        toast.info('Item Cleared from cart.')
    } catch(error) {
        yield put(setCartItemsFailed({error}))
        toast.error(error.message)
    }
}

function* onAddCartItem() {
    yield takeLatest(
        CART_ACTION_TYPES.SET_CART_ITEMS_START,
        addCartItemAsync
    )
}

function* onIncreaseQty () {
    yield takeLatest(
        CART_ACTION_TYPES.ADD_CART_ITEM_START,
        increaseItemQtyAsync
    )
}

function* onRemoveCartItem () {
    yield takeLatest(
        CART_ACTION_TYPES.REMOVE_CART_ITEM_START,
        removeCartItemAsync
    )
}

function* onClearCartItem() {
    yield takeLatest(
        CART_ACTION_TYPES.CLEAR_CART_ITEM_START,
        clearCartItemAsync
    )
}

export function* cartSagas () {
    yield all([
        call(onAddCartItem),
        call(onIncreaseQty),
        call(onRemoveCartItem),
        call(onClearCartItem)
    ])
}