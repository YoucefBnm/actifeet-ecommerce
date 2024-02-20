import { DropdownMenImage, DropdownSportsImage, DropdownWomenImage } from "@/assets";

export const navbarLinks = [
    {
        id: 'nav-link-dropdown-men',
        title: 'men',
        submenu: [
            {
                mainTitle: 'men',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/men'
                    }
                ]
            },
            {
                mainTitle: 'collections',
                links: [
                    {
                        title: 'sale',
                        route: '/shop/men/badge/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/men/badge/new',
                    },
                    {
                        title: 'best seller',
                        route: '/shop/men/badge/best seller'
                    },
                ]
            },
            {
                mainTitle: 'sports',
                links: [
                    {
                        title: 'running',
                        route: '/shop/men/category/running'
                    },
                    {
                        title: 'cross training',
                        route: '/shop/men/category/cross training',
                    },
                    {
                        title: 'climbing',
                        route: '/shop/men/category/climbing'
                    },
                    {
                        title: 'hiking',
                        route: '/shop/men/category/hiking'
                    }
                ]
            },
            {
                mainTitle: 'brands',
                links: [
                    {
                        title: 'adidas',
                        route: '/shop/men/brand/adidas'
                    },
                    {
                        title: 'altra',
                        route: '/shop/men/brand/altra'
                    },
                    {
                        title: 'asics',
                        route: '/shop/men/brand/asics'
                    },
                    {
                        title: 'brooks',
                        route: '/shop/men/brand/brooks'
                    },
                    {
                        title: 'columbia',
                        route: '/shop/men/brand/columbia'
                    },
                    {
                        title: 'nike',
                        route: '/shop/men/brand/nike'
                    },
                    {
                        title: 'salomon',
                        route: '/shop/men/brand/salomon'
                    },
                    {
                        title: 'scarpa',
                        route: '/shop/men/brand/scarpa'
                    },
                    {
                        title: 'under armour',
                        route: '/shop/men/brand/under armour'
                    },
                ]
            }
        ],
        ctaImage: DropdownMenImage
    },
    {
        id: 'nav-link-dropdown-women',
        title: 'women',
        submenu: [
            {
                mainTitle: 'women',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/women'
                    }
                ]
            },
            {
                mainTitle: 'collections',
                links: [
                    {
                        title: 'sale',
                        route: '/shop/women/badge/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/women/badge/new',
                    },
                    {
                        title: 'best seller',
                        route: '/shop/women/badge/best seller'
                    },
                ]
            },
            {
                mainTitle: 'sports',
                links: [
                    {
                        title: 'running',
                        route: '/shop/women/category/running'
                    },
                    {
                        title: 'cross training',
                        route: '/shop/women/category/cross training',
                    },
                    {
                        title: 'climbing',
                        route: '/shop/women/category/climbing'
                    },
                    {
                        title: 'hiking',
                        route: '/shop/women/category/hiking'
                    }
                ]
            },
            {
                mainTitle: 'brands',
                links: [
                    {
                        title: 'adidas',
                        route: '/shop/women/brand/adidas'
                    },
                    {
                        title: 'altra',
                        route: '/shop/women/brand/altra'
                    },
                    {
                        title: 'asics',
                        route: '/shop/women/brand/asics'
                    },
                    {
                        title: 'brooks',
                        route: '/shop/women/brand/brooks'
                    },
                    {
                        title: 'columbia',
                        route: '/shop/women/brand/columbia'
                    },
                    {
                        title: 'new balance',
                        route: '/shop/women/brand/new balance'
                    },
                    {
                        title: 'salomon',
                        route: '/shop/women/brand/salomon'
                    },
                    {
                        title: 'la sportiva',
                        route: '/shop/women/brand/la sportiva'
                    },
                    {
                        title: 'under armour',
                        route: '/shop/women/brand/under armour'
                    },
                ]
            }
        ],
        ctaImage: DropdownWomenImage
    },
    {
        id: 'nav-link-dropdown-sports',
        title: 'sports',
        submenu: [
            {
                mainTitle: 'cross training',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/category/cross training'
                    },
                    {
                        title: 'men',
                        route: '/shop/men/category/cross training'
                    },
                    {
                        title: 'women',
                        route: '/shop/women/category/cross training'
                    },
                    {
                        title: 'sale',
                        route: '/shop/category/cross training/badge/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/category/cross training/badge/new'
                    },
                ]
            },


            {
                mainTitle: 'running',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/category/running'
                    },
                    {
                        title: 'men',
                        route: '/shop/men/running'
                    },
                    {
                        title: 'women',
                        route: '/shop/women/running'
                    },
                    {
                        title: 'sale',
                        route: '/shop/category/running/badge/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/category/running/badge/new'
                    },
                ]
            },

            {
                mainTitle: 'climbing',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/category/climbing'
                    },
                    {
                        title: 'men',
                        route: '/shop/men/category/climbing'
                    },
                    {
                        title: 'women',
                        route: '/shop/women/category/climbing'
                    },
                    {
                        title: 'sale',
                        route: '/shop/category/category/climbing/badge/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/category/category/climbing/badge/new'
                    },
                ]
            },

            {
                mainTitle: 'hiking',
                links: [
                    {
                        title: 'shop all',
                        route: '/shop/category/hiking'
                    },
                    {
                        title: 'men',
                        route: '/shop/men/category/hiking'
                    },
                    {
                        title: 'women',
                        route: '/shop/women/category/hiking'
                    },
                    {
                        title: 'sale',
                        route: '/shop/category/hiking/badge/sale'
                    },
                    {
                        title: 'new',
                        route: '/shop/category/hiking/badge/new'
                    },
                ]
            },
        ],
        ctaImage: DropdownSportsImage
    },
    {
        id: 'nav-link-main-best-seller',
        title: 'best seller',
        route: '/shop/badge/best seller'
    },
    {
        id: 'nav-link-main-new',
        title: 'new',
        route: '/shop/badge/new',
    },
    {
        id: 'nav-link-main-sale',
        title: 'sale',
        route: '/shop/badge/sale',
    },
]

