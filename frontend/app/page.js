import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    < section className='Text'>
      <div className='Aboba'>
          <h1> SmolMap</h1>
      </div>
      <div className='Aboba'>
        <Image
          src="/map2.jpg"
          width={1300}
         height={800}
       />
      </div>
      <div  className='Progres'>
         
      </div>
   
    </section>
    
   

  )

}
