import React from 'react'
import Image from 'next/image'
import BoxText from '../Helper/BoxText'

function Team() {
  return (
    <div className='pt-20 pb-20 bg-white'>

      <div className='w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

        {/* LEFT CONTENT */}
        <div className='max-w-xl'>

          <BoxText>Our Team</BoxText>

          <h1 className='mt-5 text-3xl md:text-4xl font-bold text-gray-900 leading-[3rem]'>
            Our Team of Exceptional Talent,
            Innovation and Vision
          </h1>

          <p className='mt-5 text-gray-600 text-base leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime, quo soluta eius iusto eaque illum quos a laboriosam
            molestias.
          </p>

          {/* Button */}
          <div className='mt-8'>

            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 bg-red-500 rounded-2xl group hover:bg-red-600"
            >

              <span className="absolute top-0 right-0 w-5 h-5 bg-red-700 rounded-bl-xl"></span>

              <span className="relative z-10 text-lg">
                Join Our Team
              </span>

            </a>

          </div>
        </div>

        {/* RIGHT TEAM CARDS */}
        <div className='flex flex-col sm:flex-row justify-center gap-8'>

          {/* CARD 1 */}
          <div className='relative overflow-hidden rounded-3xl shadow-lg group w-full sm:w-[280px]'>

            <Image
              src="/images/t1.jpg"
              alt="team"
              width={400}
              height={400}
              className='w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105'
            />

            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-rose-600 to-rose-500 p-5'>

              <p className='text-xl font-bold text-white'>
                Obito Uchiha
              </p>

              <p className='text-rose-100 text-sm mt-1'>
                Founder
              </p>

            </div>
          </div>

          {/* CARD 2 */}
          <div className='relative overflow-hidden rounded-3xl shadow-lg group w-full sm:w-[280px]'>

            <Image
              src="/images/t2.jpg"
              alt="team"
              width={400}
              height={400}
              className='w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105'
            />

            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-600 to-orange-500 p-5'>

              <p className='text-xl font-bold text-white'>
                Nishika
              </p>

              <p className='text-orange-100 text-sm mt-1'>
                Co-Founder
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Team