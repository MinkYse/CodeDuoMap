
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import PopupGfg from "../components/pop"

export default function Home() {
  let animals = [ 
    { name: 'Vasya', type: 'Cat', age: 4},
    { name: 'Murka', type: 'Cat', age: 1.5 },
    { name: 'Varna', type: 'Turtle', age: 21 },
    { name: 'Kesha', type: 'Parrot', age: 3 },
    { name: 'Nayda', type: 'Dog', age: 2.5 },
    { name: 'Pufic', type: 'Humster', age: 2.5 },
    { name: 'Randy', type: 'dog', age: 12 },
];
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
