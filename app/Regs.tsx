'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks'

export default function Regs() {
    const token = useAppSelector((state) => state.login.admin)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [regData, setRegData] = useState([])

    const [boothVendors, setBoothVendors] = useState(0)
    const [approvedVendors, setApprovedVendors] = useState(0)
    const [startups, setStartups] = useState(0)
    const [participants, setParticipants] = useState(0)
    const [workshops, setWorkshops] = useState(0)
    const [lanParties, setLanParties] = useState(0)
    const [hackathons, setHackathons] = useState(0)
    const [ctfs, setCtfs] = useState(0)


    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const fetchData = async () => {
            try{
                const res = await Promise.all([
                    fetch('https://api.afriopia.com/booth-vendor', config),
                    fetch('https://api.afriopia.com/startup', config),
                    fetch('https://api.afriopia.com/participant', config),
                    fetch('https://api.afriopia.com/workshop', config),
                    fetch('https://api.afriopia.com/lanparty', config),
                    fetch('https://api.afriopia.com/hackathon', config),
                    fetch('https://api.afriopia.com/ctf', config),
                ])
                if(!res.every(r => r.ok)){
                    setError('Error fetching data')
                    setLoading(false)
                    return
                }
                const data: any = await Promise.all(res.map(r => r.json()))
                setRegData(data)
                setBoothVendors(data[0].length)
                setApprovedVendors(data[0].filter((vendor: any) => vendor.approved).length)
                setStartups(data[1].data.length)
                setParticipants(data[2].data.length)
                setWorkshops(data[3].data.length)
                setLanParties(data[4].data.length)
                setHackathons(data[5].data.length)
                setCtfs(data[6].data.length)
            }
            catch(err: any){
                setLoading(false)
                setError(err)
            }
        }

        fetchData()
        setLoading(false)
    }, [])


  return (
    <div className='flex flex-col gap-8'>
        <hr />
        <h1 className='text-center text-4xl font-light mt-5'>Tech Trade Show</h1>
        <div className='w-full flex justify-center flex-wrap gap-8' >
            <Link href='/vendors' className='flex-1' title='vendors'>
                <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#489b42] font-bold">{boothVendors}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Total Vendors Registered</div>
                </div>
            </Link>
            <Link href='/vendors/approved' className='flex-1' title='vendors'>
                <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#489b42] font-bold">{approvedVendors}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Paid and Approved Vendors</div>
                </div>
            </Link>
        </div>
        <div className='w-full flex justify-center flex-wrap gap-8' >
            {/* <Link href='/startups' title='startups'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{startups}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Startup Registrants</div>
                </div>
            </Link> */}
            <Link href='/participants' title='participants'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{participants}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Visitor Registrants</div>
                </div>
            </Link>
            <Link href='/workshop' title='workshop'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{workshops}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Workshop Registrants</div>
                </div>
            </Link>
            <Link href='/lanparty' title='lanparty'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{lanParties}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">LAN Party Registrants</div>
                </div>
            </Link>
            <Link href='/hackathon' title='hackathon'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{hackathons}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Hackathon Registrants</div>
                </div>
            </Link>
            <Link href='/ctf' title='ctf'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{ctfs}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">CTF Registrants</div>
                </div>
            </Link>
        </div>
    </div>
  )
}
