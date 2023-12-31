import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'



const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(35,35,35)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-pink-200/70'>
      <Head>
        <title>Revrod | Revenue Operations</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
            cursor-pointer'
            src="https://cdn-icons-png.flaticon.com/128/1057/1057118.png" 
            alt=""
            />

          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
