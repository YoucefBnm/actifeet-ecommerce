import { useRef } from 'react';
import {Hero, TextAnimated} from '../../components'

import { motion, useInView } from 'framer-motion';

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025
    }
  }
};

const headings = [
  {text: 'unleash your potential'},
  {text: 'reach new heights'}

]
const Home = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <>
      <Hero />
    </>
  )
}

export default Home