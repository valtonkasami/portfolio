'use client';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


interface BlurBProps {
    children: ReactNode;
}

const BlurB: React.FC<BlurBProps> = ({ children }) => {
  const blur = useSelector((state: RootState) => state.boxSlice.blur)
 
  return (
    <div className={blur}>
        {children}
    </div>
  )
}

export default BlurB