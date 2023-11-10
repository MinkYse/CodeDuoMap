
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import PopupGfg from "../components/pop"

export default function Home() {
  return (
    < section className='Text'>
      <div className='Aboba'>
          <h1> SmolMap (Капукитр?) </h1>
      </div>
      <div className='Aboba'>
        <Image
          src="/map2.jpg"
          width={1300}
          height={800}
          alt='Image'
          
       />
       <div className='Ass'>
          <div> 
          <Popup trigger={<button> Click to open popup </button>}  
          position="left"> 
            <div>GeeksforGeeks</div> 
            <button className='"PoPit'>Click here</button> 
          </Popup> 
          </div> 
        </div>
       </div>
    </section>
  )
}
