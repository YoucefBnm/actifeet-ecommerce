import { useInView } from "framer-motion"
import { useRef } from "react"


export const useScrollReveal = () => {
    const targetRef = useRef(null)

    const isInView = useInView(targetRef, {
        once: true
    })

    return {
        targetRef,
        isInView
    }
}