import React from 'react'
import arrow from '../../assets/arrow.png';
import fillgreen from '../../assets/fillgreen.png';
import HalfCirle from '../../assets/HalfCircle.png';
import About from '../../assets/About.png';
import Smile from '../../assets/smile.png';


const PyHack = () => {
  return (
    <div className=' lg:pl-19 lg:mt-[7.5rem] lg:ml-[10rem] ml-3 pr '>
      <div>
        <h1 className='lg:text-[2.5rem] md:text-[2.5rem] text-[1.6rem] tracking-tigher   font-semibold font-inter m-2'>About PyHack</h1>
        <div>
            <p className='text-neutral-600 lg:text-2xl  md:text-2xl sm:text-xl  font-medium p-1 flex flex-wrap lg:w-[40rem]  '>PyHack is a dynamic, community-driven workshop designed to teach game development using Python.</p>
        </div>
        <button className='flex  border-b-2 lg:mt-6 mt-3 mb-4 lg:mb-[4.5rem] border-neutral-500  '>Learn More 
            <img src={arrow} className='h-[0.9rem] rounded-2xl ml-4 mt-[0.35rem] mb-3
           ' alt="" />
        </button>
      </div>
      <div className='flex flex-col lg:flex-row  md:px-20 md:items-center gap-6  '>
        <img src={About} className='lg:h-[26rem] md:h-[25rem] ' alt="" />
        <div className='flex flex-col gap-6 '>
            <div className='h-[13rem] lg:w-[25rem]  rounded-3xl  overflow-hidden'>     
                <h1 className='font-semibold px-5 mt-4'>101%</h1>
                <p className='text-neutral-600 px-5'>Boost in python game dev skills</p>
                
            
                <img src={fillgreen}  className='h-[5.5rem] absolute ml-[8.55rem] mt-7 ' alt="" />
            <img src={HalfCirle} className='h-[8rem]  object-cover mt-7' alt="" />
            </div>
            
            <img src={Smile} className='h-[13rem] rounded-2xl' alt="" />
        </div>
      </div>
    </div>
  )
}
// w-[18rem] 
export default PyHack
