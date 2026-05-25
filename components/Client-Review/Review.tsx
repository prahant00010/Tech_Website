import React from 'react'
import ClientReviewCard from './ClientReviewCard'

function Review() {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <h1 className=' text-center text-2xl text-blue-950 font-bold'>
            Our Happy Customer</h1>
            <p className='mt-3 text-center text-sm font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores doloribus, dolores in unde beatae qui atque corrupti. Maiores!</p>
                {/*grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto'>
<div>

    <ClientReviewCard
     image="/images/u1.jpg"
      name="Simren"
       rating="4.7"/>
</div>
<div>

    <ClientReviewCard
     image="/images/u2.jpg"
      name="Jonny"
       rating="4.9"/>
</div>

<div>

    <ClientReviewCard
     image="/images/u3.jpg"
      name="Jassi"
       rating="4.73"/>
</div>
<div>

    <ClientReviewCard
     image="/images/u4.jpg"
      name="Honney"
       rating="4.56"/>
</div>
                </div>

    
    </div>
  )
}

export default Review
