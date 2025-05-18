
import { useRef, useState } from 'react'
import Moedl from '../Moedl'
import './indexs.css'
import { NavLink, replace, useNavigate } from 'react-router-dom'
import Product from '../Product'

const Inpit = () => {
    let { set } = useRef("hi")
    let [sets,useset]= useState("")
    console.log(set);
    let usenavigate = useNavigate()
  let arry =["hello","vinit","sharama"]

        
    
    return (  
        <div className='w-full h-[60px] shadow-2xl  flex justify-between items-center py-2 px-6'>
            <input type="text" placeholder='name' value={sets}  onChange={(e)=>useset(e.target.value)
            } />{
             arry.map((e)=>e.toLowerCase().startsWith(sets) &&(<h1 className='text-red-400' >{e}</h1>))
            }
            
            <ul className='flex space-x-2.5 text-xl dropdown'>
       <NavLink to="home"> <li className='cursor-pointer active:text-amber-200'>home</li></NavLink>        
                <li onClick={() => usenavigate("/service", { replace: true })} className='cursor-pointer active:text-amber-200' >home</li>     
                <li className='cursor-pointer text-2xl'>home</li>
                <li className='cursor-pointer text-'>home</li>
          <li className=' peer text-amber-50 cursor-pointer active:text-amber-200'>home</li>
          <div>
            
            <button type="button" className='bg-pink-400 py-2 px-3.5 rounded-tr-2xl hover:translate-x-0.5 duration-700 hover:translate-y-6 '>submit</button>
          </div>
<Product/>          
            </ul>
            <div>

                <Moedl header="hii">
                    <h1>{ set}</h1>
            </Moedl>
            </div>
           
    </div>
  )
}

export default Inpit