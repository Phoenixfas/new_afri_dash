import React from 'react'
import TopSection from './TopSection'
import RegistererPaginator from './RegistererPaginator'
import ViewRegModal from './ViewRegModal'

export default function Startups() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"startup"} />
        <TopSection path={"startup"} title={"Startups"} desc={"List of all Startups Registered"} />
        <RegistererPaginator path={"startup"} />
    </div>
  )
}
