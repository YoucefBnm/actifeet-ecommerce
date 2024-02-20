import { ProductProps } from "@/components/types"
import { ReactNode } from "react"

export type HeroProps = {
    bg: string,
    heading: string,
    paragraph: string,
    children: ReactNode
}

export type CtaProps = {
    heading: string,
    paragraph: string,
    route: string,
    imageUrl: string
}

export type SubmenuLinkItem = {
    title: string,
    route: string 
}

export type SubmenuItem = {
    mainTitle: string;
    links: SubmenuLinkItem[]
}

export type NabarLinkItem = {
    id: string;
    title: string;
    route?: string;
    submenu?: SubmenuItem[];
    ctaImage?: string 
}

export type NavbarLinkItem = {
    id: string;
    title: string;
    route?: string;
    submenu?: SubmenuItem[];
    ctaImage?: string; 
}

export type CategoryCardProps = {
    imageUrl: string;
    link: string;
    title: string
}

export type FormProps = {
    handleSubmit: (e:SubmitEvent) => void;
    children: ReactNode
}

export type ProductsCarouselProps = {
    slides: ProductProps[];
    title: string,
    link:string
}

export type ProductPageDetailsProps = {
    product: ProductProps,
    activeColor: number,
    handleColorChange: (index:number) => void
}

export type ProductDetailPageHeaderProps = {
    badge?: ProductProps['badge'];
    discount?: ProductProps['discount'];
    name: ProductProps['name'];
    price: ProductProps['price'];
}

export type ProductDetailPageColorsProps = {
    colors: ProductProps['images'];
    activeColor: number;
    handleMouseEnter: (index:number) => void 
}

export type ProductPageSizesProps = {
    sizes: ProductProps['sizes'],
    selectedSize: number | undefined,
    setSelectedSize: (size:number) => void
}

export type ProductPageDescriptionProps = { details: ProductProps['details']}

