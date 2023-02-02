import React from 'react'
import TopSection from '../ctf/TopSection'
import RegistererPaginator from '../ctf/RegistererPaginator'
import ViewRegModal from '../ctf/ViewRegModal'

export default function Participants() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"participant"} />
        <TopSection path={"participant"} title={"Visitors"} desc={"List of all Visitors Registered"} />
        <RegistererPaginator path={"participant"} />
    </div>
  )
}
