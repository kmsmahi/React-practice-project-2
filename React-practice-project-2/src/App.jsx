import './App.css'
import bannerImg from './assets/banner-main.png'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'
import NavBar from './components/navbar/NavBar'

const fetchApi=async()=>{
  const res=await fetch('/players.json');
  return res.json();
}
function App() {
  const [availableBalance,setAvailableBalance]=useState(600000000);
  const [toggle,setToggle]=useState(true);
  const [purchasedPlayers,setPurchasedPlayers]=useState([]);
  const playerspromise=fetchApi();


  return (
    <>

    {/* navbar starting */}
      
      <NavBar setAvailableBalance={setAvailableBalance} availableBalance={availableBalance}></NavBar>

    {/* navbar ending */}

     {/* banner starting */}

     <section className='max-w-[1200px] mx-auto'>
      <div className="banner flex items-center gap-10 mt-10">
        <div className="banner-left flex-1">
          <h1 className='text-4xl font-bold mb-4'>Welcome to the Coin World</h1>
          <p className='text-lg text-gray-600 mb-6'>Discover the exciting world of cryptocurrencies and digital assets. Stay updated with the latest trends and insights in the crypto market.</p>
          <button className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'>Get Started</button>
        </div>
        <div className="banner-right flex-1">
          <img src={bannerImg} alt="Banner Image" className='w-full h-auto' />
        </div>

      </div>
        
      

     </section>

      {/* banner ending */}

      <div className='max-w-[1200px] mx-auto flex justify-between items-center mt-10'>
        <div className='text-2xl font-bold'>Available Players</div>
        <div className='flex gap-4'>
          <button onClick={()=>setToggle(true)} className="btn btn-warning">Available</button>
          <button onClick={()=>setToggle(false)} className="btn btn-secondary">Selected (<span>{purchasedPlayers.length}</span>)</button>
        </div>
      </div>

      {
        toggle===true?<Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerspromise={playerspromise}></AvailablePlayers>
      </Suspense>:<Suspense><SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers></Suspense>
      }

      

    </>
  )
}

export default App
