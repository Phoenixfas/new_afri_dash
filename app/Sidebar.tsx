'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { IoCaretForward } from 'react-icons/io5'
import { AiFillDashboard } from 'react-icons/ai'
import { MdArticle } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        switch (pathname) {
            case '/':
                setActive('dashboard')
                break
            case '/blog':
                setActive('blog')
                break
            case '/subscribers':
                setActive('subscribers')
                break
            default:
                break

        }
    }, [])
  return (
    <div className={`relative ${isOpen ? "w-72 sidebar" : "w-20"} h-screen m-0 duration-300 rounded-r-md bg-[#0b5b05]`}>
        <div className='bg-[#dddd19] rounded-full absolute right-0 top-20 translate-x-1/2 cursor-pointer w-6 h-6 flex items-center justify-center'>
            <IoCaretForward className={`${isOpen ? "rotate-180" : ""} duration-300`} color='#0b5b05' size={20} onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div className='h-28 w-full flex items-start justify-center pt-3'>
            <Image className='duration-300' src='/Logo.svg' width={isOpen ? 100 : 50} height={isOpen ? 100 : 50} alt="Logo" priority/>
        </div>

        <div className='flex flex-col  gap-3 w-full p-4'>
            <Link href='/' onClick={() => setActive('dashboard')} title="dashboard">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='dashboard' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <AiFillDashboard className={`${isOpen ? '' : 'flex-1'}`} size={30}/>
                    {isOpen && <p className='duration-300'>Dashboard</p>}
                </div>
            </Link>
            <Link href='/blog' onClick={() => setActive('blog')} title="blog">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='blog' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <MdArticle className={`${isOpen ? '' : 'flex-1'}`} size={30}/>
                    {isOpen && <p className='duration-300'>Blog</p>}
                </div>
            </Link>
            <Link href='/' onClick={() => setActive('subscribers')} title="subscribers">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='subscribers' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaUsers className={`${isOpen ? '' : 'flex-1'}`} size={30}/>
                    {isOpen && <p className='duration-300'>Subscribers</p>}
                </div>
            </Link>
        </div>
    </div>
  )
}
