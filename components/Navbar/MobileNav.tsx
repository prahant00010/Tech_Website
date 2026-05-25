'use client'

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'

type Props = {
  closeNav: () => void
}

function MobileNav({ closeNav }: Props) {
  const pathname = usePathname()

  return (
    <div className="fixed inset-0 z-[1050] flex">
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={closeNav}
        className="fixed inset-0 bg-black w-full h-screen"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-blue-950 shadow-2xl z-[1060] flex flex-col p-8"
      >
        {/* Close Icon */}
        <div className="flex justify-end mb-8">
          <CgClose
            onClick={closeNav}
            className="w-8 h-8 text-white cursor-pointer hover:text-rose-500 transition-colors duration-200"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.url
            return (
              <Link key={link.id} href={link.url} onClick={closeNav}>
                <span className={`text-xl block pb-1 border-b w-fit transition-all duration-300 ${
                  isActive
                    ? 'text-rose-400 border-rose-400 font-bold'
                    : 'text-white border-transparent hover:text-rose-400'
                }`}>
                  {link.label}
                </span>
              </Link>
            )
          })}
        </div>

        {/* CTA Button in Mobile Menu */}
        <div className="mt-12">
          <Link
            href="/contact"
            onClick={closeNav}
            className="w-full text-center block px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default MobileNav
