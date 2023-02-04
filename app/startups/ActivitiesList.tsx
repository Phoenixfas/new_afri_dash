import React from 'react'
import Link from 'next/link'

export default function ActivitiesList() {
  
  // console.log(regs)
  return (
    <div className='min-h-[60vh] gap-5 w-full flex flex-wrap items-start justify-center'>
        
          <Link href={"/startups/1"} className="w-full">
            <div className='w-full p-5 gap-5 shadow-xl hover:shadow-[0_10px_30px_#00000088] bg-white hover:bg-yellow-100 hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-center'>
                <div className='text-xl text-[#050752] font-black'>ACTIVITY 1</div>
            </div>
          </Link>
          <Link href={"/startups/2"} className="w-full">
            <div className='w-full p-5 gap-5 shadow-xl hover:shadow-[0_10px_30px_#00000088] bg-white hover:bg-yellow-100 hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-center'>
                <div className='text-xl text-[#050752] font-black'>ACTIVITY 2</div>
            </div>
          </Link>
          <Link href={"/startups/3R1"} className="w-full">
            <div className='w-full p-5 gap-5 shadow-xl hover:shadow-[0_10px_30px_#00000088] bg-white hover:bg-yellow-100 hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-center'>
                <div className='text-xl text-[#050752] font-black'>ACTIVITY 3 Round 1</div>
            </div>
          </Link>
          <Link href={"/startups/3R2"} className="w-full">
            <div className='w-full p-5 gap-5 shadow-xl hover:shadow-[0_10px_30px_#00000088] bg-white hover:bg-yellow-100 hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-center'>
                <div className='text-xl text-[#050752] font-black'>ACTIVITY 3 Round 2</div>
            </div>
          </Link>
          <Link href={"/startups/5"} className="w-full">
            <div className='w-full p-5 gap-5 shadow-xl hover:shadow-[0_10px_30px_#00000088] bg-white hover:bg-yellow-100 hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-center'>
                <div className='text-xl text-[#050752] font-black'>ACTIVITY 5</div>
            </div>
          </Link>
          <Link href={"/startups/6"} className="w-full">
            <div className='w-full p-5 gap-5 shadow-xl hover:shadow-[0_10px_30px_#00000088] bg-white hover:bg-yellow-100 hover:scale-[1.02] duration-300 rounded-xl sub-card flex flex-wrap items-center justify-center'>
                <div className='text-xl text-[#050752] font-black'>ACTIVITY 6</div>
            </div>
          </Link>

    </div>
  )
}


