import React from 'react'
import './Contacts.css'

import { styled } from '@mui/system'
import { TextField, Typography, Button } from '@mui/material'

import con from '../Images/contact.jpg'
import { useTheme } from "@mui/material/styles";

//const StyledAppbar = styled(AppBar)(({ theme }) => ({
  
const Form = styled("form")(({ theme }) => ({
  backgroundImage: `url(${require("../Images/photo4.webp")})`,
  backgroundSize: 'cover' ,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center", margin: "25vh 25vw 0 25vw",
  height: "53vh",
  width: "50vw",
  backgroundColor: '#90caf9',
  borderRadius: '10px 10px',

    
  backgroundImage: `url(${require("../Images/contact.jpg")})`,
  backgroundSize: 'cover' ,


  [ theme.breakpoints.down("md")]:{
    height:'60vh',
    width:'90%',
    alignItems: 'center',
    margin:'0 auto',
    marginTop:'100px'

}

}));

const Contact = () => {
  return (
    <Form sx={{ boxShadow: 4 }} >
      <Typography sx={{ fontWeight: 'bolder', fontFamily: 'Roboto' }} variant="h6">
        Contact Us
      </Typography><br></br>
      <TextField required type="Name" style={{backgroundColor:'white'}} id="outlined-basic" placeholder='Name' variant="filled"  /><br></br><br></br>
      <TextField required type="Email"  style={{backgroundColor:'#fafafa' , color:'black'}} id="outlined-basic"  placeholder='Email' variant="filled" /><br></br><br></br>
      <TextField required type="Question" style={{backgroundColor:'#fafafa'}} id="outlined-basic" label="Question" variant="filled"/><br></br><br></br>
      <Button type="Submit" sx={{ marginBottom: '10px' }} variant="contained" size="medium">
        Submit
      </Button>
    </Form>
  )
}


export default Contact