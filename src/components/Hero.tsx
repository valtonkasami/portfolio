import React from 'react'
import Image from 'next/image'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { About, Buttonz } from '.';

const Hero = () => {
    const faPropIcon = faGithub as IconProp;
    const faPropIcon2 = faLinkedin as IconProp;

  return (
    <div className=' h-fit'>
        <div className='flex items-center pt-[75px] h-[100vh] max-md:h-fit justify-center w-full space-x-[120px] max-ipad:space-x-0 max-ipad:justify-between max-ipad:px-10 max-col:flex-col max-col:text-center max-col:px-[0] max-col:justify-center max-col:space-y-10'>

        <div className='max-md:mt-10'>
            
        <div className='max-col:w-full max-col:flex max-col:justify-center'>
        <div className='absolute dark:block hidden blur-[200px] dark:max-md:hidden mt-10 max-col:mr-3 w-[500px] h-[200px] max-sm:w-[300px] max-sm:ml-6 max-sm:h-[200px] bg-green-700 max-sm:bg-green-600'></div>
        <h1 className='drop-shadow relative max-sm:ml-3 text-5xl max-sm:text-3xl dark:font-[700] font-[800] text-left'>
            Front-End Focused
            <span className='block mt-3'>React Developer <span className='text-6xl max-sm:text-4xl'>👨🏻‍💻</span></span>
            </h1> </div>
            <p className='relative font-[600] dark:text-[silver] text-[#555555] drop-shadow text-lg mt-8 max-col:mx-10'>Hi, I&apos;m Valton Kasami, a Creative Front-End Focused Developer <br className='max-sm:hidden'/>
            with Full Stack Capabilitites, with a Unique & Cool Style!</p>
            <div className='max-sm:px-10 relative flex max-sm:flex-col max-sm:space-x-0 max-sm:items-center max-sm: space-x-5 max-col:justify-center max-sm:w-full'>
                <a className='max-sm:w-full' href='https://github.com/valtonkasami' target='_blank'>
            <button className='active:bg-green-950 active:border-green-400 flex items-center justify-center mt-8 text-xl font-[600] dark:font-[500] dark:bg-[#222222] bg-[silver]  dark:border-2 border-2 border-[#666666] hover:border-green-500 hover:text-green-500 rounded-[20px] h-14 w-[200px] max-sm:w-full dark:text-white'>
                <span className='drop-shadow flex items-center mt-0.5'>
                <FontAwesomeIcon className='h-6 mb-0.5 mr-2' icon={faPropIcon}/>GitHub
                </span>
            </button>
                </a>

                <a className='max-sm:w-full' href='https://www.linkedin.com/in/valtonkasami/' target='_blank'>
            <button id='forAbout' className='active:bg-green-950 active:border-green-400 flex items-center justify-center mt-8 max-sm:mt-4 text-xl dark:font-[500] font-[600] dark:bg-[#222222] bg-[silver]  dark:border-2 border-2 border-[#666666] hover:border-green-500 hover:text-green-500 rounded-[20px] h-14 w-[200px] max-sm:w-full dark:text-white'>
                <span className='drop-shadow flex items-center mt-0.5'>
                <FontAwesomeIcon className='h-6 mb-0.5 mr-2' icon={faPropIcon2}/>LinkedIn
                </span>
            </button>
                </a>
            </div>
    </div>
        <Buttonz />
        </div>
        <About />
    </div>
  )
}

export default Hero