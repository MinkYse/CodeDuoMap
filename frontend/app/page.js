
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
            <div className='text'>Сад Блонье</div>
          <h4 className='color'>В черте города местность Блонье оказалась в XVI веке. Сад Блонье официально был заложен в 1830 году. В это время ровную площадку у стен Смоленской крепости, использовавшуюся как плацдарм для муштры солдат, указом императора Николая I стали переоборудовать под сад. Руководил строительством тогдашний губернатор Смоленщины Николай Иванович Хмельницкий. В 1885 году здесь был торжественно открыт памятник композитору М. И. Глинке, поэтому Блонье в наше время носит название сад им. М. И. Глинки.</h4>
        </Popup> 
      </div> 
       </div>

       <div className='text'>
          <div className='container1'> 
            <Popup trigger={<Image src="/icons/pin.png"
            width={size}
            height={size}/>}
            position="right center"> 
            <div className='text'>Церковь Петра и Павла на Городянке</div>
          <h4 className='color'>Храм Святых Апостолов Петра и Павла на Городя́нке (Петропа́вловская це́рковь) — православный храм XII века в заднепровской    части Смоленска. Один из трёх сохранившихся в городе памятников древнерусского зодчества. С западной стороны к нему почти примыкает церковь святой великомученицы Варвары XVIII века.</h4>
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
            <div className='text'>Собо́р Успе́ния Пресвято́й Богоро́дицы</div>
          <h4 className='color'>Собо́р Успе́ния Пресвято́й Богоро́дицы — православный храм в Смоленске. Возведён на рубеже XVII и XVIII веков в память о ге   ероической обороне Смоленска 1609—1611 годов на месте одноимённого собора XII века. В соборный ансамбль входят также надвратная Богоявленская церковь с деревянным завершением (1785—1787), предназначенная для богослужений в холодное время года, колокольня (1767—1772; архитектор Пётр Обухов) и расположенный к югу комплекс архиерейского двора с церковью Иоанна Предтечи (1699—1703, перестроена в 1780-х годах).</h4>
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
