// ClientReviewCard.tsx

import React from 'react'
import Image from 'next/image'
import { BsStarHalf } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

type Props = {
  image: string
  name: string
  rating: string
}

function ClientReviewCard({ image, name, rating }: Props) {
  return (
    <div className='bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6'>

      {/* User Image */}
      <div className='flex-shrink-0'>
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className='rounded-xl object-cover'
        />
      </div>

      {/* Content */}
      <div>

        <h1 className='text-lg font-bold text-blue-950'>
          {name}
        </h1>

        {/* Rating */}
        <div className='flex items-center space-x-3 mt-2'>

          <p className='text-xl font-bold text-orange-500'>
            {rating}
          </p>

          <div className='flex items-center'>
            <FaStar className='w-4 h-4 text-yellow-500' />
            <FaStar className='w-4 h-4 text-yellow-500' />
            <FaStar className='w-4 h-4 text-yellow-500' />
            <FaStar className='w-4 h-4 text-yellow-500' />
            <BsStarHalf className='w-4 h-4 text-yellow-500' />
          </div>

        </div>

        {/* Review */}
        <p className='mt-3 text-sm sm:text-base text-gray-600 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Unde alias dolor quasi modi possimus repellendus at
          quibusdam doloribus natus.
        </p>

      </div>
    </div>
  )
}

export default ClientReviewCard