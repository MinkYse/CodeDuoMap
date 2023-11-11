'use client'
import React from 'react'; 
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 


export default async function PopupGfg(){ 
  const res = await fetch('http://127.0.0.1:8000/places?age__lte=1200');
  const data = await res.json("utf8");
  const result = []
  const x = []
  for (const el in data){
    
    x.push(data[el].latitude - 32.045630, data[el].longitude - 54.781751)
    result.push( 
      <div className='text'> 
          <Popup trigger={<button > {data[el].name}</button>}  
         position="right center"> 
          <div></div> 
          <h4 className='text'>{data[el].description}</h4> 
        </Popup> 
      </div> 
      ) 
  }
  console.log(x)
  return [result];

  
};
