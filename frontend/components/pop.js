

'use client'
import React from 'react'; 
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import 'reactjs-popup/dist/index.css'; 

export default async function PopupGfg(){ 
  const res = await fetch('http://127.0.0.1:8000/places?age__lte=1200');
  const data = await res.json("utf8");
  for (const el in data){
    return( 
      <div className='container'> 
        <style>{`
        .container {
          margin: 340px;
        }
      `}</style> 
        <Popup trigger={<button></button>}  
         position="right center"> 
          <div></div> 
          <h4>{data[el].description}</h4> 
        </Popup> 
      </div> 
      ) 
  }
  
};
