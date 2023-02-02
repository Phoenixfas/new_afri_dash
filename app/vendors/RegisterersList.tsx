'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { FaEye } from 'react-icons/fa'
import { toggleRegModal } from '../../redux/slices/regModalToggleSlice'
import { changeActiveVendor } from '../../redux/slices/activeVendorSlice'

interface RegisterersListProps {
  d: any
}

export default function RegisterersList({d}: RegisterersListProps) {
    const regs = d
    const dispatch = useAppDispatch()

  
  // console.log(regs)
  return (
    <div className='min-h-[60vh] gap-5 w-full flex flex-col flex-wrap items-start'>
        <div className='w-full p-3 gap-5 border-b border-gray-400 sub-card flex flex-wrap items-center justify-between'>
            <div className='text-sm text-black font-bold'>Name</div>
            <div className='text-sm text-black font-bold'>Company Name</div>
            <div className='text-sm text-black font-bold'>Status</div>
            <div className='text-sm text-black font-bold'></div>
        </div>
        {regs.map((reg: any, index: any) => (
            <div key={index} className='w-full p-3 gap-5 shadow-lg bg-white hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-between'>
                <div className='text-sm text-black font-bold flex-1'>{reg.first_name.charAt(0).toUpperCase() + reg.first_name.slice(1)} {reg.last_name.charAt(0).toUpperCase() + reg.last_name.slice(1)}</div>
                <div className='text-sm text-black font-bold flex-1'>{reg.company_name}</div>
                <div className={`text-sm ${reg.approved ? "text-green-500" : "text-red-500"} font-bold flex-1`}>{reg.approved ? "approved" : "not approved"}</div>
                <button className="px-3 py-1 bg-blue-500 text-lg w-fit  cursor-pointer text-white rounded-md flex items-center gap-2" onClick={() => {
                    dispatch(toggleRegModal())
                    dispatch(changeActiveVendor(reg))
                }} ><FaEye /> Details</button>
            </div>
        ))}
        
    </div>
  )
}


