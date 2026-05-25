'use client'

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GrTechnology } from 'react-icons/gr'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav: () => void
}

function Nav({ openNav }: Props) {
  const [navbg, setNavbg] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true)
      if (window.scrollY < 90) setNavbg(false)
    }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Solid background on non-home pages or when scrolled
  const isSolidNav = navbg || pathname !== '/'

  return (
    <div className={`transition-all duration-300 h-[12vh] z-[100] fixed w-full ${
      isSolidNav ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer group">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
            <GrTechnology className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-blue-800 transition-colors duration-300 group-hover:text-blue-900">
            TechDev
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.url
            return (
              <Link
                key={link.id}
                href={link.url}
                className={`font-semibold relative py-1 transition-all duration-300 ${
                  isActive 
                    ? "text-rose-600" 
                    : "text-black hover:text-rose-500"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-rose-500 rounded-full" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden sm:block px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden hover:text-blue-800 transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
