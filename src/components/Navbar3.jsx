import React, { useContext } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import imge from '../Images/img.jpg'
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from '../Images/logo.png'


const StyledAppbar = styled(AppBar)(({ theme }) => ({
  height: "20vh",
  position: "sticky",
  
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    height: "15vh",
    width: "20vw",
    marginRight: "2vw",
  },

   
}));

const LinkContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginLeft:'30px',
  marginRight: "18vw",
  marginTop:'20px',
  "&  p": {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginLeft: "2vw",
    fontFamily: "Potta One, cursive",
    textDecoration: "none",
  },

  "& p:hover": {
    cursor: "pointer",
  },


}));

const StyledInput = styled("input")(({ theme }) => ({
  width: "20vw",
  height: "3.5vh",
  marginTop: "40px",
  marginLeft: "4vw",
  borderRadius: "17px",
  border: "none",
  "&:focus": {
    outline: "none",
  },
 
}));

const IconWrapper = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  "&:hover": {
    cursor: "pointer",
  },
}));

const Navbar3 = () => {

 
  
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  

 
  return (
    <>
     
        
        
        <StyledAppbar>
          <Toolbar>
            <img src={Logo} alt="Logo" />
            <LinkContainer>
              
                <p >HOME</p>
              

              <p>
                About us
              </p>
              
                
            
                <p>Our Products</p>
              

              
              
                
                <p>
                  Contact us
                </p>
            
              <StyledInput />
              
                <IconWrapper>
                  <ShoppingCartOutlinedIcon />
                 
                </IconWrapper>
              
              
              
            </LinkContainer>
           
          </Toolbar>
        </StyledAppbar>
      
    </>
  );
};

export default Navbar3;