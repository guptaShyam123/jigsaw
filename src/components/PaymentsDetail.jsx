import React from 'react'
import { styled, Typography } from '@mui/material'
import Log from '../Images/United.png'
import { fontWeight } from '@mui/system'


const StyledContainers = styled("div")(({ theme }) => ({

    
    '& h5': {
        fontSize: '30px'
    },
    '& p': {
        fontSize: '18px',
        fontWeight: 'normal'
    },
    '& input': {
        height: '35px',
        borderRadius: '20px 20px',
        border: '1px solid gray',
        width: '500px'
    },

    marginTop: '30px',
   
    [ theme.breakpoints.down("md")]:{
    
        
       ' & input':{
        width:'100px'
       } ,
       ' & h5':{
        fontSize:'18px',
       }
     }
   
}))



const Styledimg = styled("div")(({ theme }) => ({

        outline:'1px solid black',
        width:'500px',
        height:'700px',
        borderRadius:'10px 10px',
     '& p':{
        fontSize:'30px',
        fontWeight:'bolder',
        marginLeft:'20px'

     },

     '& h3':{
        fontSize:'25px',
        fontWeight:'bolder',
        marginLeft:'20px'
     },
    
     ' & h4':{
        fontSize:'20px',
        margin:'2px',
        
     },
     '& img':{
        height:'400px',
                width:'350px',
                display:'block',
                margin:'0px auto'
     },
     [ theme.breakpoints.down("md")]:{
        width:'200px',
        height:'300px', 
        display:'inline-block',
        justifyContent:'center',
         
         '& img':{
            height:'100px',
            width:'100px',
            alignItems: 'center',
         },
         ' & p':{
            fontSize:'15px'
         },
         ' & h4':{
            fontSize:'15px'
         },
         ' & h3':{
            fontSize:'15px'
         }
      }

    
      
}))


const PaymentsDetail = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <StyledContainers>

                    <Typography variant="h5">
                        Billing details
                    </Typography>

                    <label>First & last name</label><br></br>
                    <input type="text" /><br></br>

                    <div style={{ marginTop: '20px' }}>
                        <label>Email address</label><br></br>
                        <input type="text" /><br></br>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <label>Country</label><br></br>
                        <input type="text" /><br></br>
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex' }}>
                        <div style={{ marginTop: '20px', display: 'grid' }}>
                            <label>State / Country</label>
                            <input style={{ width: '17vw', }} type="text" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '30px' }}>
                            <label>Zip postal code</label>
                            <input style={{ width: '13vw', }} type="text" />
                        </div>
                    </div>


                </StyledContainers>

                <Styledimg>
                
                <p>Order details</p>
                <h3>1 x 225 pieces</h3>
                <img  src={Log}/>
                
                <div style={{marginTop:'30px' , marginLeft:'30px'}}>
                <h4>Price: $ 00</h4>
                <h4>GST: 15 </h4>
                <h4>Total: $ 00</h4>
                </div>
                
                



                </Styledimg>
            </div>
        </>
    )
}

export default PaymentsDetail