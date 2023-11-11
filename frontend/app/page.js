
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import PopupGfg from "../components/pop"

export default async function Home() {
  const flag = new Boolean(true)
  const res = await fetch('http://127.0.0.1:8000/places?age__lte=1200');
  const data = await res.json('utf8');
  console.log(data)
    const size = 40;
  return (
    < section className='Text'>
      <div className='Aboba'>
          <h1> SmolMap </h1>
      </div>
      <div className='Ass'>
        <Image
          src="/map2.jpg"
          width={1300}
          height={800}
          />
       </div>
       <div className='text'>
          <div className='container'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center"> 
            <div className='text'>wadawdaw</div> 
          <h4 className='color'>awwdawdaw</h4> 
        </Popup> 
      </div> 
       </div>

       <div className='text'>
          <div className='container1'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center"> 
            <div className='text'>wadawdaw</div> 
          <h4 className='color'>awwdawdaw</h4> 
        </Popup> 
      </div> 
       </div>

       <div className='text'>
          <div className='container2'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center"> 
            <div className='text'>wadawdaw</div> 
          <h4 className='color'>awwdawdaw</h4> 
        </Popup> 
      </div> 
       </div>

       <div className='text'>
          <div className='container3'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center"> 
            <div className='text'>wadawdaw</div> 
          <h4 className='color'>awwdawdaw</h4> 
        </Popup> 
      </div> 
       </div>

       <div className='text'>
          <div className='container4'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center"> 
            <div className='text'>wadawdaw</div> 
          <h4 className='color'>awwdawdaw</h4> 
        </Popup> 
      </div> 
       </div>

       <div className='text'>
          <div className='container5'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center"> 
            <div className='text'>wadawdaw</div> 
          <h4 className='color'>awwdawdaw</h4> 
        </Popup> 
      </div> 
       </div>

       <div className='text'>
          <div className='container6'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center">
            <div className='text'>wadawdaw</div>
          <h4 className='color'>awwdawdaw</h4>
        </Popup>
      </div> 
       </div>

       <div className='text'>
          <div className='container7'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center">
            <div className='text'>wadawdaw</div>
          <h4 className='color'>awwdawdaw</h4>
        </Popup>
      </div> 
       </div>

       <div className='text'>
          <div className='container8'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center">
            <div className='text'>wadawdaw</div>
          <h4 className='color'>awwdawdaw</h4>
        </Popup>
      </div> 
       </div>
        <div className='text'>
          <div className='container9'>
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center">
            <div className='text'>wadawdaw</div>
          <h4 className='color'>awwdawdaw</h4>
        </Popup>
      </div>
       </div>
        <div className='text'>
          <div className='container10'>
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center">
            <div className='text'>wadawdaw</div>
          <h4 className='color'>awwdawdaw</h4>
        </Popup>
      </div>
       </div>
        <div className='text'>
          <div className='container11'>
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center">
            <div className='text'>wadawdaw</div>
          <h4 className='color'>awwdawdaw</h4>
        </Popup>
      </div>
       </div>
        \<div className='text'>
          <div className='container12'>
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center">
            <div className='text'>wadawdaw</div>
          <h4 className='color'>awwdawdaw</h4>
        </Popup>
      </div>
       </div>
       
    </section>
  )
}
