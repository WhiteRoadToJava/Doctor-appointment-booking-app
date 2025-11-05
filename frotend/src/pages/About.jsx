import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";


const About = () => {
  return <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-2xl pt-10 text-grau-700">
          <p >ABOUT <span className="text-gray-700 font-medium">us</span></p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 mt-8 text-gray-600">
          <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />

          <div className="flex flex-col text-gray-600 justify-center gap-6 md:w-2/4 text-sm " >
          <p >Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records. </p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <p className="text-gray-800 text-xl font-medium">Our Vision</p>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
        </div>

        <div className="text-xl my-4">
          <p>Why <span className="text-gray-700 font-semibold">Choose Us</span></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600 text-sm">
          <div className="border px-10 flex flex-col gap-5 text-[15px] hover:bg-blue-500 vr:bg-blue-500 hover:text-white transition-all duretion-500 text-gray-700 py-8 rounded-lg cursor-pointer">
            <p className="font-medium font/semibold">Efficiency</p>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div >
          <div className="border px-10 flex flex-col gap-5 text-[15px] hover:bg-blue-500 vr:bg-blue-500 hover:text-white transition-all duretion-500 text-gray-700 py-8 rounded-lg cursor-pointer">
            <p className="font-medium font/semibold">Convenience</p>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className="border px-10 flex flex-col gap-5 text-[15px] hover:bg-blue-500 vr:bg-blue-500 hover:text-white transition-all duretion-500 text-gray-700 py-8 rounded-lg cursor-pointer">
            <p className="font-medium font/semibold">Personalization</p>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
        
  </div>;
};

export default About;
