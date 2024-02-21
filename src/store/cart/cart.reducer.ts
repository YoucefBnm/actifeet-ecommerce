import { UnknownAction } from "redux";
import { CartItemProps } from "./cart.types";
import { addCartItemStart, addCartItemSuccess, clearCartItemStart, clearCartItemSuccess, removeCartItemStart, removeCartItemSuccess, setCartItemsFailed, setCartItemsStart, setCartItemsSuccess } from "./cart.action";

export type CartState = {
    readonly cartItems: CartItemProps[];
    readonly loading: boolean;
    readonly error: Error | null
}

const CART_INITITAL_STATE:CartState = {
    cartItems: [],
    loading: false,
    error: null 
}

export const cartReducer = (state=CART_INITITAL_STATE, action: UnknownAction) => {

    if(
        setCartItemsStart.match(action)
        || addCartItemStart.match(action)
        || removeCartItemStart.match(action)
        || clearCartItemStart.match(action)
    ) {
        return {
            ...state,
            loading: true,
            error: null 
        }
    }

    if(
        setCartItemsSuccess.match(action) 
        || addCartItemSuccess.match(action)
        || removeCartItemSuccess.match(action)
        || clearCartItemSuccess.match(action)
    ) {
        return {
            ...state,
            cartItems: action.payload,
            loading: false,
            error: null 
        }
    }

    if(setCartItemsFailed.match(action)) {
        return {
            ...state,
            loading: false,
            error: action.payload.message
        }
    }
    return state
}