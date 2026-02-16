import React from 'react';
// import navImg from './assets/logo.png'
// import coinImg from './assets/coin.png'

import navImg from '../../assets/logo.png'
import coinImg from '../../assets/coin.png'

const NavBar = ({availableBalance}) => {
    return (
        <div className="navbar flex  p-6 bg-gray-800 text-white max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="text-xl">
    <img className='w-[60px] h-[60px]'  src={navImg} alt="" /></a>
  </div>
  <div className="flex gap-2 items-center">
    <span className='text-xl font-semibold'>{availableBalance}</span>
    {/* <span className='text-xl font-semibold'>coins</span> */}
    <img className='w-[20px] h-[20px]' src={coinImg} alt="" />
  </div>
</div>
    );
};

export default NavBar;