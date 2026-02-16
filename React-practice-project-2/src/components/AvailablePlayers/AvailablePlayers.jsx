import React, { use, useState } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
const AvailablePlayers = ({ playerspromise,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasedPlayers}) => {
  const playersData = use(playerspromise);
  

  return (
    <section className='max-w-[1200px] mx-auto'>
      

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10'>
        {playersData.map((player, index) => (
        <PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} key={index} player={player}></PlayerCard>
          
        ))}
    
      </div>
    </section>
  );
};

export default AvailablePlayers;