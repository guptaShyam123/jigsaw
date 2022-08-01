import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../Images/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import Drawernav from "./Drawernav";
import { useTheme } from "@mui/material/styles";
import imge from '../Images/puzzalbaby.png'
import './Navbar.css'
import useMediaQuery from "@mui/material/useMediaQuery";
import Logos from '../Images/logo.png'



const StyledAppbar = styled(AppBar)(({ theme }) => ({
  height: "30vh",
  position: "sticky",
  
 

}));

const StyleContainer = styled("div")(({ theme }) => ({
   
    marginRight:'150px',
  
    ' & img':{
      height:'30px',
      width:'30px',
      float:'right',
      margin:'20px',
      marginTop:'30px'

    },

    [ theme.breakpoints.down("md")]:{

      ' & img':{
        marginLeft:'-20px',
        height:'15px',
        width:'15px'
      }
     }

}))

const LinkContainer = styled("div")(({ theme }) => ({
  
  marginTop:'-40px',
  marginLeft:'90px',
  ' & img':{
    height:'150px',
    width:'200px'
  },

  [ theme.breakpoints.down("lg")]:{
      
   ' & img':{
    height:'100px',
    width:'100px'
   },
  
   
}
  

}));



const StyledInput = styled("div")(({ theme }) => ({
  marginLeft:'40px',
  display:'flex',
  marginTop:'60px',
  ' & p':{
    fontSize:'1.5rem',
    marginLeft:'50px'
  },

  [ theme.breakpoints.down("lg")]:{
     ' & p':{
      fontSize:'15px',
      marginRight:'-20px'
     }
  },

  [ theme.breakpoints.down("md")]:{
     '& p':{
         fontSize:'15px'
     }
  }
 
}));
const StylesInput = styled("input")(({theme})=>({
    height:'3.8vh',
    marginTop:'80px',
    marginLeft:'80px',
    width:'12vw',
    borderRadius:'20px',

    [ theme.breakpoints.down("lg")]:{
      
       height:'3vh',
       width:'12vw',
       marginTop:'75px'
      
   },
   [ theme.breakpoints.down("md")]:{
      
    height:'3vh',
    width:'12vw',
    marginTop:'75px'
   
},

  
}))
            
const Navbar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
     
     {
      isMobile ? (
        <MenuIcon/>
      ):(
        <StyledAppbar>
        <StyleContainer>
        <img src="https://www.bing.com/th?id=OIP.3ZzuiBFQSpjv3BDNTGda8gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" />
        <img src="https://www.bing.com/th?id=OIP.X2o257HpNW7ME1yYHcU2QwHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" />
        <img src="https://www.bing.com/th?id=OIP.JCI8klaaA1w4LCtljpeJoAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" />
        <img src="https://www.bing.com/th?id=OIP.JCI8klaaA1w4LCtljpeJoAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" />
        </StyleContainer>

 
       <LinkContainer style={{display:'flex'}}>
       <img src={Logos}/>

      
     
       <StyledInput>
       <p>Home</p>
       <p>About Us</p>
       <p>Our Products</p>
       <p>Contact Us</p>
       </StyledInput>
       <StylesInput/>
       </LinkContainer>
       
        </StyledAppbar>
                  
      )
     }
     
    </>
  );
};

export default Navbar;