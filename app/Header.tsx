import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function Header() {
  return (
    <div className='h-16 w-full relative'>
        <div className='h-full w-1/2 rounded-l-full bg-[#fff] shadow-lg float-right flex justify-end items-center px-10'>
            <div className='header_admin' >
                <FaUserCircle className='text-[#489b42] text-[40px]' title='admin' />
                <div className='header_adminContent'>
                    {/* <h4 className='font-thin text-lg text-center'>admin</h4> */}
                    <button className='text-lg px-5 py-2 rounded-md outline-none border-none hover:bg-[#fff] hover:text-[#0b5b05] duration-300 bg-[#0b5b05] text-white'>Logout</button>
                </div>
            </div>
        </div>
    </div>
  )
}
