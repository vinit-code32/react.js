import React from 'react'

import Inpit from './assets/Inpit'
import { Outlet } from 'react-router-dom'

const Apps = () => {
 
    
  return (< >
    <div className=''>
        <Inpit/>
          <Outlet />
        
    </div>

  </>
  )
}

export default Apps