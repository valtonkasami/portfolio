'use client';
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSeeMoreAll } from '@/redux/features/aboutSlice';

const AboutButton = () => {
    const dispatch = useDispatch();

  return (
    <div>

<a onClick={() => {dispatch(setSeeMoreAll())}} className='max-col:hidden' href='#about'><h1 className='hover:text-green-500'>About</h1></a>

    </div>
  )
}

export default AboutButton