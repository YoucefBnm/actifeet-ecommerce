import { motion } from "framer-motion";
import { useScrollAnimation } from "@/libs/motion/motion.scroll";
import { ReactNode } from "react";

interface StaggerContainerProps {
    direction?: number;
    children: ReactNode,
    style?: string
}

const StaggerContainer = ({ direction, children, style }:StaggerContainerProps) => {

    const { targetRef, isInView } = useScrollAnimation()

    return (
        <motion.div
            className={style}
            transition={{
                staggerChildren: .4,
                staggerDirection: direction
            }}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
        >
            {children}
            <div ref={targetRef} />
        </motion.div>
    )
}

export default StaggerContainer