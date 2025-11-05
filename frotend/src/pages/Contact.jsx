import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>


      <div className="px-4 sm:px-6 lg:px-8 py-8 text-3xl font-medium text-gray-800 mb-6 flex items-center gap-2">
        <p >Contact <span className="text-gray-700 font-medium">Us</span> </p>
      </div>
      <div className='flex flex-col md:flex-row gap-10 px-4 sm:px-6 lg:px-8 py-8 mb-16'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-4 text-gray-600 text-sm md:text-base'>
          <p >Our Office</p>
          <p> SNICKAREGATAN 7D</p>
          <p>511 55 KINNA</p>
          <p>SWEDEN</p>
          <p>+46 762 63 8940 </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white duration-300 transition-all rounded-4px' > Explore Jobs</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
