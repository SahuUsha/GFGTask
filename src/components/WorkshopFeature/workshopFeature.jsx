import React from 'react'
import orangeWF from '../../assets/orangeWF.png';
import blueWF from '../../assets/blueWF.png';
import purpleWF from '../../assets/YellowWF.png';
import purple from '../../assets/purple.png';


const WorkshopFeature = () => {
  return (
    <div className=' lg:w-[1294px] lg:ml-[10rem]  '>
       <div className='px-2 pb-11  '>
        <h1 className='lg:text-[2.5rem] md:text-[2.5rem] text-[1.8rem] tracking-tigher  md:ml-10 font-semibold font-inter'>Workshop Features</h1>
       </div>
       <div className='flex flex-col lg:flex-row md:items-center lg:flex-wrap lg:gap-6  md:gap-6 gap-3'>
     
       <div  className=' lg:w-[35rem] md:w-[35rem] sm:mx-5 bg-[#FAFAFA] rounded-2xl'>
        <div className='flex justify-end' >
            <img src={orangeWF} className='h-[11rem] ' alt="" />
        </div>
        <div className='p-7 mt-[1.5rem]'>
            <h1 className='text-[1.8rem]  font-semibold py-2'>Game Mechanics</h1>
            <p  className='text-neutral-600  font-medium'>Master Physics, collision detection,AI, and game loops.</p>
        </div>
       </div>
       <div  className=' lg:w-[35rem] md:w-[35rem] sm:mx-5 bg-[#FAFAFA] rounded-2xl'>
        <div className='flex justify-end' >
            <img src={blueWF} className='h-[11rem] ' alt="" />
        </div>
        <div className='p-7 mt-[1.5rem]'>
            <h1 className='text-[1.8rem]  font-semibold py-2'>Visual Effect</h1>
            <p  className='text-neutral-600  font-medium'>Create 2D/3D graphics and animations.</p>
        </div>
       </div>
       <div  className=' lg:w-[35rem] md:w-[35rem] sm:mx-5  bg-[#FAFAFA] rounded-2xl'>
        <div className='flex justify-end' >
            <img src={purpleWF} className='h-[11rem] ' alt="" />
        </div>
        <div className='p-7 mt-[1.5rem]'>
            <h1 className='text-[1.8rem] font-semibold py-2'>Game Balancing</h1>
            <p  className='text-neutral-600  font-medium'>Balance difficulty and progression.</p>
        </div>
       </div>
       <div  className=' lg:w-[35rem] md:w-[35rem] sm:mx-5 bg-[#FAFAFA] rounded-2xl'>
        <div className='flex justify-end' >
            <img src={purple} className='h-[11rem] ' alt="" />
        </div>
        <div className='p-7 mt-[1.5rem]'>
            <h1 className='text-[1.8rem] font-semibold py-2'>Cross-Platform Dev</h1>
            <p  className='text-neutral-600  font-medium'>Deploy games on PC, web, and mobile.</p>
        </div>
       </div>
       </div>
    </div>
  )
}

export default WorkshopFeature
