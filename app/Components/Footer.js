<<<<<<< HEAD
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <h2 className='text-xl font-bold'>Manjunath <span className='text-red-600 text-3xl'>.</span></h2>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image alt="" src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className='w-6'/>
                manjunathkavalikai9@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Manjunath Kavalikai. All rights reserved.</p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/manjunath-codeing-is-fire">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/manjunath-kavalikai-06614734a/">LinkedIn</a></li>
                <li><a target='_blank' href="https://twitter.com/Manjuna07851835">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

=======
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <h2 className='text-xl font-bold'>Manjunath <span className='text-red-600 text-3xl'>.</span></h2>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image alt="" src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className='w-6'/>
                manjunathkavalikai9@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Manjunath Kavalikai. All rights reserved.</p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/manjunath-codeing-is-fire">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/manjunath-kavalikai-06614734a/">LinkedIn</a></li>
                <li><a target='_blank' href="https://twitter.com/Manjuna07851835">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

>>>>>>> 156553d4870ec6e93b3fb8ebb640fcda7fd2e94d
export default Footer