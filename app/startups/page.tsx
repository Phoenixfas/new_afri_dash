import React from 'react'
import TopSection from './TopSection'
import ActivitiesList from './ActivitiesList'

export default function Startups() {
  return (
    <div className=" blog min-h-screen p-16 pt-5">
        <TopSection path={"startup"} title={"Business Corner"} desc={"List of all Startups Registered for the Business Lounge Activities"} />
        <ActivitiesList />
    </div>
  )
}
