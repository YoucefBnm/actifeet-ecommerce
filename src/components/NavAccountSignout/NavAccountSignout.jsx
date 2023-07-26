import { motion } from "framer-motion"
import { heightAnimationVariants } from "../../utils/motion/motion.utils"
import CustomBtn from "../CustomBtn/CustomBtn"
import { signOutUser } from "../../utils/firebase/firebase.user"

const NavAccountSignout = ({ isOpen, handleMouseLeave }) => {
  return (
    <motion.div
        className="navSignout"
        style={{
            position: 'absolute',
            top: 'calc(100% + 15px)',
            left: '-10rem',
            maxWidth: '30rem',
            borderTop: '1px solid #F2F1F4'
        }}
        onMouseLeave={handleMouseLeave}
        initial='hidden'
        variants={heightAnimationVariants}
        animate={ isOpen ? 'visible' : 'hidden'}
    >
        <div className="navSignout__container d--flex d--flex-col d--gap-3 pad--x-2 pad--y-3 shadow--sm">
            <CustomBtn
                btnType={button}
                btnStlye='btn btn--shadow btn--shadow-primary'
                text='Sign Out'
                handleClick={signOutUser}
            />
            <CustomBtn
                btnType='button'
                btnStlye='btn btn--bg bg--dark'
                text='Go To Checkout'
                route='/checkout'
            />
        </div>
    </motion.div>
  )
}

export default NavAccountSignout