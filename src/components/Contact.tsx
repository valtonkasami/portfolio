import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faDiscord } from '@fortawesome/fontawesome-free-brands'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Contact = () => {

    const faPropIcon = faInstagram as IconProp;
    const faPropIcon2 = faDiscord as IconProp;

  return (
    <div id='contact' className='flex justify-center mx-2'>
        <div className='w-[1030px] dark:bg-[black] bg-green-500 py-10 rounded-[20px] px-8 mb-5'>
        <div className='font-bold max-ed:text-center'>

            <h1 className='text-xl dark:text-green-500 text-green-100'>CONTACT</h1>
            <h1 className='text-3xl'>Feel free to contact me anytime!</h1>

        </div>

        <div className='flex max-ed:justify-center'>
        <div className='mt-10 grid grid-cols-3 max-con:grid-cols-2 max-ed:grid-cols-1 gap-4'>

            <a href='mailto:valton__@outlook.com' target='blank'><div className='flex items-center dark:bg-[#222222] bg-green-400 dark:hover:border-green-500 hover:border-green-200 w-[280px] px-2 py-2 border-2 border-[#444444] rounded-[15px]'>
                <div className='h-12 w-12 dark:bg-[#333333] bg-green-200 border-2 border-[#888888] flex items-center justify-center mr-3 rounded-full text-green-500'><FontAwesomeIcon className='text-2xl' icon={faMailForward}/></div>
                <div>
                <h1 className='font-bold dark:text-green-500'>Email</h1>
                <p className='font-medium dark:text-[silver] '>valton__@outlook.com</p>
                </div>
            </div></a>

            <a href='https://www.instagram.com/valtonkasami/' target='blank'><div className='flex items-center dark:bg-[#222222] bg-green-400 w-[280px] px-2 py-2 border-2 hover:border-green-200 border-[#444444] dark:hover:border-green-500 rounded-[15px]'>
                <div className='h-12 w-12 dark:bg-[#333333] bg-green-200 border-2 border-[#888888] flex items-center justify-center mr-3 rounded-full text-green-500'><FontAwesomeIcon className='text-3xl' icon={faPropIcon}/></div>
                <div>
                <h1 className='font-bold dark:text-green-500'>Instagram</h1>
                <p className='font-medium dark:text-[silver]'>@valtonkasami</p>
                </div>
            </div></a>

            <a href='https://discord.gg/BU8jjSn58k' target='blank'><div className='flex items-center dark:bg-[#222222] bg-green-400 w-[280px] px-2 py-2 border-2 border-[#444444] hover:border-green-200 dark:hover:border-green-500 rounded-[15px]'>
                <div className='h-12 w-12 dark:bg-[#333333] bg-green-200 border-2 border-[#888888] flex items-center justify-center mr-3 rounded-full text-green-500'><div className='rounded-full flex items-center justify-center h-9 w-9 overflow-hidden'><FontAwesomeIcon className='text-5xl mt-1' icon={faPropIcon2}/></div></div>
                <div>
                <h1 className='font-bold dark:text-green-500'>Discord</h1>
                <p className='font-medium dark:text-[silver]'>Join My Server</p>
                </div>
            </div></a>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact