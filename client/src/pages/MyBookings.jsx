// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../context/useAppContext'
// import { assets, dummyBookingsData } from '../assets/data'

// const MyBookings = () => {
//   const [bookings, setBookings] = useState([])
//   const { user, currency } = useAppContext()

//   const getUserBooking = ()=>{
//     setBookings(dummyBookingsData)
//   }
//   useEffect(()=> {
//     if(user){
//       getUserBooking()
//     }
//   }, [user])
//   return (
//     <div className='max-padd-container bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28'>
//       {bookings?.map((booking)=>(
//         <div key={booking._id} className='bg-white ring-1 ring-slate-900/5 p-2 pr-4 mt-3 rounded-lg'>
//           {/* Property List */}
//           <div className='flexStart gap-3 mb-3'>
//             <img
//               src={booking.property.images && booking.property.images[0] ? booking.property.images[0] : assets.logoImg}
//               alt="property Img"
//               className='h-14 w-26 object-cover rounded-lg'
//             />
//             <div>
//               <h5 className='h5 capitalize line-clamp-1'>
//                 {booking.property.title}
//               </h5>
//               <div className='flex gap-4' >
//                 <div className='flex items-center gap-x-2'>
//                   <h5 className='medium-14'>Total</h5>
//                   <p className='text-gray-400 text-sm'>
//                     {currency}{booking.totalPrice}
//                   </p>
//                 </div>
//               </div>
//               <p>
//                 <img src={assets.pin} alt="" width={13} />
//                 {booking.property.address}
//               </p>
//             </div>
//           </div>
//           {/* Booking Summary */}
//           <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 border-t border-gray-300 pt-3'>
//             <div className='flex gap-2 gap-x-4 flex-wrap'>
//               <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Booking ID:</h5>
//                 <p className="text-gray-400 text-xs break-all">{booking._id}</p>
//               </div>
//               <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Check-In:</h5>
//                 <p className='text-gray-400 text-xs'>{booking.checkInDate.toDateString()}</p>
//               </div>
//                <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Check-Out:</h5>
//                 <p className='text-gray-400 text-xs'>{booking.checkOutDate.toDateString()}</p>
//               </div>
//             </div>
//             <div className='flex gap-2 gap-x-3'>
//               <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Payment:</h5>
//                 <div className='flex items-center gap-1'>
//                   <span className={`min-w-2.5 h-2.5 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-yellow-500"}`}/>
//                     <p>{booking.isPaid ? "Paid" : "Unpaid"}</p>
                  
//                 </div>
//               </div>
//               {!booking.isPaid && (
//                 <button className='btn-secondary !py-1 !text-xs rounded-sm'>Pay Now</button>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default MyBookings











import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/useAppContext'
import { assets, dummyBookingsData } from '../assets/data'

const MyBookings = () => {
  const [bookings, setBookings] = useState([])
  const { user, currency } = useAppContext()

  const getUserBooking = () => {
    setBookings(dummyBookingsData)
  }

  useEffect(() => {
    if (user) {
      getUserBooking()
    }
  }, [user])

  // Common issues and fixes:

  // 1. Add loading state and empty state handling
  if (!user) {
    return (
      <div className='max-padd-container bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28'>
        <div className='text-center'>Please log in to view your bookings.</div>
      </div>
    )
  }

  // 2. Handle case when bookings array is empty
  if (bookings.length === 0) {
    return (
      <div className='max-padd-container bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28'>
        <div className='text-center'>No bookings found.</div>
      </div>
    )
  }

  return (
    <div className='max-padd-container bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28'>
      {bookings?.map((booking) => (
        <div key={booking._id} className='bg-white ring-1 ring-slate-900/5 p-2 pr-4 mt-3 rounded-lg'>
          {/* Property List */}
          <div className='flexStart gap-3 mb-3'>
            <img
              src={booking.property?.images && booking.property.images[0] ? booking.property.images[0] : assets.logoImg}
              alt="property Img"
              className='h-14 w-26 object-cover rounded-lg'
              onError={(e) => {
                e.target.src = assets.logoImg // Fallback if image fails to load
              }}
            />
            <div>
              <h5 className='h5 capitalize line-clamp-1'>
                {booking.property?.title || 'Property title not available'}
              </h5>
              <div className='flex gap-4' >
                <div className='flex items-center gap-x-2'>
                  <h5 className='medium-14'>Total</h5>
                  <p className='text-gray-400 text-sm'>
                    {currency}{booking.totalPrice || 0}
                  </p>
                </div>
              </div>
              <p className='flex items-center gap-1'>
                <img src={assets.pin} alt="location pin" width={13} />
                {booking.property?.address || 'Address not available'}
              </p>
            </div>
          </div>
          {/* Booking Summary */}
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 border-t border-gray-300 pt-3'>
            <div className='flex gap-2 gap-x-4 flex-wrap'>
              <div className='flex items-center gap-x-2'>
                <h5 className='medium-14'>Booking ID:</h5>
                <p className="text-gray-400 text-xs break-all">{booking._id || 'N/A'}</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <h5 className='medium-14'>Check-In:</h5>
                <p className='text-gray-400 text-xs'>
                  {booking.checkInDate ? new Date(booking.checkInDate).toDateString() : 'Date not available'}
                </p>
              </div>
              <div className='flex items-center gap-x-2'>
                <h5 className='medium-14'>Check-Out:</h5>
                <p className='text-gray-400 text-xs'>
                  {booking.checkOutDate ? new Date(booking.checkOutDate).toDateString() : 'Date not available'}
                </p>
              </div>
            </div>
            <div className='flex gap-2 gap-x-3'>
              <div className='flex items-center gap-x-2'>
                <h5 className='medium-14'>Payment:</h5>
                <div className='flex items-center gap-1'>
                  <span className={`min-w-2.5 h-2.5 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-yellow-500"}`} />
                  <p>{booking.isPaid ? "Paid" : "Unpaid"}</p>
                </div>
              </div>
              {!booking.isPaid && (
                <button className='btn-secondary !py-1 !text-xs rounded-sm'>Pay Now</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyBookings






