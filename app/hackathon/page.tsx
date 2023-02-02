import React from 'react'
import TopSection from '../ctf/TopSection'
import RegistererPaginator from '../ctf/RegistererPaginator'
import ViewRegModal from '../ctf/ViewRegModal'

export default function Hackathon() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"hackathon"} />
        <TopSection path={"hackathon"} title={"Hackathon"} desc={"List of all Hackathon Registrants"} />
        <RegistererPaginator path={"hackathon"} />
    </div>
  )
}
