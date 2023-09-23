'use client';
import React from 'react'
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { setBlur } from '@/redux/features/boxSlice';
const Box = () => {
  const show = useSelector((state: RootState) => state.boxSlice.show)
  const title = useSelector((state: RootState) => state.boxSlice.title)
  const img = useSelector((state: RootState) => state.boxSlice.img)
  const desc = useSelector((state: RootState) => state.boxSlice.description)
  
  const dispatch = useDispatch()

  return (
    <div className='max-col:hidden'>
       {show && <div className='relative z-[100] '>
       <div className='fixed overflow-hidden z-[100] border-4 dark:border-[#444444] border-[white] hover:border-green-500 dark:hover:border-green-500 w-[750px]  h-[500px] rounded-[25px]' style={{left: 'calc(50vw - 375px)', top: 'calc(50vh - 240px)'}}>
                <div className='w-full h-full absolute opacity dark:bg-[black] bg-[#444444]'></div>
                <div className='relative h-16 bg-[#222222] flex items-center justify-center font-bold text-[silver] text-2xl'>
                <div className='h-12 w-12 border-2 border-[silver] bg-[#666666] flex items-center justify-center rounded-full mr-2 overflow-hidden'><img className={title} src={img} /></div><h1 className='mr-12'>{title}</h1>
                </div>
                <p className='relative mx-3 my-2 text-white'>{desc}</p>
            </div>

            <div onClick={() => dispatch(setBlur(0))} className='fixed h-full w-full bg-[black] top-0 left-0 z-50 opacity'></div>
            </div>}
    </div>
  )
}

export default Box