

'use client'
import React from 'react'; 
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import { useEffect } from 'react'

export default function PopupGfg(){ 
  return( 
  <div> 
    <Popup trigger={<button> ...</button>}  
     position="right center"> 
      <div>GeeksforGeeks</div> 
      <button className='"PoPit'>Click here</button> 
    </Popup> 
  </div> 
  ) 
};