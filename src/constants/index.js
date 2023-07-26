import {
    NavMenCtaSaleImage,
    NavWomenCtaSaleImage,
    NavSportsCtaSaleImage,
    IconFooterFeaturesTruck,
    IconFooterFeatursShield,
    IconFooterFeaturesBox,
    IconTwitter,
    IconPinterest,
    IconInsta,
    IconFacebook,
} from "../assets"

export const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

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


export const navbarLinks = [
    {
        id: 'nav-link-main-shop',
        title: 'shop all',
        route: '/shop/all_products',
    },
    {
        id: 'nav-link-main-men',
        title: 'men',
        submenu: {
            links: [
                {
                    id: 'nav-link-sub-men-all',
                    title: 'shop all men',
                    subLinks: [
                        {
                            id: 'nav-link-sub-men-sub-men',
                            title: 'men',
                            route: '/shop/men'
                        }
                    ]
                },
                {
                    id: 'nav-link-sub-men-collection',
                    title: 'collections',
                    subLinks: [
                        {
                            id: 'nav-link-sub-men-sub-collection-bestSeller',
                            title: 'best seller',
                            route: '/shop/men/best_seller'
                        },
                        {
                            id: 'nav-link-sub-men-sub-collection-new',
                            title: 'new',
                            route: '/shop/men/new'
                        },
                        {
                            id: 'nav-link-sub-men-sub-collection-sale',
                            title: 'sale',
                            route: '/shop/men/sale'
                        }
                    ]
                },
                {
                    id: 'nav-link-sub-men-sports',
                    title: 'sports',
                    subLinks: [
                        {
                            id: 'nav-link-sub-men-sub-sports-crossTraining',
                            title: 'cross training',
                            route: '/shop/men/cross_training'
                        },
                        {
                            id: 'nav-link-sub-men-sub-sports-running',
                            title: 'running',
                            route: '/shop/men/running'
                        },
                        {
                            id: 'nav-link-sub-men-sub-sports-climbing',
                            title: 'climbing',
                            route: '/shop/men/climbing'
                        },
                        {
                            id: 'nav-link-sub-men-sub-sports-hiking',
                            title: 'hiking',
                            route: '/shop/men/hiking'
                        },
                    ]
                },
                {
                    id: 'nav-link-sub-men-brands',
                    title: 'brands',
                    subLinks: [
                        {
                            id: 'nav-link-sub-men-sub-brands-asics',
                            title: 'asics',
                            route: '/shop/men/asics'
                        },
                        {
                            id: 'nav-link-sub-men-sub-brands-brooks',
                            title: 'brooks',
                            route: '/shop/men/brooks'
                        },
                        {
                            id: 'nav-link-sub-men-sub-brands-columbia',
                            title: 'columbia',
                            route: '/shop/men/columbia'
                        },
                        {
                            id: 'nav-link-sub-men-sub-brands-nike',
                            title: 'nike',
                            route: '/shop/men/nike'
                        },
                        {
                            id: 'nav-link-sub-men-sub-brands-redChili',
                            title: 'red chili',
                            route: '/shop/men/red_chili'
                        },
                        {
                            id: 'nav-link-sub-men-sub-brands-salomon',
                            title: 'salomon',
                            route: '/shop/men/salomon'
                        },
                        {
                            id: 'nav-link-sub-men-sub-brands-tenaya',
                            title: 'tenaya',
                            route: '/shop/men/tenaya'
                        },
                        {
                            id: 'nav-link-sub-men-sub-brands-underArmour',
                            title: 'under armour',
                            route: '/shop/men/under_armour'
                        },
                    ]
                },
            ],
            cta: {
                image: NavMenCtaSaleImage,
                title: 'save up to 50%',
                paragraph: 'for a limited period.',
                route: '/shop/men/sale'
            }
        }
    },
    {
        id: 'nav-link-main-women',
        title: 'women',
        submenu: {
            links: [
                {
                    id: 'nav-link-sub-women-all',
                    title: 'shop all women',
                    subLinks: [
                        {
                            id: 'nav-link-sub-women-sub-women',
                            title: 'women',
                            route: '/shop/women'
                        }
                    ]
                },
                {
                    id: 'nav-link-sub-women-collection',
                    title: 'collections',
                    subLinks: [
                        {
                            id: 'nav-link-sub-women-sub-collection-bestSeller',
                            title: 'best seller',
                            route: '/shop/women/best_seller'
                        },
                        {
                            id: 'nav-link-sub-women-sub-collection-new',
                            title: 'new',
                            route: '/shop/women/new'
                        },
                        {
                            id: 'nav-link-sub-women-sub-collection-sale',
                            title: 'sale',
                            route: '/shop/women/sale'
                        }
                    ]
                },
                {
                    id: 'nav-link-sub-women-sports',
                    title: 'sports',
                    subLinks: [
                        {
                            id: 'nav-link-sub-women-sub-sports-crossTraining',
                            title: 'cross training',
                            route: '/shop/women/cross_training'
                        },
                        {
                            id: 'nav-link-sub-women-sub-sports-running',
                            title: 'running',
                            route: '/shop/women/running'
                        },
                        {
                            id: 'nav-link-sub-women-sub-sports-climbing',
                            title: 'climbing',
                            route: '/shop/women/climbing'
                        },
                        {
                            id: 'nav-link-sub-women-sub-sports-hiking',
                            title: 'hiking',
                            route: '/shop/women/hiking'
                        },
                    ]
                },
                {
                    id: 'nav-link-sub-women-brands',
                    title: 'brands',
                    subLinks: [
                        {
                            id: 'nav-link-sub-women-sub-brands-asics',
                            title: 'asics',
                            route: '/shop/women/asics'
                        },
                        {
                            id: 'nav-link-sub-women-sub-brands-brooks',
                            title: 'brooks',
                            route: '/shop/women/brooks'
                        },
                        {
                            id: 'nav-link-sub-women-sub-brands-columbia',
                            title: 'columbia',
                            route: '/shop/women/columbia'
                        },
                        {
                            id: 'nav-link-sub-women-sub-brands-nike',
                            title: 'nike',
                            route: '/shop/women/nike'
                        },
                        {
                            id: 'nav-link-sub-women-sub-brands-redChili',
                            title: 'red chili',
                            route: '/shop/women/red_chili'
                        },
                        {
                            id: 'nav-link-sub-women-sub-brands-salomon',
                            title: 'salomon',
                            route: '/shop/women/salomon'
                        },
                        {
                            id: 'nav-link-sub-women-sub-brands-tenaya',
                            title: 'tenaya',
                            route: '/shop/women/tenaya'
                        },
                        {
                            id: 'nav-link-sub-women-sub-brands-underArmour',
                            title: 'under armour',
                            route: '/shop/women/under_armour'
                        },
                    ]
                }
            ],
            cta: {
                image: NavWomenCtaSaleImage,
                title: 'save up to 50%',
                paragraph: 'for a limited period.',
                route: '/shop/women/sale'
            }
        }
    },
    {
        id: 'nav-link-main-sports',
        title: 'sports',
        submenu: {
            links: [
                {
                    id: 'nav-link-sub-sports-crossTraining',
                    title: 'cross training',
                    subLinks: [
                        {
                            id: 'nav-link-sub-sports-sub-crossTraining-men',
                            title: 'men',
                            route: '/shop/men/cross_training'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-crossTraining-women',
                            title: 'women',
                            route: '/shop/women/cross_training'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-crossTraining-new',
                            title: 'new',
                            route: '/shop/cross_training/new'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-crossTraining-bestSeller',
                            title: 'best seller',
                            route: '/shop/cross_training/best_seller'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-crossTraining-sale',
                            title: 'sale',
                            route: '/shop/cross_training/sale'
                        }
                    ]
                },
                {
                    id: 'nav-link-sub-sports-running',
                    title: 'running',
                    subLinks: [
                        {
                            id: 'nav-link-sub-sports-sub-running-men',
                            title: 'men',
                            route: '/shop/men/running'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-running-women',
                            title: 'women',
                            route: '/shop/women/running'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-running-unisex',
                            title: 'unisex',
                            route: '/shop/unisex/running'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-running-new',
                            title: 'new',
                            route: '/shop/running/new'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-running-bestSeller',
                            title: 'best seller',
                            route: '/shop/running/best_seller'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-running-sale',
                            title: 'sale',
                            route: '/shop/running/sale'
                        }
                    ]
                },
                {
                    id: 'nav-link-sub-sports-climbing',
                    title: 'climbing',
                    subLinks: [
                        {
                            id: 'nav-link-sub-sports-sub-climbing-men',
                            title: 'men',
                            route: '/shop/men/climbing'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-climbing-women',
                            title: 'women',
                            route: '/shop/men/climbing'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-climbing-new',
                            title: 'new',
                            route: '/shop/climbing/new'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-climbing-bestSeller',
                            title: 'best seller',
                            route: '/shop/climbing/best_seller'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-climbing-sale',
                            title: 'sale',
                            route: '/shop/climbing/sale'
                        }
                    ]
                },
                {
                    id: 'nav-link-sub-sports-hiking',
                    title: 'hiking',
                    subLinks: [
                        {
                            id: 'nav-link-sub-sports-sub-hiking-men',
                            title: 'men',
                            route: '/shop/men/hiking'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-hiking-women',
                            title: 'women',
                            route: '/shop/men/hiking'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-hiking-new',
                            title: 'new',
                            route: '/shop/hiking/new'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-hiking-bestSeller',
                            title: 'best seller',
                            route: '/shop/hiking/best_seller'
                        },
                        {
                            id: 'nav-link-sub-sports-sub-hiking-sale',
                            title: 'sale',
                            route: '/shop/hiking/sale'
                        }
                    ]
                },
            ],
            cta: {
                image: NavSportsCtaSaleImage,
                title: 'save up to 50%',
                paragraph: 'for a limited period.',
                route: '/shop/sale'
            }
        }
    },
    {
        id: 'nav-link-main-new',
        title: 'new',
        route: '/shop/new',
    },
    {
        id: 'nav-link-main-best_seller',
        title: 'best seller',
        route: '/shop/best_seller',
    },
    {
        id: 'nav-link-main-sale',
        title: 'sale',
        route: '/shop/sale',
    },
]

export const footerFeturesContent = [
    {
        id: 'footer-feature-fast',
        icon: IconFooterFeaturesTruck,
        heading: 'fast delivery',
        text: 'delivery within 5 day work.'
    },
    {
        id: 'footer-feature-secure',
        icon: IconFooterFeatursShield,
        heading: 'secure payment',
        text: 'we use stripe API for transactions.'
    },
    {
        id: 'footer-feature-funds',
        icon: IconFooterFeaturesBox,
        heading: 'funds & returns',
        text: 'free return within 30 day.'
    }
]

export const FooterNavLinks = {
    navigation: [
        {
            id: 'footer-nav-gender',
            title: 'shop by',
            links: [
                {
                    id: 'footer-nav-link-men',
                    title: 'men',
                    route: '/shop/men'
                },
                {
                    id: 'footer-nav-link-women',
                    title: 'women',
                    route: '/shop/women'
                },
                {
                    id: 'footer-nav-link-unisex',
                    title: 'unisex',
                    route: '/shop/unisex'
                }
            ]
        },
        {
            id: 'footer-nav-sports',
            title: 'sports',
            links: [
                {
                    id: 'footer-nav-link-running',
                    title: 'running',
                    route: '/shop/running'
                },
                {
                    id: 'footer-nav-link-cross_training',
                    title: 'cross training',
                    route: '/shop/cross_training'
                },
                {
                    id: 'footer-nav-link-climbing',
                    title: 'climbing',
                    route: '/shop/climbing'
                },
                {
                    id: 'footer-nav-link-hiking',
                    title: 'hiking',
                    route: '/shop/hiking'
                },
            ]
        },
        {
            id: 'footer-nav-brands',
            title: 'brands',
            links: [
                {
                    id: 'footer-nav-link-asics',
                    title: 'asics',
                    route: '/shop/asics'
                },
                {
                    id: 'footer-nav-link-brooks',
                    title: 'brooks',
                    route: '/shop/brooks'
                },
                {
                    id: 'footer-nav-link-columbia',
                    title: 'columbia',
                    route: '/shop/columbia'
                },
                {
                    id: 'footer-nav-link-red_chili',
                    title: 'red chili',
                    route: '/shop/red_chili'
                },
                {
                    id: 'footer-nav-link-salomon',
                    title: 'salomon',
                    route: '/shop/salomon'
                },
                {
                    id: 'footer-nav-link-tenaya',
                    title: 'tenaya',
                    route: '/shop/tenaya'
                },
                {
                    id: 'footer-nav-link-under_armour',
                    title: 'under armour',
                    route: '/shop/under_armour'
                },
                {
                    id: 'footer-nav-link-nike',
                    title: 'nike',
                    route: '/shop/nike'
                },
            ]
        },
        {
            id: 'footer-nav-collections',
            title: 'collections',
            links: [
                {
                    id: 'footer-nav-link-best_seller',
                    title: 'best seller',
                    route: '/shop/best_seller'
                },
                {
                    id: 'footer-nav-link-limited',
                    title: 'limited',
                    route: '/shop/limited'
                },
                {
                    id: 'footer-nav-link-new',
                    title: 'new',
                    route: '/shop/new'
                },
                {
                    id: 'footer-nav-link-sale',
                    title: 'sale',
                    route: '/shop/sale'
                },
            ]
        },
        {
            id: 'footer-nav-account',
            title: 'account',
            links: [
                {
                    id: 'footer-nav-link-login',
                    title: 'login',
                    route: '/auth/login'
                },
                {
                    id: 'footer-nav-link-register',
                    title: 'register',
                    route: '/auth/register'
                },
                {
                    id: 'footer-nav-link-checkout',
                    title: 'checkout',
                    route: '/checkout'
                },
            ]
        },
    ],
    social: [
        {
            id: 'footer-nav-link-social-twitter',
            image: IconTwitter,
            route: 'twitter'
        },
        {
            id: 'footer-nav-link-social-pinterest',
            image: IconPinterest,
            route: 'pinterest'
        },
        {
            id: 'footer-nav-link-social-insta',
            image: IconInsta,
            route: 'insta'
        },
        {
            id: 'footer-nav-link-social-Facebook',
            image: IconFacebook,
            route: 'Facebook'
        },
    ]
}