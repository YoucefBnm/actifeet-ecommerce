import { ProductProps } from "@/components/types";

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

export type CartInitialStateType = {
    cartItems: CartItemProps[];
    loading: boolean;
    error: null | unknown | string
}

export type AddCartItemProps = {
    payload: {
        cartItems: CartItemProps[]; 
        itemToAdd: CartItemProps; 
        selectedColor: number; 
        selectedSize: number 
    }
}

export type SetCartItemsProps = {
    cartItems:CartItemProps[]; 
    itemToAdd:ProductProps; 
    selectedColor:number; 
    selectedSize:number | undefined
}

export type CartItemTargetProps = {
    payload: {
        cartItems: CartItemProps[];
        itemTarget: CartItemProps
    }
}