import React from 'react'
import aboutImg from "../assets/about.png"
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className='nborder-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        className='my-20 text-center text-4xl'>
            À propos de  
            <span className='text-purple-300'> moi</span>
        </motion.h1>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutImg} alt="about"/>
                </div>
            </motion.div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <motion.p 
                     whileInView={{opacity: 1, x:0}}
                     initial={{opacity:0, x:100}}
                     transition={{duration:0.5}}className='my-2 max-w-xl py-6 font-light'>{ABOUT_TEXT}</motion.p>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default About