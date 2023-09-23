'use client'
import React, {useRef, useState} from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ProjectProps {
  data: {
    name: string;
    img: string;
    createdWith: string[];
    links: {
      livedemo: string;
      github: string;
    };
    position: string;
    emoji: string;
    description: string
  };
}

const Project: React.FC<ProjectProps> = (props) => {
    const { name, img, createdWith, links, position, emoji, description } = props.data;

    const imgStyle = (name: string) => {
        if (name === 'AniStore') {
            return ''
        } else if (name === 'Vivid') {
            return 'w-12 dark:border-4 border-2 rounded-full dark:border-[#222222] border-[#444444] bg-[#444444]'
        }
    }

    const imgStyle2 = (name: string) => {
        if (name === 'AniStore') {
            return 'drop-shadow-[0_0px_1px_rgba(0,0,0,0.6)] w-11 mt-[2px]'
        } else if (name === 'Vivid') {
            return ' w-[40px] rounded-[10px] border-2 border-[silver]'
        }
    }

    const imgStyle3 = (name: string) => {
        if (name === 'AniStore') {
            return 'w-11'
        } else if (name === 'Vivid') {
            return 'drop-shadow-[0_0px_1px_rgba(0,0,0,0.6)] w-11 mt-[2px]'
        }
    }

    const imgStyle4 = (name: string) => {
        if (name === 'Vivid') {
            return 'dark:bg-[#444444] bg-green-100 max-ex:hidden rounded-full border-2 hover:border-green-500 border-[#999999] h-16 w-16 flex items-center justify-center'
        } else if (name === 'AniStore') {
            return 'h-16 w-16 max-ex:hidden'
        }
    }

    const Position = (position: any) => {
        if (position === 'reverse') {
            return 'flex-row-reverse pl-5'
        } else {
            return 'pr-5'
        }
    }
    
    const faPropIcon = faGithub as IconProp;

    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState(0);

  const getImageHeight = () => {
    if (imageRef.current) {
      const height = imageRef.current.offsetHeight;
      const cheight = containerRef.current?.offsetHeight || 0;
      setImageHeight(height - cheight + 8);
    }
  };

 

    return (
      <div className='dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)] drop-shadow mx-2'>

        <div className={`${Position(position)} py-5 overflow-hidden relative flex border-2 dark:border-[#555555] border-[#999999] h-[450px] max-pr:h-[850px] rounded-[30px] mb-10 items-center max-pr:flex-col-reverse max-pr:px-5 max-pr:py-0 max-pr:pt-5`}>
        <div className='absolute dark:bg-[black] max-md:dark:bg-green-500 max-md:dark:blur-[100px] bg-[white] opacity2 h-full w-full'></div>
        <div className='max-pr:mb-5 relative pr:px-10 pr:w-[500px] ex:w-[335px] flex flex-col items-center'>
            <h1 className='font-bold text-3xl mb-5 max-pr:hidden'>{name}  <span className='text-4xl'>{emoji}</span></h1>
            <p className='text-center dark:font-medium dark:text-[silver] text-[#555555] font-bold  max-pr:pt-5'>{description}</p>
            <div className='dark:bg-green-950 bg-green-200 px-5 flex flex-col items-left justify-center rounded-[20px] w-full h-32 border-2 dark:border-[#444444] border-[#999999] mt-5'>
                <h1 className='dark:font-[600] font-[700] drop-shadow mb-2 text-xl'>Built With</h1>
                <div className='flex space-x-3'>

                <div className='dark:bg-[#444444] bg-green-100 rounded-full border-2 hover:border-green-500 border-[#999999] h-16 w-16 flex items-center justify-center'><img className={imgStyle(name)} src={createdWith[0]}/></div>
                <div className='dark:bg-[#444444] bg-green-100 rounded-full border-2 hover:border-green-500 border-[#999999] h-16 w-16 flex items-center justify-center'><img className={imgStyle2(name)} src={createdWith[1]}/></div>
                <div className='dark:bg-[#444444] bg-green-100 rounded-full border-2 hover:border-green-500 border-[#999999] h-16 w-16 flex items-center justify-center'><img className={imgStyle3(name)} src={createdWith[2]}/></div>
                <div className={imgStyle4(name)}><img className={imgStyle3(name)} src={createdWith[3]}/></div>
                
                </div>
            </div>
            <div className='mt-5 text-xl font-[600] flex space-x-3 w-full'>
                <a className='dark:bg-green-950 bg-green-200 border-[#555555] hover:border-green-500 w-full h-[50px] border-2 rounded-[15px] flex items-center justify-center' href={links.livedemo} target='_blank'><button className=''><FontAwesomeIcon className='mr-1' icon={faBoxOpen}/> Demo</button></a>
                <a className='dark:bg-green-950 bg-green-200 border-[#555555] hover:border-green-500 w-full h-[50px] border-2 rounded-[15px] flex items-center justify-center' href={links.github} target='_blank'><button className=''><FontAwesomeIcon className='mr-[6px]' icon={faPropIcon}/> Code</button></a>
            </div>
        </div>
        <div ref={containerRef} className={`relative overflow-hidden h-full border-4 dark:border-[#444444] border-[#999999] cursor-pointer hover:border-green-500 dark:hover:border-green-500 rounded-[30px] flex items-start`}>
          <img ref={imageRef} className={`w-[500px] max-pr:w-[330px] max-ex:w-full`} src={img} alt={name} 
        style={{
            transform: `translateY(-${imageHeight}px)`, 
            transition: 'transform 2s ', 
          }}
          onMouseEnter={getImageHeight}
          onMouseLeave={() => setImageHeight(0)}
        /></div>
        <h1 className='font-bold text-3xl mb-5 pr:hidden dark:text-white text-black'>{name}  <span className='text-4xl'>{emoji}</span></h1>
        
        </div>

      </div>
    );
  };
  
  export default Project;