import React from 'react'
import { styled, Typography } from '@mui/material'
import { Style } from '@mui/icons-material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Log from '../Images/cart.png'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import logo from '../Images/effect.png'


const StyledContainers = styled("div")(({ theme }) => ({

  justifyContent: 'center',

  '& h5': {
    fontSize: '28px',
    fontWeight: 'normal'
  },
  '& select': {
    height: '37px',
    width: '250px',
    borderRadius: '20px 20px',
    marginTop: '30px',
    fontSize: '15px',
    fontWeight: 'normal'
  },
  '& p ': {
    fontWeight: 'bolder',
    fontSize: "20px",
    marginTop: '60px'

  },
  '& h6': {
    fontSize: '20px'
  },



}))

const StyleButton = styled("div")(({ theme }) => ({


  '& img': {
    height: '80vh',
    width: '38vw',

  },


}))

const CheckOut = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <StyledContainers>
          <Typography variant="h5">
            Select Puzzle layout
          </Typography>
          <select name="plan" id="plan">
            <option value="free">Select Puzzle pieces</option>
            <option style={{ fontSize: '20px' }} value="starter" selected>Select Puzzle Pieces </option>
            <option value="professional">Professional</option>
            <option value="corporate">Corporate</option>
          </select>
          <img src={logo}/>
          <FormControlLabel control={<Checkbox />} label="Resize Proportionally" />
          <p>Effects</p>
        </StyledContainers>




         
        <StyleButton >
          <div>
            <img src={Log} />
            <div style={{ display: 'flex', marginLeft: '190px', marginTop: '30px' }}>
              <AttachMoneyIcon style={{ marginTop: '5px' }} />
              <p style={{ marginTop: '6px', fontSize: '20px' }}>00</p>
              <ShoppingCartCheckoutOutlinedIcon style={{ marginLeft: '20px', fontSize: '30px', marginTop: '5px' }} />
              <strong style={{ fontSize: '20px', marginTop: '7px' }}>QTY 1</strong>
              <button style={{ marginLeft: '25px', border: 'none', backgroundColor: '#00e676', marginBottom: '8px', width: '205px' }}>PROCEED TO CHECKOUT</button>
            </div>
          </div>


        </StyleButton>


  
     
      </div>

    </>

  )
}

export default CheckOut