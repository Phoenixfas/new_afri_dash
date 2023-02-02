import React from 'react'
import TopSection from '../ctf/TopSection'
import RegistererPaginator from '../ctf/RegistererPaginator'
import ViewRegModal from '../ctf/ViewRegModal'

export default function Workshop() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"workshop"} />
        <TopSection path={"workshop"} title={"Workshop"} desc={"List of all Workshop Registrants"} />
        <RegistererPaginator path={"workshop"} />
    </div>
  )
}
