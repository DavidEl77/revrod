import Link from 'next/link'
import React from 'react'
import {  Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
import Image from 'next/image'


type Props = {}

const photo = 'https://media.licdn.com/dms/image/D4D0BAQGz53_hBHy55w/company-logo_200_200/0/1684263795917?e=1696464000&v=beta&t=j6Ibr_37HDvsXGmQaVwRjX5MOlViMU-0LlSCZiVi18k'

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "We are Revrod",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles />
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={photo}
        width={200}
        height={200}
        alt="Me"
        />
        <div className='z-20'>
            <h1
            className='uppercase text-gray-500 pb-3 pl-3
            tracking-[15px]'
            >
                Welcome!
            </h1>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div className='pt-2'>
                 <Link href="#about">
                    <button className='heroButton'>About</button>
                 </Link>
            </div>
        </div>
    </div>
  )
}