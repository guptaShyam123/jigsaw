import React, { useState , useEffect } from 'react'
 import useSWR from 'swr'
 import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import './home.css'

 
    
 

const fetcher = (...args) => fetch(...args).then((response) => response.json())

const Home = () => {
  
  

  const {data , error} =  useSWR('http://localhost:5000/api/v1/blogs' , fetcher)
  
if(error) return <div>Request Failed</div>
if(!data) return <div> Loading...</div>
console.log(data)

  return (
    <>
     

    {
      data?.blogs?.map((ele , ind) => {
      return(

       
   <div className="p">
    <Card sx={{ maxWidth: 345 , boxShadow:4 , backgroundColor:'#a5d6a7'}}>
   
        <CardMedia
        key = {ind}
      component="img"
      height="140"
      image={ele.image.url}
      alt="green iguana"
    />
    <CardContent>
 
      {ele.title}
     
     
      paragraph: {ele.paragraph} <br></br>
       countryname: {ele.countryname}
       Date: {ele.date}
    
    </CardContent>
    <Button variant="contained" >Add to Cart</Button>
  </Card>
  </div>
      )
      
      })
    }

    </>
  )

}

export default Home

