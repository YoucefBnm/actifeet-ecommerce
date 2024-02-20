import { createSelector } from "reselect"
import { CartItemProps } from "./types"


const selectCartReducer = (state) => state.cart

export const selectLoading = createSelector(
    [selectCartReducer],
    cartSlice => cartSlice.loading
)

export const selectError = createSelector(
    [selectCartReducer],
    cartSlice => cartSlice.error
)

export const selectCartItems = createSelector(
    [selectCartReducer],
    cartSlice => cartSlice.cartItems
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (total:number, cartItem:CartItemProps) => total + cartItem.quantity * Number(cartItem.price),
            0
        )
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce((total:number, cartItem:CartItemProps) => total + cartItem.quantity,
        0    
    )
)

