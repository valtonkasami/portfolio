import React from 'react'
import { ThemeSwitcher, NavbarSwitch, AboutButton } from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons' 
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Navbar = () => {
  const faPropIcon = faMoon as IconProp;

  return (
    <div>
        
        <div className='fixed dark:border-b-2 dark:border-[#333333] border-[silver] z-50 w-full h-[75px] overflow-hidden'>
          
          
        <div className=''>
        <div className='bg-[#222222] w-full h-[73.5px] fixed dark:block hidden' style={{opacity: 0.5}}></div>
        <div className='bg-[white] w-full h-[73.5px] fixed dark:hidden drop-shadow-[0_0px_5px_rgba(0,0,0,0.2)]'></div>
          <div className='h-[73.5px] relative mx-12 max-sm:mx-5 flex items-center justify-between'>
          <a href='#'><h1 className='text-xl font-bold hover:text-green-500'>Valton Kasami</h1></a>

          <div className='flex text-xl font-[550] dark:text-[silver] space-x-8 max-col:space-x-3 items-center'>
            <a className='max-col:hidden' href='#'><h1 className='hover:text-green-500'>Home</h1></a>
            <AboutButton />
            <a className='max-col:hidden' href='#projects'><h1 className='hover:text-green-500'>Projects</h1></a>
            <a className='max-col:hidden' href='#contact'><h1 className='hover:text-green-500'>Contact</h1></a>
            <ThemeSwitcher/>
            <NavbarSwitch />
          </div>

          </div>

        </div>

        

        </div>
        
    </div>
  )
}

export default Navbar