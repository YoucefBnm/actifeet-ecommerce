export const fadeEffect = {
    hidden: { opacity: 0 },
    transition: { 
        type: 'spring',
        delaty: .3, 
        ease: 'linear', 
    },
    visible: { opacity: 1 }
}

export const heightAnimationVariants = {
    hidden: {
        opacity: 0,
        scaleY: 0,
        originY: 0,
    },
    visible: {
        opacity: 1,
        scaleY: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 35,
            delay: .3,
            staggerChildren: .3,
            delayChildren: .6
        }
    }
}