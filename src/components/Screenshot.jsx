import React from 'react'
import {useTheme} from "@mui/material/styles";
import { styled } from '@mui/material'
import img from '../Images/27.png'
import img27 from '../Images/27.png'
import image28 from '../Images/image28.png'
import image29 from '../Images/image29.png'
import star from '../Images/star.png'
import left from '../Images/lefta1.png'
import right from '../Images/right1.png'


const Stylemaindiv = styled("div") (({theme}) => ({
 
}))

const Stylepara     = styled("div") (({theme}) => ({
     ' & p':{
        
fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: '700',
fontSize: '40px',
lineHeight: '82px',
/* identical to box height */

marginLeft:'50px',
color: '#111D5E'

     }
}))

const Stylediv1     = styled("div") (({theme}) => ({
     marginTop:'30px',
     marginLeft:'50px',
     backgroundColor:'#FFFFFF',
   boxShadow: '10px 10px 34px rgba(0, 0, 0, 0.25)',
      height:'70px',
      width:'310px',
      borderRadius:'15px',
      marginTop:'-30px'
}))

const Styleimg = styled("div") (({theme}) => ({ 
   ' & img':{
    height:'45px',
    width:'45px',
    marginLeft:'25px',
    marginTop:'15px',

   }, 

   ' & p':{
    marginLeft:'90px',
    fontFamily:'Poppins',
   marginTop:'-50px',
   
fontStyle: 'normal',
fontWeight: '500',
fontSize: '20px',
lineHeight: '34px',
/* identical to box height */


color: '#332E57'
   },
    ' & h5':{
        marginLeft:'90px',
        fontFamily: 'Poppins',
fontStyle: 'italic',
fontWeight: 'bolder',
fontSize: '12px',
lineHeight: '24px',
marginTop:'-30px',
color: '#00BEE3'

    }
}))

const Styleimg2 = styled("div") (({ theme }) => ({
   ' & img':{
    height:'45px',
    width:'45px',
    marginLeft:'70px',
    marginTop:'42px'
   } , 

   ' & p':{
    marginLeft:'130px',
    fontFamily:'Poppins',
   marginTop:'-50px',
   
fontStyle: 'normal',
fontWeight: '500',
fontSize: '20px',
lineHeight: '34px',
   },

   ' & h5':{
    marginLeft:'130px',
    fontFamily: 'Poppins',
fontStyle: 'italic',
fontWeight: 'bolder',
fontSize: '12px',
lineHeight: '24px',
marginTop:'-30px',
color: '#00BEE3'
   }

}))

const Styleimg3 = styled("div" ) (({ theme }) => ({
    ' & img':{
        height:'45px',
        width:'45px',
        marginLeft:'69px',
        marginTop:'30px'
       } , 

       ' & p':{
        marginLeft:'130px',
        fontFamily:'Poppins',
       marginTop:'-50px',
       
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '34px',
       },
    
       ' & h5':{
        marginLeft:'130px',
        fontFamily: 'Poppins',
    fontStyle: 'italic',
    fontWeight: 'bolder',
    fontSize: '12px',
    lineHeight: '24px',
    marginTop:'-30px',
    color: '#00BEE3'
       }
}))

const Styledivmain = styled("div") (({ theme }) => ({
    display:'flex'  ,
     
}))

const Stylediv2 = styled("div") (({ theme }) => ({
       ' & p':{
        marginLeft:'60px',
        fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: '700',
fontSize: '20px',
lineHeight: '45px',
marginTop:'125px',
/* identical to box height */


color: '#212121'
       },
       ' & h5':{
        marginLeft:'60px',
        fontSize:'20px',
        fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '15px',
lineHeight: '30px',

color: '#212121',
marginTop:'-20px',

       
       },
       ' & h4':{
        marginLeft:'60px',
        fontSize:'20px',
        fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '15px',
lineHeight: '30px',

color: '#212121',
marginTop:'-35px',
gap:'10px'
       },
        ' & h3':{
            marginLeft:'60px',
            fontSize:'20px',
            fontFamily: 'Poppins',
  
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '30px',
    
    color: '#212121',
    marginTop:'-30px',
    gap:'10px'
        },
         ' & h2':{
            marginLeft:'60px',
            fontSize:'20px',
            fontFamily: 'Poppins',
  
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '30px',
    
    color: '#212121',
    marginTop:'-25px',
    gap:'10px'
         }

    
}))

const Styledivpara1 = styled("div") (({ theme }) => ({
  ' & p':{
    marginLeft:'60px',
    fontSize:'20px',
    fontFamily: 'Poppins',

fontWeight: 'normal',
fontSize: '15px',
lineHeight: '30px',

color: '#212121',
marginTop:'25px',
gap:'10px'
  },
  ' & h5':{
    marginLeft:'60px',
    fontSize:'20px',
    fontFamily: 'Poppins',

fontWeight: 'normal',
fontSize: '15px',
lineHeight: '30px',

color: '#212121',
marginTop:'-25px',
gap:'10px'
  }
}))

const Stylestar = styled("div") (({ theme }) => ({
     display:'flex',

     ' & img':{
        marginLeft:'60px',
        marginRight:'-60px',
        width:'12px'
     }
}))

const Stylebutton = styled("div") (({ theme }) => ({
   display:'flex',
  ' & button':{
    backgroundColor:'white',
    border:'none',
    
    cursor:'pointer',
    marginLeft:'50px',
    marginTop:'30px',
   opacity:'1',
   boxShadow:'10px 10px 34px rgba(0, 0, 0, 0.25)',
   marginRight:'-30px'
  }
}))
const Screenshot = () => {
  return (
 <>
 <Styledivmain>
   <Stylemaindiv>
   <Stylepara>
    <p>Testimonials</p>
   </Stylepara>
   <Stylediv1>
   <Styleimg>
      <img src={img27} />
      <p>Jose Pierce</p>
      <h5>Founder / Teacher</h5>
      </Styleimg>
   </Stylediv1>
   <Styleimg2>
   <img src={image28} />
   <p>Jose Pierce</p>
      <h5>Founder / Teacher</h5>
   </Styleimg2>
   <Styleimg3>
 <img src={image29} />
 <p>Jose Pierce</p>
      <h5>Founder / Teacher</h5>
   </Styleimg3>
  
   </Stylemaindiv>
   <Stylediv2>
   <p>It Was great learning</p>
   <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidun</h5>
  
  <h4>tfames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto</h4>
 <h3>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
 <h2> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</h2>
 <Styledivpara1>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt
  </p>
  <h5>tfames quisque mauris at diam.</h5>
 </Styledivpara1>
 <Stylestar>
<img src={star} />
<img src={star} />
<img src={star} />
<img src={star} />
<img src={star} />
 </Stylestar>
 <Stylebutton>
 <button><img src={left} /></button>
 <button><img src={right} /></button>
 </Stylebutton>
   </Stylediv2>
   </Styledivmain>
 </>
  )
}

export default Screenshot