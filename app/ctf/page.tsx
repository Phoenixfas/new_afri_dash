import React from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'

export default function CTF() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"ctf"} />
        <TopSection path={"ctf"} title={"Catch The Flag"} desc={"List of all CTF Registrants"} />
        <RegistererPaginator path={"ctf"} />
    </div>
  )
}
