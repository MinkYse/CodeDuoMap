
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import PopupGfg from "../components/pop"

export default async function Home() {
  const res = await fetch('http://127.0.0.1:8000/places?age__lte=1200');
  const data = await res.json("utf8");
  for (const el in data){
    console.log(data[el])
  }
  //const place = JSON.parse(data[0])
  
  return (
    < section className='Text'>
      <div className='Aboba'>
          <h1> SmolMap (Капукитр?) </h1>
      </div>
      <div className='Ass'>
        <Image
          src="/map2.jpg"
          width={1300}
          height={800}
          />
       </div>
       <div className='PoPit'>
          <div className=''> 
          <PopupGfg/>
          </div>
        
       </div>
       
    </section>
  )
}
