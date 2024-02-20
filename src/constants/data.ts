import { CategoryClimbingImage, CategoryCrossTrainingImage, CategoryHikingImage, CategoryMenImage, CategoryRunningImage, CategoryWomenImage, CtaClimbingImage, CtaCrossTrainingImage } from "@/assets"

export const HeroContent = {
    paragraph: "Where adventure meets performance! Discover a wide range of running, climbing, and cross-training shoes designed to elevate your athletic journey, Whether you're hitting the trails, scaling new heights, or pushing your limits in the gym.",
    heading: "unleash your potential",
    route: '/shop'
}

export const heroRunningContent = {
    paragraph: "designed to enhance your running experience, whether you're a seasoned marathoner or a beginner hitting the pavement for the first time. From responsive cushioning to lightweight designs, our shoes are engineered to provide optimal support",
    heading: 'feel the thrill of run',
    route: '/shop/category/running'
}

export const ctaClimbingContent = {
    paragraph: "Experience the thrill of vertical conquest with our range of climbing shoes. Designed with precision, grip, and durability in mind, these shoes are your ultimate companion on the rock face. From bouldering to sport climbing and trad climbing, our climbing shoes offer exceptional performance, allowing you to push your limits and achieve new personal bests.",
    heading: 'reach new heights',
    imageUrl: CtaClimbingImage,
    route: '/shop/category/climbing'
}

export const ctaCrossTrainingContent = {
    paragrpah: "Our cross-training shoe collection is engineered to handle any workout, from intense gym sessions to high-intensity interval training. With superior stability, flexibility, and breathability, these shoes are designed to support your every move. Whether you're lifting weights, sprinting, or engaging in agility drills, our cross-training shoes will keep you grounded and ready for any challenge.",
    heading: 'master every movement',
    imageUrl: CtaCrossTrainingImage,
    route: '/shop/category/cross training'
}
export const heroHikingContent = {
    paragraph: 'Embark on unforgettable outdoor adventures with our range of hiking shoes. Built for durability, traction, and comfort, our hiking shoes will accompany you through rugged terrains and varying conditions. From short day hikes to multi-day treks, our hiking shoes will provide the support and protection you need to conquer the trails and immerse yourself in nature.',
    heading: 'explore the outdoors',
    route: '/shop/category/hiking'
}

export const categories = [
    {
        id: 'category-men',
        title: 'men',
        image: CategoryMenImage,
        link: '/shop/gender/men'
    },
    {
        id: 'category-women',
        title: 'women',
        image: CategoryWomenImage,
        link: '/shop/gender/women'
    },
    {
        id: 'category-running',
        title: 'running',
        image: CategoryRunningImage,
        link: '/shop/category/running'
    },
    {
        id: 'category-cross-training',
        title: 'cross training',
        image: CategoryCrossTrainingImage,
        link: '/shop/category/cross training'
    },
    {
        id: 'category-climbing',
        title: 'climbing',
        image: CategoryClimbingImage,
        link: '/shop/category/climbing'
    },
    {
        id: 'category-hiking',
        title: 'hiking',
        image: CategoryHikingImage,
        link: '/shop/category/hiking'
    },
]

export const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}