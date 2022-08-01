import React from 'react'
import {styled, TextField} from '@mui/material'

const StyledContainer = styled("div")(({ theme }) => ({
    '& h1':{
        color:'red'
    },
    '& TextField $disabled':{
        
        
        
        color:'black',
        backgroundColor:'orange',
        border:'20px 20px',
  

    }

}))

const Basicstylecom = () => {
  return (
   <StyledContainer>
   <h1>hello</h1>
   <TextField type="text" id="standard-basic" label="Standard" variant="standard"   />
   </StyledContainer>
  )
}
export default Basicstylecom
