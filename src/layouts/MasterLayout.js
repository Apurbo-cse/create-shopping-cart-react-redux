import React from 'react'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
  return (
    <div className='container'>
        <Outlet/>
    </div>
  )
}

export default MasterLayout