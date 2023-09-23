import React from 'react'
import { PROJECTS } from '@/data/data';
import Project from './project';

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col relative justify-center  pt-5 mt-16 max-md:mt-5'>
        <div className='absolute w-full h-full  blur-[200px] opacity bg-green-400 dark:bg-green-800'></div>
        <div className='text-center flex flex-col items-center'>
            <h1 className='text-green-500 font-bold text-xl relative'>PORTFOLIO</h1>
            <h1 className='text-3xl max-ex:text-2xl font-bold relative'>Each project is a unique<br className='pr:hidden'/> piece of development</h1>
        </div>

        <div className='relative flex items-center mt-10 max-ex:mt-5 flex-col-reverse'>

          {PROJECTS.map((project, index) => (
            <Project key={index} data={project}/>
          ))}

        </div>

    </div>
  )
}

export default Projects