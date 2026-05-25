import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Feature from '../Feature/Feature'
import Services from '../Services/Services'
import Review from '../Client-Review/Review'
import Team from '../Team/Team'
import Price from '../Price/Price'

function Home() {
  return (
    
       <div className='overflow-hidden '>
        <Hero/>
     <About/>
     <Feature/>
     <Services/>
     <Review/>
     <Team/>
     <Price/>
     
    </div>
    
  )
}

export default Home


