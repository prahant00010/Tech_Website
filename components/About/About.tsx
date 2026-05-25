import React from 'react'
import Image from "next/image"
import BoxText from '../Helper/BoxText'

function About() {
  return (
    <div className='pt-16 pb-16'>
      
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        
        {/* Image */}
        <div>
          <Image
            src="/images/about.png"
            alt="about"
            width={600}
            height={600}
            className='object-contain'
          />
        </div>

        {/* Text Content */}
        <div>

          <BoxText>About Us</BoxText>

          <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]'>
            Everything You Need To Grow Business
          </h1>

          <p className='mt-3 leading-relaxed text-sm sm:text-base text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique beatae, suscipit porro labore qui vel quos aperiam
            ab tempora eum cum nemo voluptatem esse itaque cupiditate
            repudiandae ratione!
          </p>

          <button className='mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967] hover:text-[#ff7f5c] transition-all duration-300'>
            Learn More &rarr;
          </button>

          {/* Quote Section */}
          <div className='mt-8 border-l-2 border-gray-200 pl-6'>

            <p className='text-gray-700  text-sm font-medium italic'>
              &quot;Alias tenetur inventore voluptatem illum commodi laboriosam.&quot;
            </p>

            <div className='flex items-center space-x-4 mt-4'>

              <Image
                src="/images/u1.jpg"
                alt="user"
                width={45}
                height={45}
                className='rounded-full'
              />

              <div>
                <p className='font-semibold text-gray-900'>
                  Simran
                </p>

                <p className='text-gray-600 text-sm'>
                  ML Developer @TechDev
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About