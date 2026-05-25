import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
function Hero() {
  return (
    <div className='relative w-full min-h-[110vh] sm:min-h-screen py-16 sm:py-0 bg-[url("/images/bg.png")] bg-cover bg-center flex justify-center flex-col'>

      <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>

        {/* Text Content */}
        <div>
          <p className='text-sm sm:text-base md:text-xl font-bold text-blue-950'>
            Build your future
          </p>

          <h2 className='text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 leading-[2.5rem] md:leading-[3.5rem]'>
            Kickstart, Scale, and Thrive faster with{" "}
            <span className='text-rose-700'>TechDev</span>
          </h2>

          <p className='text-xs sm:text-sm md:text-base font-medium text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe
            asperiores, excepturi dicta quisquam accusantium voluptatum aliquam.
            Obcaecati maxime non nobis a natus. Eos minus dignissimos
            accusamus, optio nesciunt nisi labore magnam facilis perspiciatis.
          </p>

          {/* Ratings Section */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-6 mt-6'>

            {/* Google Rating */}
            <div className='flex items-center gap-4'>
              <Image
                src='/images/google.png'
                alt='google'
                width={40}
                height={40}
              />

              <div>
                <div className='flex items-center gap-2'>
                  <h1 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-bold'>
                    4.5
                  </h1>

                  <div className='flex items-center'>
                    <FaStar className='w-4 h-4 text-yellow-500' />
                    <FaStar className='w-4 h-4 text-yellow-500' />
                    <FaStar className='w-4 h-4 text-yellow-500' />
                    <FaStar className='w-4 h-4 text-yellow-500' />
                    <BsStarHalf className='w-4 h-4 text-yellow-500' />
                  </div>
                </div>

                <p className='text-gray-700 text-sm sm:text-base'>
                  Best Rated On Google
                </p>
              </div>
            </div>

            {/* LinkedIn Rating */}
            <div className='flex items-center gap-4'>
              <Image
                src='/images/linkedin.png'
                alt='linkedin'
                width={40}
                height={40}
              />

              <div>
                <div className='flex items-center gap-2'>
                  <h1 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-bold'>
                    4.7
                  </h1>

                  <div className='flex items-center'>
                    <FaStar className='w-4 h-4 text-yellow-500' />
                    <FaStar className='w-4 h-4 text-yellow-500' />
                    <FaStar className='w-4 h-4 text-yellow-500' />
                    <FaStar className='w-4 h-4 text-yellow-500' />
                    <BsStarHalf className='w-4 h-4 text-yellow-500' />
                  </div>
                </div>

                <p className='text-gray-700 text-sm sm:text-base'>
                  Best Rated On LinkedIn
                </p>
              </div>
            </div>

          </div>
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
<div className="flex items-center gap-4">
  
  {/* Rose Red Button */}
  <Link
    href="/"
    className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden text-sm font-semibold text-white rounded-lg group"
  >
    {/* Glow */}
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-500 to-red-600 transition-all duration-500 group-hover:scale-110 group-hover:blur-md"></span>

    {/* Overlay */}
    <span className="absolute inset-0 w-full h-full bg-black/10"></span>

    {/* Text */}
    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
      Get Free Trial
    </span>
  </Link>

  {/* Baby Pink Button */}
  <Link
    href="/"
    className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden text-sm font-semibold text-pink-900 rounded-lg group"
  >
    {/* Glow */}
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-200 to-pink-400 transition-all duration-500 group-hover:scale-110 group-hover:blur-md"></span>

    {/* Overlay */}
    <span className="absolute inset-0 w-full h-full bg-white/20"></span>

    {/* Text */}
    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
      Create Account
    </span>
  </Link>

</div>

          </div>
        </div>

        {/* Image Content */}
        <div className="mx-auto hidden xl:block">

          {/* Add hero image here */}
          <Image
            src="/images/hero.jpg"
            alt="Hero illustration"
            width={900}
            height={900}
            className="w-full h-auto max-w-[600px] mx-auto object-contain transition-transform duration-700 hover:scale-105"
            priority
          />

        </div>

      </div>
    </div>
  );
}

export default Hero;