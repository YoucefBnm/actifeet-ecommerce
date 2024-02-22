import { CartItemProps } from "@/store/cart/cart.types";
import { ReactNode } from "react";
import { Params } from "react-router-dom";

export type StaggerContainerProps = {
    direction?: number,
    children: ReactNode,
    style?: string
}

export type AnimatedHeadingProps = {
    heading: string,
    size: string
}

export type AuthDropdownProps = {
    title: string;
    lead: string;
    children: ReactNode
}

export interface ProductProps {
    id: string;
    gender: string;
    category: string;
    brand: string;
    name: string;
    amazonLink: string;
    badge?: string,
    price: number;
    discount?: number | undefined;
    sizes: number[];
    colors: string[];
    images: {
        id: string;
        color: string;
        imagesUrls: string[];
    }[];
    details: string[]
}

export type ProductCardProps = {
    product: ProductProps
}
export type ProductImagesProps = {
    productImages: ProductProps['images'];
    activeColor: number;
    activeImage: number;
    handleMouse: (event: 'enter' | 'leave') => void
}
export type ProductColorsProps = {
    productId: ProductProps['id'],
    productColors: ProductProps['colors'];
    activeColor: number;
    setActiveColor: (index:number) => void
}

export type ProductDetailsProps = {
    productName: ProductProps['name'];
    productGender: ProductProps['gender'];
    productCategory: ProductProps['category'];
    productBrand: ProductProps['brand']
}

export type ProductPriceProps = {
    price: ProductProps['price'],
    discount: ProductProps['discount']
}

export type CartItemGroupProps = {
    segment: string,
    value: string | number
}

export type CartItemType = {
    cartItem: CartItemProps
  }

export type ProductsCarouselProps = {
    title: string,
    link:string,
    params: Readonly<Params<string>>
}