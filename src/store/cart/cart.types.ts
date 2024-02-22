export enum CART_ACTION_TYPES {
    SET_CART_ITEMS_START = 'cart/SET_CART_ITEMS_START',
    SET_CART_ITEMS_SUCCESS = 'cart/SET_CART_ITEMS_SUCCESS',
    
    ADD_CART_ITEM_START = 'cart/ADD_CART_ITEM_START',
    ADD_CART_ITEM_SUCCESS = 'cart/ADD_CART_ITEM_SUCCESS',

    REMOVE_CART_ITEM_START = 'cart/REMOVE_CART_ITEM_START',
    REMOVE_CART_ITEM_SUCCESS = 'cart/REMOVE_CART_ITEM_SUCCESS',

    CLEAR_CART_ITEM_START = 'cart/CLEAR_CART_ITEM_START',
    CLEAR_CART_ITEM_SUCCESS = 'cart/CLEAR_CART_ITEM_SUCCESS',

    SET_CART_ITEMS_FAILED = 'cart/SET_CART_ITEMS_FAILED'
}

export type CartItemProps = {
    id: string;
    gender: string;
    category: string,
    brand: string;
    name: string;
    price: number | string;
    size: number;
    color: string;
    mainImage: string;
    quantity: number,
    link: string
}

