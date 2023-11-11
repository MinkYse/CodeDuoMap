

'use client'
import React from 'react'; 
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import 'reactjs-popup/dist/index.css';
import Image from "next/image";

export default async function PopupGfg(){ 
  const size = 40;
return(
  <div className='container'>
    <style>{`
    .container {
      margin: 340px;
    }
  `}</style>
    <Popup trigger={<Image src="/icons/pin.png"
        width={size}
        height={size}/>}
        position="right center">
        <div className='text'>wadawdaw</div>
      <h4 className='color'>awwdawdaw</h4>
    </Popup>
  </div>
  )
  
};
