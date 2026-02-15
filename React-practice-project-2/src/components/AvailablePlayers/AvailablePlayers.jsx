import React, { use } from 'react';

const AvailablePlayers = ({playerspromise}) => {
    const playersData=use(playerspromise);
    console.log(playersData);
    
    return (
        <section className='max-w-[1200px] mx-auto'>
        <div className='flex justify-between items-center mt-10'>
            <div className='text-2xl font-bold'>
            available players
        </div>
        <div className='flex gap-4'>
            <button class="btn btn-warning">Available</button>
            <button class="btn btn-secondary">Selected(0)</button>
        </div>
        </div>

        <div className='grid grid-cols-3 gap-4 mt-10'>
            

<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-2xl border border-base-300 overflow-hidden group">
  {/* Figure with a subtle zoom effect on hover */}
  <figure className="relative h-64 overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Virat Kohli"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Top Right Rating Badge */}
    <div className="absolute top-4 right-4 badge badge-warning font-bold p-3 shadow-md">
      ⭐ 95 Rating
    </div>
  </figure>

  <div className="card-body gap-4">
    {/* Header Section */}
    <div>
      <div className="flex justify-between items-start">
        <h2 className="card-title text-3xl font-black uppercase tracking-tighter">
          Virat Kohli
        </h2>
        <div className="badge badge-outline text-xs opacity-70">INDIA</div>
      </div>
      <p className="text-xs font-bold text-primary uppercase mt-1">Batsman • Right-Handed</p>
    </div>

    {/* Description with clamped lines for better UI consistency */}
    <p className="text-sm text-gray-500 leading-relaxed italic">
      "Widely regarded as one of the greatest of all time, dominating the 2026 ODI circuit with over 28,000 international runs."
    </p>

    {/* Stats Grid for professionalism */}
    <div className="grid grid-cols-2 gap-2 py-2 border-y border-base-200">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase opacity-50 font-bold">Bowling</span>
        <span className="text-sm font-semibold text-base-content">RA Medium</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase opacity-50 font-bold">Market Value</span>
        <span className="text-sm font-bold text-success">15,000,000 Coins</span>
      </div>
    </div>

    {/* Action Section */}
    <div className="card-actions justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-xs opacity-50">Base Price</span>
        <span className="text-xl font-black text-secondary">C 15M</span>
      </div>
      <button className="btn btn-primary btn-md px-8 shadow-lg hover:animate-pulse">
        Purchase Player
      </button>
    </div>
  </div>
</div>
            
            
    </div>   
        </section>

    );
};

export default AvailablePlayers;