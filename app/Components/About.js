import React from 'react'
import { assets,infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div
    initial = {{opacity:0}} 
    whileInView = {{opacity:1}} 
    transition={{duration:1}}  
    id="about" 
    className='w-full py-16 scroll-mt-2 max-sm:h-[130rem]'>
        <motion.h4
        initial = {{opacity:0,y:-20}}
        whileInView = {{opacity:1,y:0}} 
        transition={{duration:0.5,delay:0.3}}  
        className='text-center mb-2 text-xl font-Ovo'>Introduction</motion.h4>
        <motion.h2
        initial = {{opacity:0,y:-20}} 
        whileInView = {{opacity:1,y:0}} 
        transition={{duration:0.5,delay:0.5}}  
        className='text-center text-5xl font-Ovo'>About me</motion.h2>

      <motion.div
      initial = {{opacity:0,scale:0.9}} 
      whileInView = {{opacity:1,y:0}} 
      transition={{duration:0.6}}  
      className='flex w-full flex-col lg:flex-row items-center gap-6 h-[40rem] px-16 sm:px-3'>

          <motion.div className='w-96 -translate-x-6 -translate-y-4 sm:px-3'>
            <Image src={assets.user_image} alt='user' className='h-[34rem] w-[35rem] rounded-3xl object-cover'/>
          </motion.div>

          <motion.div 
          initial = {{opacity:0,scale:0.9}} 
          whileInView = {{opacity:1,y:0}} 
          transition={{duration:0.6,delay:0.8}}  
          className='flex-1'>
               <p className='mb-10 max-w-7xl font-Ovo text-3xl'>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Through my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>

              {/* Language , Education , Projects */}
               <motion.ul className='text-xs grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl'>
                  {infoList.map(({icon,iconDark,title,description},index)=>(
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl h-56 cursor-pointer hover:-translate-y-1 hover:shadow-[3px_3px_0_#000] ] duration-500 p-3 dark:border-white dark:hover:shadow-white dark:hover:bg-[#2a004a]/50'>
                          <Image src={isDarkMode? iconDark : icon} alt={title} className='w-10 mt-3'/>
                          <h3 className='text-3xl my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                          <p className='text-gray-600 text-xl dark:text-white'>{description}</p>
                        </li>
                  ))}
               </motion.ul>

               <motion.h4 
               initial = {{opacity:0,scale:0.9}} 
               whileInView = {{opacity:1,y:0}} 
               transition={{duration:0.6,delay:0.8}}  className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-3xl'>Tools I use</motion.h4>

               <motion.ul
               initial = {{opacity:0,scale:0.9}} 
               whileInView = {{opacity:1,y:0}} 
               transition={{duration:0.6,delay:0.8}}  
               className='flex items-center gap-4 sm-gap-5'>
                  {toolsData.map((tool,index)=>(
                    <li key={index} className='flex items-center justify-center w-12 sm:w-9 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <Image src={tool} alt="" className='w-3 sm:w-6'/>
                    </li>
                  ))}
               </motion.ul>
          </motion.div>
      </motion.div>

    </motion.div>
    
  )
}

export default About
