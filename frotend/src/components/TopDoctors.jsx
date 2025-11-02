import React, { useContext } from "react";
import { assets, doctors } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const TopDoctors = () => {
        const navigate = useNavigate();
        const { doctors} = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm sm-w-1/2 text-center">Simply browse through our extensive list of trusted doctors.</p>
      <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 w-full">
        {/* Top Doctors content goes here */}
        {doctors.map((doctor, index) => (
          <div onClick={()=>navigate(`appointment/${doctor._id}`)}
          key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" >
            <img className=" bg-blue-50"src={doctor.image} alt={doctor.name} />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2 text-sm text-green-500 text-center">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg text-medium">{doctor.name}</p>
              <p className="text-gray-500 text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className="bg-blue-50 text-gray-800 px-12 py-3 rounded-full mt-10">more</button>
    </div>
  );
};

export default TopDoctors;
