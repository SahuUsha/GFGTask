import React from 'react'
import image from '../../assets/image.png';
import grayArrow from '../../assets/grayArrow.png';
import blackArrow from '../../assets/blackArrow.png';

const About = () => {
  return (
    <div className='lg:px-20   lg:my-24 my-14 '>
        <div className='lg:px-16 lg:absolute md:absolute '>
            <div className='  px-5  '>
            <div className=' flex flex-col lg:flex-row inline-flex   py-[0.7rem] items-center bg-[#F0F0F0] px-8 rounded-full'>
          <h1 className='font-inter font-normal text-base leading-[1.8rem] tracking-wider'>Introducing of new and exciting game development</h1>
          <div className='flex flex-row items-center'>

          <li className='text-[#7a7a7a] lg:px-6 px-3 font-semibold'>Read more</li>
          <img src={grayArrow} className='lg:h-[1rem] h-[0.8rem]' alt="" />
          </div>
            </div >
               <h1 className='lg:text-5xl sm:text-4xl md:text-4xl font-semibold lg:w-[45rem] md:w-[30rem] sm:w-[15rem] tracking-wider m-3 my-[2rem]'>Access the full power of Python Game Development.
               </h1>
            </div>
            <div className='font-sans lg:text-[1.7rem]  md:text-[1.4rem] px-[10rem] text-[1.3rem] text-[#636161] mb-6 lg:mb-16 font-medium leading-[38.73px] text-left lg:w-[880px] lg:h-[39px] lg:mx-6 pl-4'>
              <p>The ultimate game dev workshop for Python enthusiasts.</p>
              <p>Learn, create,  and innovate with the most versatile pl</p>
            </div>
            <div className='px-6'>
              <button className='lg:text-[1.5rem]  text-[1.2rem] md:text-[1.5rem] px-7 py-1 border-2 rounded-full flex items-center '>
                <p className='pr-4'>Get Started</p>
                <img src={blackArrow}  className='h-[1.1rem]' alt="" />
              </button>
             
            </div>
          
        </div>
    
       <img src={image} className="w-[76vw] max-w-[1294px] lg:h-[50rem]  md:h-[37rem] sm:h-[30rem] min-[640px]:h-[20rem] min-[640px]:p-0 min lg:ml-[100px] lg:mr-[20px] md:ml-[95px] ml-10 sm:ml-[40px] lg:pt-[14rem] md:pt-[16rem] sm:pt-[16rem]  flex flex-col" />
       <div
      className="p-[3px] lg:pr-[20px] flex  sm:ml-3 rounded-md "
      style={{
        background: 'linear-gradient(90deg, #39D1F9 0%, #FFB400 20%, #00827B 40%, #008AFF 60%, #FF3200 80%, #9896FF 100%)',
      }}
    >
     
    </div>
       
    </div>
  )
}

export default About
