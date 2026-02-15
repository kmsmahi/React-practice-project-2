import React, { use } from 'react';

const AvailablePlayers = ({ playerspromise }) => {
  const playersData = use(playerspromise);

  return (
    <section className='max-w-[1200px] mx-auto'>
      

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10'>
        {playersData.map((player, index) => (
          <div key={index} className="card bg-base-100 shadow-2xl border border-base-300 overflow-hidden group">
            {/* Figure with zoom effect */}
            <figure className="relative h-64 overflow-hidden">
              <img
                src={player['player-image']}
                alt={player['player-name']}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
                ⭐ {player['rating']} Rating
              </div>
            </figure>

            <div className="card-body gap-4">
              <div>
                <div className="flex justify-between items-start">
                  <h2 className="card-title text-2xl font-black uppercase tracking-tighter">
                    {player['player-name']}
                  </h2>
                  <div className="badge badge-outline text-xs opacity-70">{player['player-country']}</div>
                </div>
                <p className="text-xs font-bold text-primary uppercase mt-1">
                  {player['playing-role']} • {player['batting-style']}
                </p>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed italic">
                Professional cricket player competing at the highest international level in 2026.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
                  <span className="text-sm font-semibold text-base-content">{player['bolling-style']}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
                  <span className="text-sm font-bold text-success">{player['price'].toLocaleString()}</span>
                </div>
              </div>

              {/* Action Section - FIX APPLIED HERE */}
              <div className="card-actions justify-between items-center mt-2">
                <div className="flex flex-col">
                  <span className="text-xs opacity-50 uppercase font-bold">Base Price</span>
                  <span className="text-xl font-black text-secondary">
                    C {player['price'].toString().slice(0, 2)}M
                  </span>
                </div>
                <button className="btn btn-primary btn-md px-6 shadow-lg hover:animate-pulse">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailablePlayers;