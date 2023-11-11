
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import PopupGfg from "../components/pop"

export default async function Home() {
  
  
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
       <div >
          <div className='PoPit'> 
          <PopupGfg/>
          </div>
        
       </div>
       
    </section>
  )
}
