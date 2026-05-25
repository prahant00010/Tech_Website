import React from 'react'
import Image from "next/image"
import { GoWorkflow } from 'react-icons/go'
import { LuPen } from 'react-icons/lu'
import { MdAccessAlarm, MdOutlineTouchApp } from 'react-icons/md'

function Feature() {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>

      {/* Section Heading */}
      <div>
        <h1 className='text-center text-2xl sm:text-3xl font-bold text-blue-950'>
          My Features of The Product
        </h1>

        <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%] leading-relaxed text-sm'>
          Our product stands out with high performance, blazing-fast
          speed, seamless multitasking, and powerful integrations.
        </p>
      </div>

      {/* Main Grid */}
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

          {/* Card 1 */}
          <div className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
            
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-2xl flex items-center justify-center bg-pink-500/20'>
                <MdOutlineTouchApp className='w-6 h-6 text-pink-500' />
              </div>

              <h1 className='text-lg font-bold text-gray-700'>
                App Integration
              </h1>
            </div>

            <p className='mt-4 text-gray-600 leading-relaxed text-sm sm:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto at fugiat sint earum et amet voluptatem vitae quas quam.
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
            
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-500/20'>
                <GoWorkflow className='w-6 h-6 text-blue-500' />
              </div>

              <h1 className='text-lg font-bold text-gray-700'>
                Workflow Builder
              </h1>
            </div>

            <p className='mt-4 text-gray-600 leading-relaxed text-sm sm:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto at fugiat sint earum et amet voluptatem vitae quas quam.
            </p>
          </div>

          {/* Card 3 */}
          <div className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
            
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-2xl flex items-center justify-center bg-orange-500/20'>
                <LuPen className='w-6 h-6 text-orange-500' />
              </div>

              <h1 className='text-lg font-bold text-gray-700'>
                Problem Solution
              </h1>
            </div>

            <p className='mt-4 text-gray-600 leading-relaxed text-sm sm:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto at fugiat sint earum et amet voluptatem vitae quas quam.
            </p>
          </div>

          {/* Card 4 */}
          <div className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
            
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-2xl flex items-center justify-center bg-green-500/20'>
                <MdAccessAlarm className='w-6 h-6 text-green-500' />
              </div>

              <h1 className='text-lg font-bold text-gray-700'>
                Lifetime Access
              </h1>
            </div>

            <p className='mt-4 text-gray-600 leading-relaxed text-sm sm:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto at fugiat sint earum et amet voluptatem vitae quas quam.
            </p>
          </div>

        </div>

        {/* Feature Image */}
        <div className='flex justify-center'>
          <Image
            src="/images/f1.png"
            alt="feature"
            width={700}
            height={700}
            className='w-full h-auto object-contain'
          />
        </div>

      </div>
    </div>
  )
}

export default Feature