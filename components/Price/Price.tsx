// Price.tsx

import React from 'react'
import PriceCard from './PriceCard'

function Price() {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>

      {/* Heading */}
      <h1 className='text-center text-2xl sm:text-3xl font-bold text-blue-900'>
        Choose A Plan That&apos;s Right For You
      </h1>

      <p className='mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto text-sm leading-relaxed'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis sit neque recusandae consectetur soluta.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Pricing Grid */}
      <div className='w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>

        <PriceCard
          time="3 Month"
          price="39.99"
        />

        <PriceCard
          time="12 Month"
          price="19.99"
        />

        <PriceCard
          time="Lifetime"
          price="59.99"
        />

      </div>

    </div>
  )
}

export default Price