'use client'
import React, {useEffect, useState} from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'

export default function Regs({params: {regs}}: {params: {regs: string}}) {
  
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    switch (regs) {
      case '1':
        setTitle('Activity 1')
        setDesc('List of all Activity 1 Registrants')
        break;
      case '2':
        setTitle('Activity 2')
        setDesc('List of all Activity 2 Registrants')
        break;
      case '3R1':
        setTitle('Activity 3 Round 1')
        setDesc('List of all Activity 3 Round 1 Registrants')
        break;
      case '3R2':
        setTitle('Activity 3 Round 2')
        setDesc('List of all Activity 3 Round 2 Registrants')
        break;
      case '5':
        setTitle('Activity 5')
        setDesc('List of all Activity 5 Registrants')
        break;
      case '6':
        setTitle('Activity 6')
        setDesc('List of all Activity 6 Registrants')
        break;
      default:
        setTitle('')
        setDesc('')
        break;

    }
  })

  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal />
        <TopSection path={regs} title={title} desc={desc} />
        <RegistererPaginator path={regs} />
    </div>
  )
}
