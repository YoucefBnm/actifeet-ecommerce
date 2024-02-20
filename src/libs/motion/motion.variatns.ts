
type DirectionType = 'top' | 'bottom' | 'left' | 'right' | null


export const fadeVariants =(direction:DirectionType) => {

    return {
        hidden: {
            opacity: 0,
            x: direction==='left' ? -100 : direction==='right' ? 100 : 0,
            y: direction==='top' ? -100 : direction==='bottom' ? 100 : 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        }
    }

}

export const imageMaskVariants = {
    hidden: {WebkitMaskImage: 'repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)'},
    visible: {WebkitMaskImage: 'repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)'} 
}