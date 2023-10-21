'use client';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs } from '@fortawesome/fontawesome-free-brands'
import { faPenClip, faPeopleGroup, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { setSeeMore1, setSeeMore12, setSeeMore13, setSeeMore14 } from '@/redux/features/aboutSlice';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/redux/store';

const About = () => {
    const faPropIcon = faReact as IconProp;
    const faPropIcon2 = faNodeJs as IconProp;
    const faPropIcon3 = faPenClip as IconProp;
    const faPropIcon4 = faPeopleGroup as IconProp;
    const faPropIcon5 = faArrowDown as IconProp;
    const faPropIcon6 = faArrowUp as IconProp;

    const dispatch = useDispatch();
    const seeMore1 = useSelector((state: RootState) => state.aboutSlice.seeMore)
    const seeMore12 = useSelector((state: RootState) => state.aboutSlice.seeMore2)
    const seeMore13 = useSelector((state: RootState) => state.aboutSlice.seeMore3)
    const seeMore14 = useSelector((state: RootState) => state.aboutSlice.seeMore4)
    const seeLess1 = useSelector((state: RootState) => state.aboutSlice.seeLess)
    const seeLess12 = useSelector((state: RootState) => state.aboutSlice.seeLess2)
    const seeLess13 = useSelector((state: RootState) => state.aboutSlice.seeLess3)
    const seeLess14 = useSelector((state: RootState) => state.aboutSlice.seeLess4)
    
  return (
    <div id='about' className=''>
        <div className=' flex flex-col items-center'>
            <div className=''>
        <h1 className=' text-green-500 font-bold  text-xl max-md:text-lg max-md:hidden'>ABOUT ME</h1>
        <h1 className=' text-3xl font-bold  mb-5 max-md:text-2xl mr-[680px] max-twoz:mr-[330px] max-md:hidden'>Learn more about me</h1>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center relative'>
            

            <div className='flex grid-cols-3 gap-x-5 gap-y-5 max-twoz:grid-cols-2 max-md:flex-col max-sm:w-full max-sm:px-5'>    
            
            <div id='1' className='relative dark:bg-transparent bg-[#eeeeee] pt-3 overflow-hidden sm:w-[330px] h-fit rounded-[20px]  border-[#666666] hover:border-green-500 border-2'>
                <div className='px-3'><div className='absolute hidden dark:max-md:hidden dark:block bg-green-950 h-full w-full top-0 left-0 blur-[100px]'></div>
                <h1 className='relative dark:font-[500] font-bold flex items-center'><FontAwesomeIcon className='text-2xl mr-2 pb-[2px]' icon={faPropIcon}/>Web Developer</h1>
                <p className='relative dark:text-[silver] text-[#555555] mt-4 dark:font-[500] font-[600]'>Modern Web Developer who created many Cool Websites!</p>
                
                {seeMore1 && <p className='relative dark:font-[500] font-[600]'>
                I&apos;m an exceptionally creative and highly skilled web developer. My expertise shines through in my ability to craft websites that are not only visually stunning but also functionally powerful.
                </p>}
                
                </div>
                {seeLess1 && <div className='relative px-3 pb-[10px] text-white'><button onClick={() => {dispatch(setSeeMore1())}} className='h-10 w-full hover:bg-green-700 mt-3 rounded-[25px] bg-green-600'><h1 className='flex justify-center items-center font-medium'>See More <FontAwesomeIcon className='text-xl ml-2' icon={faPropIcon5}/></h1></button></div>}
                {seeMore1 && <div className='relative px-3 pb-[10px] text-white'><button onClick={() => {dispatch(setSeeMore1())}} className='h-10 w-full hover:bg-green-700 mt-3 rounded-[25px] bg-green-600'><h1 className='flex justify-center items-center font-medium'>See Less <FontAwesomeIcon className='text-xl ml-2' icon={faPropIcon6}/></h1></button></div>}
            </div>

            <div id='2' className='relative dark:bg-transparent bg-[#eeeeee] pt-3 overflow-hidden sm:w-[330px] h-fit rounded-[20px]  border-[#666666] hover:border-green-500 border-2'>
                <div className='px-3'><div className='absolute hidden dark:max-md:hidden dark:block bg-green-950 h-full w-full top-0 left-0 blur-[100px]'></div>
                <h1 className='relative dark:font-[500] font-bold flex items-center'><FontAwesomeIcon className=' text-2xl mr-2 pb-[2px]' icon={faPropIcon2}/>Full Stack Capabilitites</h1>
                <p className='relative dark:text-[silver] text-[#555555] mt-4 dark:font-[500] font-[600]'>I&apos;m a Capable & Flexible Web Developer with multiple skills!</p>

                {seeMore12 && <p className='relative dark:font-[500] font-[600]'>
                I possess the expertise to craft robust and efficient server-side code for a wide range of applications. My versatility extends to working with all kinds of databases, ensuring data integrity and structure.
                </p>}

                </div>
                {seeLess12 && <div className='relative px-3 pb-[10px] text-white'><button onClick={() => {dispatch(setSeeMore12())}} className='h-10 w-full hover:bg-green-700 mt-3 rounded-[25px] bg-green-600'><h1 className='flex justify-center items-center font-medium'>See More <FontAwesomeIcon className='text-xl ml-2' icon={faPropIcon5}/></h1></button></div>}
                {seeMore12 && <div className='relative px-3 pb-[10px] text-white'><button onClick={() => {dispatch(setSeeMore12())}} className='h-10 w-full hover:bg-green-700 mt-3 rounded-[25px] bg-green-600'><h1 className='flex justify-center items-center font-medium'>See Less <FontAwesomeIcon className='text-xl ml-2' icon={faPropIcon6}/></h1></button></div>}
            </div>

            <div id='3' className='max-twoz:hidden relative dark:bg-transparent bg-[#eeeeee] pt-3 overflow-hidden sm:w-[330px] h-fit rounded-[20px]  border-[#666666] hover:border-green-500 border-2'>
                <div className='px-3'><div className='absolute hidden dark:max-md:hidden dark:block bg-green-950 h-full w-full top-0 left-0 blur-[100px]'></div>
                <h1 className='relative dark:font-[500] font-bold flex items-center'><FontAwesomeIcon className='text-xl mr-2 pb-[2px]' icon={faPropIcon3}/>UI/UX Designer</h1>
                <p className='relative dark:text-[silver] text-[#555555] mt-4 dark:font-[500] font-[600]'>With great attention to detail, I&apos;m able to create Unique Designs!</p>
                {seeMore13 && <p className='relative dark:font-[500] font-[600]'>
                My proficiency in graphic design allows me to create captivating visuals that resonate with diverse brands. My keen eye ensures that every website I craft aligns perfectly with the needs of its audience.
                </p>}
                </div>
                {seeLess13 && <div className='relative px-3 pb-[10px] text-white'><button onClick={() => {dispatch(setSeeMore13())}} className='h-10 w-full hover:bg-green-700 mt-3 rounded-[25px] bg-green-600'><h1 className='flex justify-center items-center font-medium'>See More <FontAwesomeIcon className='text-xl ml-2' icon={faPropIcon5}/></h1></button></div>}
                {seeMore13 && <div className='relative px-3 pb-[10px] text-white'><button onClick={() => {dispatch(setSeeMore13())}} className='h-10 w-full hover:bg-green-700 mt-3 rounded-[25px] bg-green-600'><h1 className='flex justify-center items-center font-medium'>See Less <FontAwesomeIcon className='text-xl ml-2' icon={faPropIcon6}/></h1></button></div>}
            </div>

            <div id='4' className='relative hidden pt-3 overflow-hidden sm:w-[330px] h-fit rounded-[20px]  border-[#666666] hover:border-green-500 border-2'>
                <div className='px-3'><div className='absolute bg-green-950 h-full w-full top-0 left-0 blur-[100px]'></div>
                <h1 className='relative font-[500] flex items-center'><FontAwesomeIcon className='text-2xl mr-2 pb-[2px]' icon={faPropIcon4}/>Team Player</h1>
                <p className='relative text-[silver] mt-4'>I&apos;m able to change my style of code in order to match the teams style.</p>

                {seeMore14 && <p className='relative'>
                You can look at my Coding Style on GitHub and you will see that my code isn&apos;t very focused on &apos;Comments&apos; to explain how everything works in great detail and in every single line of code and component... but thats only because when i code alone im free to use my own style of code which might appear messy to people but i understand it easily since its my own code, but that doesnt mean that im not capable to adapt and change my style of code to match the teams style of code. if im working on projects with a team then i will definetily match their specific style of code and their deisgn patterns, and i believe that im particulary good at communicating and understanding people, and this makes me an extremely good teammate.
                </p>}

                </div>
                <div className='relative px-3 pb-[10px] text-white'><a href='#4'><button onClick={() => {dispatch(setSeeMore14())}} className='h-10 w-full hover:bg-green-700 mt-3 rounded-[25px] bg-green-600'><h1 className='flex justify-center items-center font-medium'>See More <FontAwesomeIcon className='text-xl ml-2' icon={faPropIcon5}/></h1></button></a></div>
            </div>
            </div>

        </div>
        
    </div>
  )
}

export default About