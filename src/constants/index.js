import {
    NavSportsRunImage,
    NavSportsCrossImage,
    NavSportsClimbImage,
    NavCollectionsMenImage,
    NavCollectionsWomenImage,
} from "../assets"

export const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const navLinks = [
    {
        id: 'navbar-shopAll-link-main',
        title: 'Shop All',
        route: '/shop/all_products',
    },
    {
        id: 'navbar-collection-link-sub',
        title: 'Collections',
        subMenu: [
            {
                id: 'navbar-collection-submenu-men',
                image: NavCollectionsMenImage,
                title: 'men',
                route: '/shop/men'
            },
            {
                id: 'navbar-collection-submenu-women',
                image: NavCollectionsWomenImage,
                title: 'women',
                route: '/shop/women'
            }
        ]
    },
    {
        id: 'navbar-sports-link-sub',
        title: 'Sports',
        subMenu: [
            {
                id: 'navbar-sports-submenu-run',
                image: NavSportsRunImage,
                title: 'Running',
                route: '/shop/running'
            },
            {
                id: 'navbar-sports-submenu-cross',
                image: NavSportsCrossImage,
                title: 'Cross training',
                route: '/shop/cross_training',
            },
            {
                id: 'navbar-sports-submenu-climb',
                image: NavSportsClimbImage,
                title: 'climbing',
                route: '/shop/climbing'
            }
        ]
    },
    {
        id: 'navbar-best-seller-link-main',
        title: 'best seller',
        route: '/shop/best_seller',
    },
    {
        id: 'navbar-new-link-main',
        title: 'new',
        route: '/shop/new'
    },
    {
        id: 'navbar-sale-link-main',
        title: 'sale',
        route: '/shop/sale'
    },
]