import React from 'react'
import TopSection from '../ctf/TopSection'
import RegistererPaginator from '../ctf/RegistererPaginator'
import ViewRegModal from '../ctf/ViewRegModal'

export default function LanParty() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <ViewRegModal path={"lanparty"} />
        <TopSection path={"lanparty"} title={"LAN Party"} desc={"List of all LAN Party Registrants"} />
        <RegistererPaginator path={"lanparty"} />
    </div>
  )
}
