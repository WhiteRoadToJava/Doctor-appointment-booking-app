import React, {useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';


const RelatedDoctors = ({docId, speciality}) => {
  const {doctors} = useContext(AppContext);

  const [relDoc, setRelDoc] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    if(doctors.length > 0, speciality){
      const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
      setRelDoc(doctorsData);
    }
  }, [docId, speciality, doctors])
  return (
 <div className='md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {relDoc.map((doctor, index) => (
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
  )
}

export default RelatedDoctors
