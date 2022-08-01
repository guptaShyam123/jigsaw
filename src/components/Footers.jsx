import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import BottomNavigation from '@mui/material/BottomNavigation';
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawernav from "./Drawernav";
import { useTheme } from "@mui/material/styles";
import logo from '../Images/logo.png'
import img from '../Images/footer.png'
import './footer.css'



const StyledAppbar = styled(AppBar)(({ theme }) => ({
  
 

  height: "50vh",
  position: "sticky",
  top: "0",
  backgroundColor: 'rgb(153,203,14)',
  
  
  
  //  backgroundImage: `url(${require("../Images/footer.png")})`,
    [ theme.breakpoints.down("md")]:{
      height:'30vh',
      width:'100%'
}

  
  
}));

const LinkContainer = styled("div")(({ theme }) => ({
    
     marginRight:'200px',
     marginTop:'110px',
      '& img': {
        height:'40px',
        width:'40px',
        margin:'20px',
      },

      [ theme.breakpoints.down("md")]:{

        marginLeft:'-20px',
        
            '& img':{
              height:'13px',
              width:'13px',
              
              marginTop:'-40px',
              
              padding:'7px',
              float:'right',
              marginLeft:'-2px',
              marginRight:'15px'
            }  
      }
 
}));


const StyleItems = styled("div")(({ theme }) => ({
   display:'flex',

   '& p':{
    fontSize:'30px',
    marginLeft:'7vw'
   },

   [ theme.breakpoints.down("md")]:{
      '& p':{
     fontSize:'16px',
     marginTop:'40px',
     margin:'5px',
     marginLeft:'30px'
      }
}
     

}))

const HeavyContainer = styled("div")(({ theme }) => ({

    ' & img':{
      height:'200px',
      width:'200px',
      marginLeft:'80px',
       marginTop:'20px'
    },

    [ theme.breakpoints.down("md")]:{
      marginLeft:'20px',
      '& img':{
        height:'80px',
        width:'80px',
        marginBottom:'20px',
        marginTop:'40px',
        marginLeft:'4px'

      }
}
}))

const Footers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      

   <div className="footer">
    <StyledAppbar>
   
    
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    
           
             
             <HeavyContainer>
               <img src={logo}/>
               </HeavyContainer>

               <LinkContainer >
              <img src="https://www.bing.com/th?id=OIP.3ZzuiBFQSpjv3BDNTGda8gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
              <img src="https://www.bing.com/th?id=OIP.3ZzuiBFQSpjv3BDNTGda8gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
              <img src="https://www.bing.com/th?id=OIP.3ZzuiBFQSpjv3BDNTGda8gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
              <img src="https://www.bing.com/th?id=OIP.3ZzuiBFQSpjv3BDNTGda8gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
            </LinkContainer>
            
            </div>
          
          <StyleItems>
          <p>Contact us</p>
          <p>Product</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          </StyleItems>
          
        </StyledAppbar>
      
        </div>
    </>
  );
};


export default  Footers;

