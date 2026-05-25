import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='pt-16 pb-10 bg-gradient-to-b from-rose-50 to-white border-t border-rose-200'>

      {/* Main Footer */}
      <div className='w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>

        {/* 1st Column */}
        <div className='space-y-5'>

          <h1 className='text-xl font-bold text-gray-900'>
            Solution
          </h1>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-rose-500 transition-all duration-300'>
            Enterprise
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-rose-500 transition-all duration-300'>
            By Workflow
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-rose-500 transition-all duration-300'>
            By Team
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-rose-500 transition-all duration-300'>
            Pricing
          </p>

        </div>

        {/* 2nd Column */}
        <div className='space-y-5'>

          <h1 className='text-xl font-bold text-gray-900'>
            Company
          </h1>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-blue-500 transition-all duration-300'>
            About Us
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-blue-500 transition-all duration-300'>
            Careers
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-blue-500 transition-all duration-300'>
            Contact
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-blue-500 transition-all duration-300'>
            Our Team
          </p>

        </div>

        {/* 3rd Column */}
        <div className='space-y-5'>

          <h1 className='text-xl font-bold text-gray-900'>
            Resources
          </h1>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-orange-500 transition-all duration-300'>
            Blog
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-orange-500 transition-all duration-300'>
            Help Center
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-orange-500 transition-all duration-300'>
            Privacy Policy
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-orange-500 transition-all duration-300'>
            Terms & Conditions
          </p>

        </div>

        {/* 4th Column */}
        <div className='space-y-5'>

          <h1 className='text-xl font-bold text-gray-900'>
            Get App
          </h1>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-green-500 transition-all duration-300'>
            iOS App
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-green-500 transition-all duration-300'>
            Android App
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-green-500 transition-all duration-300'>
            Desktop Version
          </p>

          <p className='text-gray-700 text-sm font-medium cursor-pointer hover:text-green-500 transition-all duration-300'>
            Web Version
          </p>

        </div>

      </div>

      {/* Divider */}
      <div className='w-[90%] lg:w-[80%] mx-auto mt-12 mb-6 border-t border-gray-300'></div>

      {/* Bottom Footer */}
      <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-5'>

        {/* Logo / Brand */}
        <h1 className='text-2xl font-bold text-gray-900'>
          TechDev
        </h1>

        {/* Copyright */}
        <p className='text-sm text-gray-600 text-center'>
          © 2026 TechDev. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className='flex items-center space-x-4'>

          {/* Facebook */}
          <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300'>
            <FaFacebookF className='text-sm' />
          </div>

          {/* Twitter */}
          <div className='w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center cursor-pointer hover:bg-sky-500 hover:text-white transition-all duration-300'>
            <FaTwitter className='text-sm' />
          </div>

          {/* Instagram */}
          <div className='w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center cursor-pointer hover:bg-pink-500 hover:text-white transition-all duration-300'>
            <FaInstagram className='text-sm' />
          </div>

          {/* LinkedIn */}
          <div className='w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center cursor-pointer hover:bg-indigo-600 hover:text-white transition-all duration-300'>
            <FaLinkedinIn className='text-sm' />
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer