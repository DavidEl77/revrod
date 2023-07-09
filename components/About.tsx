import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-16 uppercase tracking-[20px]
        text-gray-500 text-2xl'>
            About
        </h3>


        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold tracking-[2px] max-w-3xl'>
            Unleash the power of revenue with unprecedented clarity and confidence. <br />
            Say goodbye to missed targets and wasted hours reinventing the wheel. <br />
            Revolutionize your Go-To-Market motion with our Verticalized Data & Analytics platform.
            </h4>
    
        </div>
    </motion.div>
  )
}