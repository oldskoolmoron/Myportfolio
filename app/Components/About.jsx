import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
  return (
    <div id='aboutme' className='w-full px-[12%] py-10 scroll-mt-20 flex flex-col items-center justify-center'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-10 lg:gap-20 my-10 lg:my-20'>

        <div className='w-64 sm:w-80 rounder-3xl max-w-none'>
          <Image src={assets.profile_img} alt='profile-img' className='w-full h-full rounded-3xl'  />
        </div>
        <div className='flex-1 max-w-3xl'>
            <p className='mb-5 max-w-2xl font-ovo'>I am a Full-Stack Developer with 2.5 years of experience in building scalable solutions. I've worked with diverse teams, delivering seamless user experiences across frontend and backend. Passionate about innovation, I thrive where technology meets creativity.</p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({icon,iconDark,title, description},index)=>(
                <li key={index} className={`border-[0.5px]  rounded-xl p-3 cursor-pointer  hover:-translate-y-1 duration-500 ${isDarkMode ? 'border-gray-700 hover:shadow-white hover:bg-amber-700' :'border-gray-400 hover:bg-lightHover hover:shadow-black' }`}>
                  <Image src={isDarkMode? iconDark : icon} alt={title} className='w-7 m-3' />
                  <h3 className={`my-4 font-semibold ${isDarkMode ? "text-white" : " text-gray-600"}`}>{title}</h3>
                  <p className={`text-sm ${isDarkMode ? "text-white/80" : " text-gray-600"}`}>{description}</p>
                </li>
              ))}
            </ul>
            <h4 className={`my-6 font-ovo ${isDarkMode ? "text-white-700" : " text-gray-700"}`}>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index)=>(
                <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
