import './App.css'
import navImg from './assets/logo.png'
import coinImg from './assets/coin.png'
import bannerImg from './assets/banner-main.png'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'

const fetchApi=async()=>{
  const res=await fetch('/players.json');
  return res.json();
}
function App() {
  const playerspromise=fetchApi();


  return (
    <>

    {/* navbar starting */}
      
      <div className="navbar flex  p-6 bg-gray-800 text-white max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="text-xl">
    <img className='w-[60px] h-[60px]'  src={navImg} alt="" /></a>
  </div>
  <div className="flex gap-2 items-center">
    <span className='text-xl font-semibold'>600000000</span>
    {/* <span className='text-xl font-semibold'>coins</span> */}
    <img className='w-[20px] h-[20px]' src={coinImg} alt="" />
  </div>
</div>

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

      <Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers playerspromise={playerspromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
