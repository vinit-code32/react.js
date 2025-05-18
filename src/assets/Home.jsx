import React from 'react'
import Moedl from '../Moedl'

const Home = () => {
  return (
      <div className=''>
          <Moedl header={<div><h1>helllo</h1></div>}>
              <input type="text"  placeholder='name'/>
          </Moedl>
    </div>
  )
}

export default Home