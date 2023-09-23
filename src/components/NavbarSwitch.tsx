'use client';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons' 
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useDispatch } from 'react-redux'
import { setSeeMoreAll } from '@/redux/features/aboutSlice';

const NavbarSwitch = () => {
    const faPropIcon = faBars as IconProp;
    const [ show, setShow ] = useState('hidden')

    const dispatch = useDispatch()


  return (
    <div className='col:hidden'>
        <div onClick={() => {setShow('hidden')}} className={`${show} z-10 fixed h-full w-full left-0 top-0`}></div>

<button onClick={() => {setShow('')}} className='col:hidden'><div className='dark:bg-[#555555] bg-[silver] hover:bg-green-500 dark:hover:bg-green-500 hover:text-[white] cursor-pointer rounded-full h-10 w-10 flex justify-center items-center'><FontAwesomeIcon icon={faPropIcon}/></div></button>

    <div className={`${show} z-20 fixed flex flex-col items-center justify-center text-2xl space-y-[6px] dark:bg-[#333333] bg-[#f5f5f5] border-4 border-green-500 rounded-[30px] right-[18px] top-24 h-[200px] w-[200px]`}>
        <a onClick={() => {setShow('hidden')}} href='#'><h1>Home</h1></a>
        <hr className='w-full dark:border-[#555555] border-[silver] border-2'/>
        <a onClick={() => {setShow('hidden'); dispatch(setSeeMoreAll())}} href='#forAbout'><h1>About</h1></a>
        <hr className='w-full dark:border-[#555555] border-[silver] border-2'/>
        <a onClick={() => {setShow('hidden')}} href='#projects'><h1>Projects</h1></a>
        <hr className='w-full dark:border-[#555555] border-[silver] border-2'/>
        <a onClick={() => {setShow('hidden')}} href='#contact'><h1>Contact</h1></a>
    </div>

    <div className={`${show} fixed opacity h-full w-full bg-black top-[75px] left-0`}></div>

    </div>
  )
}

export default NavbarSwitch