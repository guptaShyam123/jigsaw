import React, { useState } from 'react'
import Log from '../Images/puzzles.jpeg'
import { Typography } from '@mui/material';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import './Products.css'
import { styled } from '@mui/material'

import Button from '@mui/material/Button';

const StyledContainer = styled("div")(({ theme }) => ({
  '& img': {
    width: '35vw',
    height: '35vh'
  },
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: '20vh',
  [theme.breakpoints.down("md")]: {
    display: 'grid'
  },
  '& Typography': {
    fontWeight: 'bolder'
  },
  ' & hr': {
    marginTop: '20px'
  },


}))

const Productdetails = () => {

  const [data, setdata] = useState(1)

  const inc = () => {
    setdata(data + 1)


  }
  const dec = () => {
    if (data == 1) {
      return;
    }
    setdata(data - 1)
  }
  return (
    <StyledContainer>

      <img style={{ margin: 'o auto' }} src={Log} />


      <div style={{ width: '300px' }}>
        <Typography sx={{ fontWeight: 'bolder', fontFamily: 'Roboto', color: '#9e9e9e' }} variant="h6">
          Product name:Puzzle
          <hr style={{}}></hr><br></br>
          price:2000
          <hr></hr><br></br>
          <button style={{ backgroundColor: '#00e676', border: 'none', height: '25px', width: '25px' }} onClick={inc}>+</button>
          <input style={{ width: "25px", border: 'none', textAlign: 'center' }} type="text" value={data} />
          <button style={{ backgroundColor: '#ff3d00', border: 'none', height: '25px', width: '25px' }} onClick={dec}>-</button>
         
          <Button sx={{border:1 , boxShadow:3 ,marginLeft:'10px' , backgroundColor:'#ff5252' , borderRadius:'20px'}} variant="contained"> Add To Cart </Button>
         

          <hr ></hr><br></br>

        </Typography>
      </div>

    </StyledContainer>
  )
}

export default Productdetails