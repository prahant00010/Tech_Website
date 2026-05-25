import React from 'react'
import BoxText from '../Helper/BoxText'

import {
  FaBriefcase,
  FaChess,
  FaRocket,
  FaShoppingCart,
} from 'react-icons/fa'

import { MdOutlineDesignServices } from 'react-icons/md'

import { IoColorPaletteOutline } from 'react-icons/io5'

function Services() {
  return (
    <div className='pt-16 pb-16 bg-white'>

      <div className='w-[80%] mx-auto'>

        {/* Heading */}
        <BoxText>Our Services</BoxText>

        <h1 className='mt-4 text-2xl md:text-3xl font-bold text-gray-800 leading-[2.5rem]'>
          Our Services Made For You
        </h1>

        <p className='mt-4 text-sm sm:text-base w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt aliquam aspernatur dolore? Aperiam, possimus praesentium.
        </p>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-12 mt-16'>

          {/* Service 1 */}
          <div className='flex items-start space-x-5 group'>

            <div className='w-14 h-14 rounded-xl flex items-center justify-center bg-pink-500/20 group-hover:bg-pink-500 transition-all duration-300'>
              <FaRocket className='w-6 h-6 text-pink-500 group-hover:text-white transition-all duration-300' />
            </div>

            <div>
              <p className='text-lg font-bold text-gray-700'>
                Start Up
              </p>

              <p className='text-sm text-gray-600 mt-1 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque voluptatibus ut hic expedita.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className='flex items-start space-x-5 group'>

            <div className='w-14 h-14 rounded-xl flex items-center justify-center bg-blue-500/20 group-hover:bg-blue-500 transition-all duration-300'>
              <FaBriefcase className='w-6 h-6 text-blue-500 group-hover:text-white transition-all duration-300' />
            </div>

            <div>
              <p className='text-lg font-bold text-gray-700'>
                Business
              </p>

              <p className='text-sm text-gray-600 mt-1 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque voluptatibus ut hic expedita.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className='flex items-start space-x-5 group'>

            <div className='w-14 h-14 rounded-xl flex items-center justify-center bg-orange-500/20 group-hover:bg-orange-500 transition-all duration-300'>
              <FaShoppingCart className='w-6 h-6 text-orange-500 group-hover:text-white transition-all duration-300' />
            </div>

            <div>
              <p className='text-lg font-bold text-gray-700'>
                E-Commerce
              </p>

              <p className='text-sm text-gray-600 mt-1 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque voluptatibus ut hic expedita.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className='flex items-start space-x-5 group'>

            <div className='w-14 h-14 rounded-xl flex items-center justify-center bg-purple-500/20 group-hover:bg-purple-500 transition-all duration-300'>
              <MdOutlineDesignServices className='w-6 h-6 text-purple-500 group-hover:text-white transition-all duration-300' />
            </div>

            <div>
              <p className='text-lg font-bold text-gray-700'>
                Digital Design
              </p>

              <p className='text-sm text-gray-600 mt-1 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque voluptatibus ut hic expedita.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className='flex items-start space-x-5 group'>

            <div className='w-14 h-14 rounded-xl flex items-center justify-center bg-green-500/20 group-hover:bg-green-500 transition-all duration-300'>
              <IoColorPaletteOutline className='w-6 h-6 text-green-500 group-hover:text-white transition-all duration-300' />
            </div>

            <div>
              <p className='text-lg font-bold text-gray-700'>
                Unlimited Colors
              </p>

              <p className='text-sm text-gray-600 mt-1 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque voluptatibus ut hic expedita.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className='flex items-start space-x-5 group'>

            <div className='w-14 h-14 rounded-xl flex items-center justify-center bg-red-500/20 group-hover:bg-red-500 transition-all duration-300'>
              <FaChess className='w-6 h-6 text-red-500 group-hover:text-white transition-all duration-300' />
            </div>

            <div>
              <p className='text-lg font-bold text-gray-700'>
                Strategy Solutions
              </p>

              <p className='text-sm text-gray-600 mt-1 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque voluptatibus ut hic expedita.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services