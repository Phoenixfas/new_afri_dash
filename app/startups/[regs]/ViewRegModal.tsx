'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { toggleRegModal } from '../../../redux/slices/regModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { CgCloseO } from 'react-icons/cg'
import { FaTrash, FaRegCheckCircle } from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function ViewRegModal() {
    const dispatch = useAppDispatch()
    const regModalToggle = useAppSelector(state => state.regModalToggle.value)
    const regData = useAppSelector(state => state.activeActivity)


  return (
    <>
      <AnimatePresence>
        {regModalToggle && (
            <motion.div variants={variants} initial={"closed"} animate={"open"} exit={"closed"} className={`fixed z-10 top-0 blog-modal left-0 w-full h-screen bg-[#00000077] flex py-16 justify-center overflow-y-auto`}>
              <motion.div initial={{y: "100%"}} animate={{y: 0}}  transition={{duration: .3}} className='relative max-w-[800px] h-fit flex flex-col bg-white rounded-2xl p-20'>
                <div className="p-3 rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-red-400 text-white text-xl cursor-pointer" onClick={() => dispatch(toggleRegModal())}>
                  <GrClose />
                </div>
                <div className=' w-full overflow-hidden'>

                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>First Name</div>
                    <div className='text-xl font-light text-black '>{regData.first_name.charAt(0).toUpperCase() + regData.first_name.slice(1)}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Last Name</div>
                    <div className='text-xl font-light text-black '>{regData.last_name.charAt(0).toUpperCase() + regData.last_name.slice(1)}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Email</div>
                    <div className='text-xl font-light text-black '>{regData.email}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Phone</div>
                    <div className='text-xl font-light text-black '>{regData.phone}</div>
                  </div>
                  {regData.startup_sector && <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Startup Sector</div>
                    <div className='text-xl font-light text-black '>{regData.startup_sector}</div>
                  </div>}
                  {regData.startup_highlight && <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Startup Highlight</div>
                    <div className='text-xl font-light text-black '>{regData.startup_highlight}</div>
                  </div>}
                  {regData.pitchdeck && <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Pitchdeck</div>
                    <Link href={regData.pitchdeck} className='text-xl font-light text-white px-5 py-2 rounded-lg bg-green-700 w-fit'>Download</Link>
                  </div>}
                  {regData.company && <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Company</div>
                    <div className='text-xl font-light text-black '>{regData.company}</div>
                  </div>}
                  {regData.position && <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Position</div>
                    <div className='text-xl font-light text-black '>{regData.position}</div>
                  </div>}

                </div>
                {/* <button className="px-5 py-2 bg-red-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                  deleteReg(regData._id)
                }} ><FaTrash /> DELETE Startup</button> */}
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
