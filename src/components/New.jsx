import React from 'react'
import { styled } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import image from '../Images/image1.png'
import rext from '../Images/recta.png'
import date from '../Images/date.png'

const Stylediv = styled("div") (({ theme }) => ({
    alignItems: 'center',
    justifyContent: 'center',
    height:'480px',
    width:'500px',
    background:'#FFFFFF',
    borderRadius:'10px',
    boxShadow: '10px 10px 34px rgba(0, 0, 0, 0.25)',

    
    ' & img':{
        width:'460px',
        
        marginTop:'20px',
    } , 

    [ theme.breakpoints.down("md")]:{
        width:'360px',
        height:'400px',

        ' & img':{
           width:'280px',
           marginLeft:'-5px' 
        }
    },
    
   
}))

const Styleimg = styled("div") (({ theme }) => ({
   ' & img':{
    width:'100px',
    height:'32px',
    marginLeft:'310px',
    marginTop:'-140px'
   },
   [ theme.breakpoints.down("md")]:{
    width:'100px',
    marginLeft:'-450px',
height:'30px'
   }
}))

const Styledate = styled("div") (({ theme }) => ({
   ' & img':{
    height:'13px',
    width:'13px',
    marginLeft:'-420px',
    marginTop:'-10px'
   },
   [ theme.breakpoints.down("md")]:{
     ' & img':{
        marginLeft:'-270px'
     }
   }
}))

const Styleparas = styled("div") (({ theme }) => ({
    ' & p':{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '11px',
        lineHeight:' 21px',
        /* identical to box height */
        
        
        color: '#111D5E',
        marginLeft:'-305px',
        marginTop:'-18px'
    },
    [ theme.breakpoints.down("md")]:{
        ' & p':{
            marginLeft:'-170px'
        }
    }
}))

const Stylelorem = styled("div") (({ theme }) => ({
  ' & p':{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bolder',
    fontSize: '15px',
    lineHeight: '30px',
        marginLeft:'10px',
        marginRight:'70px',
    color: '#212121',
    marginTop:'10px',
    
   
    
  },
   [ theme.breakpoints.down("md")]:{
    ' & p':{
        fontSize:'10px',
        marginLeft:'37px'
    }
   }
}))

const Stylelorem1 = styled("div") (({ theme }) => ({
    ' & p':{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bolder',
        fontSize: '15px',
        lineHeight: '30px',
            marginLeft:'-80px',
            marginRight:'70px',
        color: '#212121',
        marginTop:'-20px'

    },
    [ theme.breakpoints.down("md")]:{
        ' & p':{
            fontSize:'10px',
            marginLeft:'-21px',
            marginTop:'-25px'
        }
    }
}))

const Stylelorem2 = styled("div") (({ theme }) => ({
    ' & p':{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        marginLeft:'-50px'
    },
    [ theme.breakpoints.down("md")]:{
        '& p':{
            marginLeft:'32px',
            marginRight:'120px'
        }
    }
}))
const Stylelorem3 = styled("div") (({ theme }) => ({
    ' & p':{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        marginLeft:'-190px',
        marginTop:'-10px'
    },
    [ theme.breakpoints.down("md")]:{
        ' & p':{
            marginLeft:'-30px'
        }
    }
})) 

const Stylebut = styled("div") (({ theme }) => ({
 ' & button':{
    color: '#212121',
    backgroundColor: '#FFFFFF',
    marginTop:'20px',
    marginLeft:'-365px',
    fontSize:'10px',
   cursor:'pointer',
   borderRadius:'20px',
   border:'1px solid #212121',
   height:'30px',
   width:'80px',
   marginTop:'5px'
 },
 [ theme.breakpoints.down("md")]:{
    ' & button':{
        marginLeft:'-210px'
    }
 }
}))





const New = () => {
  return (
    <>
   <center>
   
   <Stylediv>
           <img src={image} />
           <Styleimg>
           <img src={rext} />
           </Styleimg>
           <Styledate>
           <img src={date} />
           </Styledate>

           <Styleparas>
           <p>25 April 2022</p>
           </Styleparas>
           <Stylelorem>
           <p>
           Lorem ipsum dolor sit amet, consetetur sadipscing
         
         </p>
           </Stylelorem>
           <Stylelorem1>
           <p>elitr, sed diam nonumy eirmod tempor</p>
           </Stylelorem1>
           <Stylelorem2>
           <p>
           Lorem ipsum dolor sit amet, consetetur ditr, sed diam nonumy eirmod tempor
</p>
           </Stylelorem2>
           <Stylelorem3>
           <p>invidunt ut labore et dolore magna aliquyam erat,</p>
           </Stylelorem3>
           <Stylebut>
           <button>Go to Event</button>
           </Stylebut>
   </Stylediv>

  
  
   </center>
    </>
  )
}

export default New