import React, { useState } from 'react'

export const data = (data, classback) => {
    let [query, setquery] = useState("")
    let alldata = data.filter((data) => classback(data).toLowerCase().includes(query))
    
    return [alldata,setquery]
  
}
