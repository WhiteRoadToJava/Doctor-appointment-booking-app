import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const TopDoctors = () => {
        const navigate = useNavigate();
        const { doctors} = useContext(AppContext);
  return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
  <div className='md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {doctors.map((doctor, index) => (
            <div onClick={() => navigate(`/appointment/${doctor._id}`)}
              key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" >
              <img className="w-full h-full object-cover bg-blue-50 rounded-t-lg" src={doctor.image} alt={doctor.name} />
              <div className="p-4 text-center w-full">
                <div className="flex items-center justify-center gap-2 mb-2 text-sm text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available</span>
                </div>
                <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
                <p className="text-gray-500 text-sm">{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
        </div>
  );
};

export default TopDoctors;
