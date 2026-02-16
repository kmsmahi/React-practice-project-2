import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    console.log(player);
    const handleRemove=()=>{
        removePlayer(player)
    }
    return (
        <div className='max-w-[1200px] mx-auto mt-6'>
  <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    
    {/* Left Side: Image and Info */}
    <div className="flex items-center gap-4 lg:w-184">
      <div className="avatar">
        <div className="w-16 h-16 rounded-xl ring ring-offset-2 ring-gray-50">
          <img 
            src={player['player-image']} 
            alt={player['player-name']} 
            className="object-cover"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-black text-gray-800 leading-tight">
          {player['player-name']}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-medium text-gray-500">{player['playing-role']}</span>
          <div className="badge badge-sm badge-outline opacity-50 text-[10px] uppercase">
            {player['batting-style']?.split('-')[0]}
          </div>
        </div>
      </div>
    </div>

    {/* Right Side: Price and Delete */}
    <div className="flex items-center gap-6">
      <div className="hidden md:flex flex-col items-end">
        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Price</span>
        <span className="text-sm font-bold text-secondary">C {player['price']?.toString().slice(0, 2)}M</span>
      </div>
      
      <button onClick={handleRemove}
        className="btn btn-ghost btn-circle text-error hover:bg-red-50"
        title="Remove Player"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>

  </div>
</div>
    );
};

export default SelectedCard;