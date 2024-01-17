import { useInView } from "framer-motion"
import { useRef } from "react"


export const useScrollAnimation = () => {
    const targetRef = useRef(null)

    const isInView = useInView(targetRef, {
        once: true
    })

    return {
        targetRef,
        isInView
    }
}