import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_admin/assets'
import RelatedDoctors from '../components/RelatedDoctors'


const Appointment = () => {

    const { docId } = useParams()
    const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(false)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const navigate = useNavigate()

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId)
        setDocInfo(docInfo)
    }

    const getAvailableSolts = async () => {
        const today = new Date();
        const allSlots = [];
    
        for (let i = 0; i < 7; i++) {
    
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
    
            const endTime = new Date(currentDate);
            endTime.setHours(21, 0, 0, 0);
    
            // Set start time for slots
            if (i === 0) { // Today
                const now = new Date();
                // Start from the next hour if current time is past the hour
                const startHour = now.getHours() >= 10 ? now.getHours() + 1 : 10;
                currentDate.setHours(startHour, 0, 0, 0);
            } else {
                // For future days, start at 10:00 AM
                currentDate.setHours(10, 0, 0, 0);
            }
    
            const timeSlots = [];
    
            while (currentDate < endTime) {
                const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
                const day = currentDate.getDate();
                const month = currentDate.getMonth() + 1;
                const year = currentDate.getFullYear();
    
                const slotDate = `${day}_${month}_${year}`;
    
                const isSlotBooked = docInfo.slots_booked && docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(formattedTime);
                const isSlotAvailable = !isSlotBooked;
    
                if (isSlotAvailable) {
                    // Add slot to array
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    });
                }
    
                // Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
    
            allSlots.push(timeSlots);
        }
    
        setDocSlots(allSlots);
    }

    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo()
        }
    }, [doctors, docId])

    useEffect(() => {
        if (docInfo) {
            getAvailableSolts()
        }
    }, [docInfo])

    return docInfo?(
        <div>

            {/* ---------- Doctor Details ----------- */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
                </div>

                <div className='flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>

                    {/* ----- Doc Info : name, degree, experience ----- */}

                    <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
                    <div className='flex items-center gap-2 mt-1 text-gray-600'>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>

                    {/* ----- Doc About ----- */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>About <img className='w-3' src={assets.info_icon} alt="" /></p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>

                    <p className='text-gray-600 font-medium mt-4'>Appointment fee: <span className='text-gray-800'>{currencySymbol}{docInfo.fees}</span> </p>
                </div>
            </div>

            {/* Booking slots */}
            <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-700 text-sm flex flex-col gap-4'>
                <p  >Booking slots</p>
                <div className=' flex gap-3 items-center w-full overflow-x-scroll mt-4 '>
                    {docSlots.length && docSlots.map((item, index) => (
                        <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-[#DDDDDD]'}`}>
                            <p >{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 flex-wrap'>
                    {docSlots.length && docSlots[slotIndex].map((item, index) => (
                        <p onClick={() => setSlotTime(item.time)} key={index} className={`text-gray-700  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-green-500 text-white' : 'text-[#949494] border border-[#B4B4B4]'}`}>{item.time.toLowerCase()}</p>
                    ))}
                </div>
            </div>
            {/* Listing Releated Doctors */}

        </div>
    ) : null
}

export default Appointment