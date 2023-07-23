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

export const navMobileLinks = [
    {
        id: 'navMobile-shopAll-link-main',
        title: 'Shop All',
        route: '/shop/all_products',
    },
    {
        id: 'navMobile-collection-link-sub',
        title: 'Collections',
        subMenu: [
            {
                id: 'navMobile-collection-submenu-men',
                title: 'men',
                route: '/shop/men'
            },
            {
                id: 'navMobile-collection-submenu-women',
                title: 'women',
                route: '/shop/women'
            },
            {
                id: 'navMobile-collection-submenu-unisex',
                title: 'unisex',
                route: '/shop/unisex',
            }
        ]
    },
    {
        id: 'navMobile-sports-link-sub',
        title: 'Sports',
        subMenu: [
            {
                id: 'navMobile-sports-submenu-run',
                title: 'Running',
                route: '/shop/running'
            },
            {
                id: 'navMobile-sports-submenu-cross',
                title: 'Cross training',
                route: '/shop/cross_training',
            },
            {
                id: 'navMobile-sports-submenu-climb',
                title: 'climbing',
                route: '/shop/climbing'
            },
            {
                id: 'navMobile-sports-submenu-hiking',
                title: 'hiking',
                route: '/shop/hiking'
            }
        ]
    },
    {
        id: 'navMobile-brands-link-sub',
        title: 'brands',
        subMenu: [
            {
                id: 'navMobile-brands-submenu-asics',
                title: 'asics',
                route: '/shop/asics'
            },
            {
                id: 'navMobile-brands-submenu-brooks',
                title: 'brooks',
                route: '/shop/brooks'
            },
            {
                id: 'navMobile-brands-submenu-nike',
                title: 'nike',
                route: '/shop/nike'
            },
            {
                id: 'navMobile-brands-submenu-red_chili',
                title: 'red chili',
                route: '/shop/red_chili'
            },
            {
                id: 'navMobile-brands-submenu-salomon',
                title: 'salomon',
                route: '/shop/salomon'
            },
            {
                id: 'navMobile-brands-submenu-tenaya',
                title: 'tenaya',
                route: '/shop/tenaya'
            },
            {
                id: 'navMobile-brands-submenu-under_armour',
                title: 'under armour',
                route: '/shop/under_armour'
            },
        ]
    },
    {
        id: 'navMobile-best-seller-link-main',
        title: 'best seller',
        route: '/shop/best_seller',
    },
    {
        id: 'navMobile-new-link-main',
        title: 'new',
        route: '/shop/new'
    },
    {
        id: 'navMobile-sale-link-main',
        title: 'sale',
        route: '/shop/sale'
    },
]