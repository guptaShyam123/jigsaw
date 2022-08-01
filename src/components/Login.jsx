import React, { useState } from 'react'
import './Logins.css'
import { styled } from '@mui/system'

import { TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import img from '../Images/photo4.webp'
import { useTheme } from "@mui/material/styles";
import Paper from '@mui/material/Paper';

// const StyledAppbar = styled(AppBar)(({ theme }) => ({

const StyledForm = styled("form")(({theme }) => ({
    boxShadow:4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30vh',
  flexDirection: 'column',
  boxShadow: 'box-shadow: 1 3 20px #001',
  
  margin:'0 auto',
  width: '40vw ',
  height:'50vh',
 
 backgroundColor:' rgba(100, 0, 0, 0.6);',
    backgroundImage: `url(${require("../Images/photo4.webp")})`,
    backgroundSize: 'cover' ,
  
    [ theme.breakpoints.down("md")]:{
                '& ':{
                  width:'72vw',
                
                  margin:'0 auto'
                }
}

}))
const Typographyitem = styled('div')(({ theme }) => ({
  fontFamily:'Potta One' , fontWeight:'bolder' ,
  fontSize:'25px',
  
}))

const Login = () => {

  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const postdata = () => {

  }

  return (
    <>


      <div>
      
      <StyledForm onSubmit={postdata} >
        <Typographyitem  variant="h6"  >
          Login Here
        </Typographyitem><br></br>



        <TextField style={{backgroundColor:'#fafafa', }} sx={{boxShadow: 4}} value={email} onChange={(e) => { setemail(e.target.value) }} id="outlined-basic" label="Enter Your Email" variant="filled" /><br></br>
        <TextField style={{backgroundColor:'#fafafa', }} sx={{boxShadow: 4}} value={password} onChange={(e) => { setpassword(e.target.value) }} id="outlined-basic" label="Enter Your Password" variant="filled" /><br></br>

        <Button style={{}} sx={{ boxShadow: 4, border: 1 }} color="primary" variant="contained" size="medium" >
      
        Login
        </Button>
                 

      </StyledForm>
      </div>



     </>
   )
 }

export default Login
