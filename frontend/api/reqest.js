export default async function Home() {
  const res = await fetch('http://127.0.0.1:8000/places');
  const data = await res.json();
  return( 
    <div> 
      <Popup trigger={<button> ...</button>}  
       position="right center"> 
        <div>GeeksforGeeks</div> 
        <button className='"PoPit'>Click here</button> 
      </Popup> 
    </div> 
    ) 
}
