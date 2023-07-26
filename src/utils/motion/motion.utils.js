export const fadeEffect = {
    hidden: { opacity: 0 },
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
            staggerChildren: .2,
            delayChildren: .4
        }
    }
}

export const navMobileVariants = {
    hidden: {
        x: '110%',
        transition: { duration: 0.2 }
    },
    visible: {
        x: 0,
        transition: { type: "spring", stiffness: 200, damping: 30 }

    }
}

export const textContainerVariants = {
    visible: {
        transition: {
          staggerChildren: .3,
          delayChildren: .6
        }
    }
}
export const textAnimationVariants = {
    hidden: {
        y: "100%",
        opacity: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
      },
    visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
  }
}