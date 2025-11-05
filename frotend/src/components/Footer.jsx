import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='my-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
        {/* Left Section */}
        <div className='space-y-4'>
                <img className='w-full-[-10]' src={assets.logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        {/* Middle Section */}
        <div className='space-y-4'>
                <p>COMPANY</p>
                <ul className='space-y-2 mt-4'>
                        <li>Hone</li>
                        <li>About us</li>
                        <li>Conntact us</li>
                        <li>Privacy policy</li>
                </ul >
        </div>
        {/* Right Section */}
        <div className='space-y-4'>
                <p >GET IN TOUCH</p>
                <ul className='space-y-2 mt-4'>
                        <li>+1 123 123 123</li>
                        <li>msaabbas6@gmail.com</li>
                </ul>
        </div>
      </div>
      {/* -------- Copyright Text -------- */}
      <div className='text-center text-gray-500'>
        <hr />
        <p className='py-4'>© 2024 Appointment Booking. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
