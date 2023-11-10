
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
       />
       <PopupGfg />
      </div>
      <div  className='Progres'>

      </div>
      
    </section>
    
   

  )

}
