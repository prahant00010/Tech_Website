'use client'

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { AnimatePresence } from 'framer-motion'

function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false)

  const openNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  return (
    <div>
      <Nav openNav={openNavHandler} />
      <AnimatePresence>
        {showNav && <MobileNav closeNav={closeNavHandler} />}
      </AnimatePresence>
    </div>
  )
}

export default ResponsiveNav
