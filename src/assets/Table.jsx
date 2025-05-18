import React, { useState } from 'react'
import { data } from './hooks/data'
import Contextmenu from './Contextmenu'
import { useLocaal } from './useLocaal'


const Table = ({ set }) => {
    let [Contextmenus, setcontexr] = useState({})

    
    let [alldata,setqueary]= data(set,(set)=>set.catary)
    
    let total = alldata.reduce((accc, curr) => {
    
        return accc + parseInt(curr.amount)
   
  }, 0)
  
  

    
    return (
        <>
            
            <Contextmenu Contextmenus={Contextmenus } setcontexr={setcontexr} />
            <div className='relative'>
                <table className='border-2 w-[600px]' onClick={()=>{setcontexr({})}} >
              <thead className=''>
                  <th className='border'>name</th>
                  <select name="" id="" className='w-full text-center' onChange={(e)=>setqueary(e.target.value.toLowerCase())}>
                <option value="" >all</option>
                      <option value="eduction">books</option>
                      <option value="toy">car</option>
                      <option value="eduction">pen</option>
                      <option value="place">ground</option>
                  </select>
                      
                  <th className='border'>id</th>
              </thead>
              <tbody>
                  <tr>
                      <td>title</td>
                  </tr>
                  {
                      alldata.map(({ title, catary, amount, email }) => 
                        <tr className='border' onContextMenu={(e) => {
                    e.preventDefault()
                 setcontexr({ left: e.clientX, top: e.clientY })
          
                }  }>
                            <td className='border'> {title }</td>
                            <td className='border'> {catary }</td>
                            <td className='border'>$  {amount }</td>
                            <td className='border'>$  {email }</td>
                        </tr>
                      )
                  }
                  <tr>
                      <th className='border'>total</th>
                      <th className='border'></th>
                      <th className='border'> ${ total}</th>
                  </tr>
              </tbody>
          </table>
            </div>
            </>
  )
}

export default Table