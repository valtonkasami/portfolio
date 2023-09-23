'use client';
import React from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux'
import { setBlur } from '@/redux/features/boxSlice';

const Buttonz = () => {
  const dispatch = useDispatch()

  return (
    <div>

        <div className='flex flex-col items-center max-col:hidden'>
            <div className='h-[340px] w-[330px] border-green-500 border-4 flex items-center justify-center rounded-[40px]'>
                
                <div className='flex justify-center py-1  h-[310px] w-[300px] dark:bg-[#333333] bg-[silver] rounded-[30px]'>

                    <div className='grid grid-cols-3 gap-x-4 h-full items-center'>

                    <div onClick={() => {dispatch(setBlur('html')); dispatch(setBlur(1))}} className='h-20 w-20 border-4 dark:border-[#777777]  hover:border-green-500 dark:hover:border-green-500 dark:active:bg-green-950 active:bg-green-300 cursor-pointer rounded-full dark:bg-[#555555] bg-[#ECECEC] border-[#999999] flex items-center justify-center'><img className='h-12 mt-1 ' src='html.png'/> </div>
                    <div onClick={() => {dispatch(setBlur('css')); dispatch(setBlur(1))}} className='h-20 w-20 border-4 dark:border-[#777777] hover:border-green-500 dark:hover:border-green-500 dark:active:bg-green-950 active:bg-green-300 cursor-pointer  rounded-full dark:bg-[#555555] bg-[#ECECEC] flex items-center border-[#999999] justify-center'><img className='h-12 mt-1 ' src='css.png'/> </div>
                    <div onClick={() => {dispatch(setBlur('javascript')); dispatch(setBlur(1))}} className='h-20 w-20 border-4 dark:border-[#777777] hover:border-green-500 dark:hover:border-green-500 dark:active:bg-green-950 active:bg-green-300 cursor-pointer rounded-full dark:bg-[#555555] bg-[#ECECEC] border-[#999999] flex items-center justify-center'><img className='h-[55px]   mt-1.5' src='javascript.png'/> </div>

                    <div onClick={() => {dispatch(setBlur('redux')); dispatch(setBlur(1))}} className='h-20 w-20 border-4 dark:border-[#777777] hover:border-green-500 dark:hover:border-green-500 dark:active:bg-green-950 active:bg-green-300 cursor-pointer rounded-full dark:bg-[#555555] bg-[#ECECEC] border-[#999999] flex items-center justify-center'><img className='h-[54px] mt-[1px] drop-shadow-[0_0px_1px_rgba(0,0,0,0.6)] ' src='redux.png'/> </div>
                    <div onClick={() => { dispatch(setBlur('react')); dispatch(setBlur(1))}} className='h-20 w-20 border-4 dark:border-[#777777] hover:border-green-500 dark:hover:border-green-500 dark:active:bg-green-950 active:bg-green-300 cursor-pointer  rounded-full dark:bg-[#555555] bg-[#ECECEC] border-[#999999] flex items-center justify-center'><img className='h-14 ' src='react.png'/> </div>
                    <div onClick={() => {dispatch(setBlur('next')); dispatch(setBlur(1))}} className='h-20 w-20 border-4 dark:border-[#777777] hover:border-green-500 dark:hover:border-green-500 dark:active:bg-green-950 active:bg-green-300 cursor-pointer   rounded-full dark:bg-[#555555] bg-[#ECECEC] border-[#999999] flex items-center justify-center'><div className='border- border-[silver] rounded-full'><img className='h-14 dark:border-4 border-2 rounded-full bg-[#333333] border-[#999999] dark:border-[#333333]' src='next.png'/></div> </div>

                    <div onClick={() => {dispatch(setBlur('node')); dispatch(setBlur(1))}} className='h-20 w-20 border-4 dark:border-[#777777] hover:border-green-500 dark:hover:border-green-500  dark:active:bg-green-950 active:bg-green-300 cursor-pointer rounded-full dark:bg-[#555555] bg-[#ECECEC] border-[#999999] flex items-center justify-center'><img className='h-14 ' src='node.png'/> </div>
                    <div onClick={() => {dispatch(setBlur('post')); dispatch(setBlur(1))}} className='h-20 w-20 border-4 dark:border-[#777777] hover:border-green-500 dark:hover:border-green-500 dark:active:bg-green-950 active:bg-green-300 cursor-pointer  rounded-full dark:bg-[#555555] bg-[#ECECEC] border-[#999999] flex items-center justify-center'><img className='h-[52px] mt-2 ' src='postgresql.png'/> </div>
                    <div onClick={() => {dispatch(setBlur('mongo')); dispatch(setBlur(1))}} className='h-20 w-20 border-4 dark:border-[#777777] hover:border-green-500 dark:hover:border-green-500 dark:active:bg-green-950 active:bg-green-300 cursor-pointer   rounded-full dark:bg-[#555555] bg-[#ECECEC] border-[#999999] flex items-center justify-center'><img className='h-14 rounded-full ' src='mongo.jpg'/> </div>

                    </div>
                </div>

            </div>
            <button className='dark:active:bg-green-950 dark:active:border-green-400 mt-4 text-xl bg-green-500 font-bold dark:bg-green-950 dark:hover:bg-[#222222] dark:border-2 border-4 border-[silver] drop-shadow active:bg-green-600  dark:border-green-500  rounded-[20px] h-14 w-[260px] dark:text-green-400 text-white'><span className='drop-shadow'>Click a Button!</span></button>
            </div>
    </div>
  )
}

export default Buttonz