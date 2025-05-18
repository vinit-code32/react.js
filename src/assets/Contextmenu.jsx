import React from 'react'

const Contextmenu = ({ Contextmenus,setcontexr,id,data}) => {

    if(!Contextmenus.left) return
    
    return (
      <div className={`border text-2{xl absolute bg-yellow-50 shadow-pink-300 shadow-2xl   `} style={{ ...Contextmenus }}>
            <div onClick={() => { setcontexr({})}} >edit</div>
            <div onClick={() => { setcontexr({})}} >delet</div>
    </div>
  )
}

export default Contextmenu