import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { specialityData } from '../assets/assets_frontend/assets.js';

const Doctors = () => {
  const navigate = useNavigate();

  const {speciality} = useParams();
  const [filter, setFilter] = useState([]);

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality === 'All') {
      setFilter(doctors);
    } else if (speciality) {
      setFilter(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilter(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);
  
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8'>
      <h1 className='text-3xl font-medium mb-6 text-gray-800'>Doctors</h1>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-1/4 flex flex-col gap-4'>
          <h2 className='text-xl font-medium text-gray-700'>Specialities</h2>
          <ul className='space-y-2'>
            <li onClick={() => navigate('/doctors/All')} className={`cursor-pointer p-2 rounded ${!speciality || speciality === 'All' ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`}>All</li>
            {specialityData.map((item, index) => (
              <li key={index} onClick={() => navigate(`/doctors/${item.speciality}`)} className={`cursor-pointer p-2 rounded ${speciality === item.speciality ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`}>
                {item.speciality}
              </li>
            ))}
          </ul> 
        </div>
        <div className='md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filter.map((doctor, index) => (
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
      </div>
    </div>
  )
}

export default Doctors;
