import React from 'react'
import icon from '../assets/ResollectIcon.png'
import myProfile from '../assets/profile-pic.png'
import { MdKeyboardArrowDown } from "react-icons/md";
function Header() {
  return (
    <div className='flex justify-between items-center p-3 bg-white  border-1 border-gray-200'>
        <img src={icon} alt="Image Not Found" className='h-12' />
        <div className='flex justify-center gap-x-2'>
            <img src={myProfile} alt="Image Not Found" className='h-10' />
            <div className='flex flex-col ml-2'>
                <span>Shanu Kumar Gupta</span>
                <span>shanugupta9269@gmail.com</span>
            </div>
            <div className='flex items-center hover:bg-gray-200 p-1/2 rounded-lg border-2 border-blue-600'> 
                <MdKeyboardArrowDown />
            </div>
        </div>
        
    </div>
  )
}

export default Header