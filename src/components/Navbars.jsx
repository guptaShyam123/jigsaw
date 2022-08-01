import React from 'react'
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

import {Link} from "react-router-dom"

const StyleAppbar = styled(AppBar)(({ theme }) => ({
      backgroundColor: '#a5d6a7',
    display:'flex',
    height:'13vh',
' & p':{
     fontSize:'30px',
     display:'grid-column',
     margin:'30px',
     color:'black',
     fontWeight:'normal',
     fontFamily:'Helvetica'
},
    '& div':{
        display:'flex',
        
    }

}))

const Navbars = () => {
  return (
   <>

   <StyleAppbar>
   <div>
   
  <Link to = "/home"><p>HOME</p></Link>
  <Link to = "/cart"><p>CART</p></Link>
  </div>
   </StyleAppbar>
   </>
  )
}

export default Navbars