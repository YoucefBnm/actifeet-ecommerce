
type DirectionType = string | null

export const fadeVariants = (direction:DirectionType) => {

    return {
        hidden: {
          x: direction==='left' ? 100 : direction==='right' ? -100 : 0,
          y: direction==='top' ? -100 : direction==='bottom' ? 100 : 0,
          scale: direction==='z' ? .2 : 1,
          opacity: 0,
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        }
    }
}