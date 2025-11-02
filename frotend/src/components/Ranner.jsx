import React, { use } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Ranner = () => {

        const navigate = useNavigate();
  return (
    <div className="flex bg-blue-600 rounded-lg px-6 sm:px-10 sm:px-14 lg:px-12 my-20 md-mx-10">
      {/* ----- left side ------------ */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-10 sm:py-16 lg:py-20 text-white space-y-6 sm:space-y-8">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold space-y-2">
          <p >Book Appointmennt</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button onClick={() => navigate('/login')}className="bg-white text-sm sm:texxt-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">Create account</button>
      </div>
      {/* ----- right side ------------ */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative" >
        <img className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img} alt="" />
        </div>
    </div>
  );
};

export default Ranner;
