import React from 'react'
import graygfglogo from '../../assets/graygfglogo.png';
import text from '../../assets/text.png';
import instagram from '../../assets/instagram.png';
import xtreme from '../../assets/xtreme.png';
import github from '../../assets/github.png';
import discord from '../../assets/discord.png';

const Footer = () => {
  return (
    <div>
    <div className='bg-[#F7F7F6] font-inter py-8 px-10 flex flex-col mt-16 lg:mt-24 lg:flex-row justify-between rounded-2xl' >
      <div className='lg:w-[37rem]   '>
        <div className='flex items-center  '>
            <img src={graygfglogo} className='h-[2.45rem]' alt="" />
            <img src={text} className='h-[1.3rem] px-5' alt="" />
        </div>
        <div className='lg:my-[5.7rem] my-9 pl-5'>
            <h1 className='text-[#636363] text-sm'>
            PyHack provides a wide range of resources and hands-on experience to help you master Python-based game development. Explore new techniques, share your creations, and collaborate with fellow developers. Whether you're looking to build indie games or start a career in the gaming industry, PyHack is the place to begin
            </h1>
        </div>
        <div className='flex gap-2 px-3 sm:p-3'>
            <img src={instagram} className='h-[1.2rem]' alt="" />
            <img src={xtreme} className='h-[1.2rem]' alt="" />
            <img src={discord} className='h-[1.2rem]' alt="" />
            <img src={github} className='h-[1.2rem]' alt="" />
        </div>
      </div>
      <div className='flex  gap-16'>
        <div >
        <h1 className='text-[] font-bold ' >Resources</h1>
        <ul className='text-[#8F8E8E] text-sm '>
            <li className=' my-2 '>Brand</li>
            <li className='my-2 '>FAQ</li>
            <li className=' my-2 '>Help & Support</li>
            <li className='my-2 '>Governance</li>
        </ul>
        </div>
        <div>
        <h1 className=' font-bold ' >Developers</h1>
        <ul className='text-[#8F8E8E] '>
            <li className='my-2'>Techanical Paper</li>
            <li className='my-2'>Security</li>
            <li className='my-2'>Game Design</li>
      
        </ul>
        </div>
        <div>
        <h1 className=' font-bold ' >Company</h1>
        <ul className='text-[#8F8E8E] '>
            <li className='my-2'>Brand</li>
            <li className='my-2'>FAQ</li>
            <li className='my-2'>Help & Support</li>
            <li className='my-2'>Governance</li>
        </ul>
        </div>
      </div>
    </div>
    <div className='mb-[4rem]'>
      <div
      className="p-[3px] m-2 rounded-md"
      style={{
        background: 'linear-gradient(90deg, #39D1F9 0%, #FFB400 20%, #00827B 40%, #008AFF 60%, #FF3200 80%, #9896FF 100%)',
      }}
    >
     
    </div>
      <div
      className="p-[3px] m-2 mx-12 opacity-60 rounded-md"
      style={{
        background: 'linear-gradient(90deg, #39D1F9 0%, #FFB400 20%, #00827B 40%, #008AFF 60%, #FF3200 80%, #9896FF 100%)',
      }}
    >
     
    </div>
      <div
      className="p-[3px] m-2 mx-24  opacity-35 rounded-md"
      style={{
        background: 'linear-gradient(90deg, #39D1F9 0%, #FFB400 20%, #00827B 40%, #008AFF 60%, #FF3200 80%, #9896FF 100%)',
      }}
    >
     
    </div>
    </div>
    </div>
  )
}

export default Footer
