// PriceCard.tsx

import React from 'react'

type Props = {
  time: string
  price: string
}

function PriceCard({ price, time }: Props) {
  return (
    <div className='bg-white rounded-2xl p-8 relative border-t-4 border-rose-400 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>

      {/* Plan */}
      <h1 className='text-sky-500 text-2xl font-bold'>
        {time} Membership
      </h1>

      {/* Description */}
      <p className='mt-4 text-gray-600 font-medium leading-relaxed text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facere dolores culpa in maxime tempora cumque.
      </p>

      {/* Price */}
      <div className='mt-8'>

        <div className='text-gray-700 font-semibold text-lg'>
          <span className='text-4xl font-bold text-blue-950'>
            ${price}
          </span>

          <span className='text-gray-500 text-base'>
            {' '} / Month
          </span>
        </div>

      </div>
<div className='mt-12'>
<a href="#_" className="px-10 py-2.5 text-base font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
    Upgrade Now
</a>
</div>
      
    </div>
  )
}

export default PriceCard