

'use client'
import React from 'react'; 
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import { useEffect } from 'react'

export default async function PopupGfg(){ 
  const res = await fetch('http://127.0.0.1:8000/places?age__lte=1200');
  const data = await res.json("utf8");
  for (const el in data){
    console.log(data[el])
    return( 
      <div> 
        <Popup trigger={<button> .sdvsdvsv..</button>}  
         position="right center"> 
         <h1>sdfasdafsd</h1>
          <div>GeeksforGeeks</div> 
          <button className='"PoPit'>Click here</button> 
        </Popup> 
      </div> 
      ) 
  }
  
};