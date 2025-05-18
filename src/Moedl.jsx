import React from 'react'
import { createPortal } from 'react-dom'

const Moedl = ({header,children}) => {
    return createPortal(<>
        <div>

        <div>
        {header}
        </div>
        {children}

        </div>
    </>
       

      
  , document.getElementById("potail")
    )
    
}

export default Moedl