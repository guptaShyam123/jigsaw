
import  React, { useState } from 'react';
import axios from 'axios'



 function Freeimage() {

  const [title , setTitle] = useState('')
    const [price , setPrice] = useState('')
   

    const add =  async(e)=>{

        e.preventDefault()
        const {data} = await axios.post("http://localhost:5000/api/v1/checkitems",{
          title , price
        },
        {
          headers:{
            "Content-Type": "application/json" 
          }
        }
        
        );
        return data;
    }

    return (
       
        <div>
        <img  style={{height:'100px' , width:'100px'}} src="https://www.rd.com/wp-content/uploads/2020/01/GettyImages-87487497-e1579034836695-scaled.jpg?resize=2048"/>
        <p  >nike</p>
        <p  >$ 100</p>
       
        <button onClick={add}>add</button>
        </div>
    );
  }

  export default Freeimage