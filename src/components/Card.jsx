import * as React from 'react';
import './Cards.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from '../Images/puzzal2.png'
import Logos from '../Images/puzzal3.png'
import Logoss from '../Images/puzzal1.png'
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const LinkContainer = styled("div")(({ theme }) => ({

  [ theme.breakpoints.down("md")]:{
    marginTop:'10px',
   ' & h1':{
    fontSize:'17px',
    marginTop:'20px'
   }
}

}))

const ImgContainer = styled("div")(({ theme }) => ({
     ' & card':{
      height:'100px',
      width:'100%'
     },

     [ theme.breakpoints.down("md")]:{
     
      ' & card':{
        width:'100%',
        height:'60px',
        width:'60px'
      }
     
  }
     
}))

const MediaCard = () => {
  return (
    <   > 
     <LinkContainer>
    <div style={{ justifyContent:'center', display:'flex'  , fontSize:'large' ,fontFamily:'Pota One', fontSize:'18px' }}>
    <h1 style={{color:'rgb(242, 31, 164)' }}> Life Size Jigsaw </h1>
    <h1 style={{marginLeft:'15px', color:'rgb(39, 54, 154)'}}> Fun for</h1>
    <h1 style={{marginLeft:'15px',  color:'rgb(227, 195, 91)'}}>all Ages</h1>
    </div>
    </LinkContainer>
    <ImgContainer>
      <div className='contain'>
        <Card sx={{ maxWidth: 420, boxShadow: 'none' }}>
          <CardMedia
            component="img"
            height="370"
            src={Logo}
            alt="green iguana"
          />
          <CardContent>
            <Typography style={{color:'rgb(242, 31, 164)'}} id="x" sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
              Lorem ipsum
            </Typography>
            <Typography  sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: 'black' }} gutterBottom variant="body2" color="text.secondary">
              Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque ipsum Suspendisse Ultrices
            </Typography>
          </CardContent>
        </Card>


        <Card sx={{ maxWidth: 420, boxShadow: 'none' }}>
          <CardMedia
            component="img"
            height="370"
            src={Logos}
            alt="green iguana"
          />
          <CardContent>
            <Typography style={{color:'rgb(39, 54, 154)'}} id="x" sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
              Lorem ipsum
            </Typography>
            <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: 'black' }} gutterBottom variant="body2" color="text.secondary">
              Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque ipsum Suspendisse Ultrices
            </Typography>
          </CardContent>
        </Card>


        <Card sx={{ maxWidth: 420, boxShadow: 'none' }}>
          <CardMedia
            component="img"
            height="370"
            src={Logoss}
            alt="green iguana"
          />
          <CardContent>
            <Typography style={{ color:'rgb(212, 166, 39)'}} id="x" sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
              Lorem ipsum
            </Typography>
            <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: 'black' }} gutterBottom variant="body2" color="text.secondary">
              Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque ipsum Suspendisse Ultrices
            </Typography>
          </CardContent>
        </Card>
      </div>
      </ImgContainer>
    </>

  );
}

export default MediaCard