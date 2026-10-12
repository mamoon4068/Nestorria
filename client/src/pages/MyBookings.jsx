<<<<<<< HEAD

=======
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../context/useAppContext'
// import { assets, dummyBookingsData } from '../assets/data'

// const MyBookings = () => {
//   const [bookings, setBookings] = useState([])
//   const { user, currency } = useAppContext()

<<<<<<< HEAD
//   const getUserBooking = () => {
//     setBookings(dummyBookingsData)
//   }

//   useEffect(() => {
//     if (user) {
//       getUserBooking()
//     }
//   }, [user])

//   // Common issues and fixes:

//   // 1. Add loading state and empty state handling
//   if (!user) {
//     return (
//       <div className='max-padd-container bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28'>
//         <div className='text-center'>Please log in to view your bookings.</div>
//       </div>
//     )
//   }

//   // 2. Handle case when bookings array is empty
//   if (bookings.length === 0) {
//     return (
//       <div className='max-padd-container bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28'>
//         <div className='text-center'>No bookings found.</div>
//       </div>
//     )
//   }

//   return (
//     <div className='max-padd-container bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28'>
//       {bookings?.map((booking) => (
=======
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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
//         <div key={booking._id} className='bg-white ring-1 ring-slate-900/5 p-2 pr-4 mt-3 rounded-lg'>
//           {/* Property List */}
//           <div className='flexStart gap-3 mb-3'>
//             <img
<<<<<<< HEAD
//               src={booking.property?.images && booking.property.images[0] ? booking.property.images[0] : assets.logoImg}
//               alt="property Img"
//               className='h-14 w-26 object-cover rounded-lg'
//               onError={(e) => {
//                 e.target.src = assets.logoImg // Fallback if image fails to load
//               }}
//             />
//             <div>
//               <h5 className='h5 capitalize line-clamp-1'>
//                 {booking.property?.title || 'Property title not available'}
=======
//               src={booking.property.images && booking.property.images[0] ? booking.property.images[0] : assets.logoImg}
//               alt="property Img"
//               className='h-14 w-26 object-cover rounded-lg'
//             />
//             <div>
//               <h5 className='h5 capitalize line-clamp-1'>
//                 {booking.property.title}
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
//               </h5>
//               <div className='flex gap-4' >
//                 <div className='flex items-center gap-x-2'>
//                   <h5 className='medium-14'>Total</h5>
//                   <p className='text-gray-400 text-sm'>
<<<<<<< HEAD
//                     {currency}{booking.totalPrice || 0}
//                   </p>
//                 </div>
//               </div>
//               <p className='flex items-center gap-1'>
//                 <img src={assets.pin} alt="location pin" width={13} />
//                 {booking.property?.address || 'Address not available'}
=======
//                     {currency}{booking.totalPrice}
//                   </p>
//                 </div>
//               </div>
//               <p>
//                 <img src={assets.pin} alt="" width={13} />
//                 {booking.property.address}
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
//               </p>
//             </div>
//           </div>
//           {/* Booking Summary */}
//           <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 border-t border-gray-300 pt-3'>
//             <div className='flex gap-2 gap-x-4 flex-wrap'>
//               <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Booking ID:</h5>
<<<<<<< HEAD
//                 <p className="text-gray-400 text-xs break-all">{booking._id || 'N/A'}</p>
//               </div>
//               <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Check-In:</h5>
//                 <p className='text-gray-400 text-xs'>
//                   {booking.checkInDate ? new Date(booking.checkInDate).toDateString() : 'Date not available'}
//                 </p>
//               </div>
//               <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Check-Out:</h5>
//                 <p className='text-gray-400 text-xs'>
//                   {booking.checkOutDate ? new Date(booking.checkOutDate).toDateString() : 'Date not available'}
//                 </p>
=======
//                 <p className="text-gray-400 text-xs break-all">{booking._id}</p>
//               </div>
//               <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Check-In:</h5>
//                 <p className='text-gray-400 text-xs'>{booking.checkInDate.toDateString()}</p>
//               </div>
//                <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Check-Out:</h5>
//                 <p className='text-gray-400 text-xs'>{booking.checkOutDate.toDateString()}</p>
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
//               </div>
//             </div>
//             <div className='flex gap-2 gap-x-3'>
//               <div className='flex items-center gap-x-2'>
//                 <h5 className='medium-14'>Payment:</h5>
//                 <div className='flex items-center gap-1'>
<<<<<<< HEAD
//                   <span className={`min-w-2.5 h-2.5 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-yellow-500"}`} />
//                   <p>{booking.isPaid ? "Paid" : "Unpaid"}</p>
=======
//                   <span className={`min-w-2.5 h-2.5 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-yellow-500"}`}/>
//                     <p>{booking.isPaid ? "Paid" : "Unpaid"}</p>
                  
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
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


<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/useAppContext";
import { assets } from "../assets/data";
import toast from "react-hot-toast";

const MyBookings = () => {
  const { currency, user, axios, getToken } = useAppContext();
  const [bookings, setBookings] = useState([]);

  const getUserBooking = async () => {
    try {
        const { data } = await axios.get("/api/bookings/user", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
  
      if(data.success){
        setBookings(data.bookings)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

// Stripe Payment
  const handlePayment = async (bookingId) => {
    try {
       const { data } = await axios.post("/api/bookings/stripe", {bookingId}, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if(data.success){
        window.location.href = data.url
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  useEffect(() => {
    if (user) {
      getUserBooking();
    }
  }, [user]);

  return (
    <div className="max-padd-container bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28">
      {bookings?.map((booking) => (
        <div key={booking._id} className="bg-white ring-1 ring-slate-900/5 p-2 pr-4 mt-3 rounded-lg">
          {/* Property List */}
          <div className="flexStart gap-3 mb-3">
            <img
              src={booking.property.images[0]}
              alt="property img"
              className="h-14 w-26 object-cover rounded-lg"
            />
            <div>
              <h5 className="h5 capitalize line-clamp-1">
                {booking.property.title}
              </h5>
              <div className="flex gap-4">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Guests:</h5>
                  <p>{booking.guests}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Total:</h5>
                  <p className="text-gray-400 text-sm">{currency}{booking.totalPrice}</p>
                </div>
              </div>
              <p className="flex place-items-baseline gap-1 mt-0.5">
                <img src={assets.pin} alt="" width={13}/>
                {booking.property.address}
=======









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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
              </p>
            </div>
          </div>
          {/* Booking Summary */}
<<<<<<< HEAD
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 border-t border-gray-300 pt-3">
            <div className="flex gap-2 gap-x-4 flex-wrap">
              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Booking ID:</h5>
                <p className="text-gray-400 text-xs break-all">{booking._id}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Check-In:</h5>
                <p className="text-gray-400 text-xs">{new Date(booking.checkInDate).toDateString()}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Check-Out:</h5>
                <p className="text-gray-400 text-xs">{new Date(booking.checkOutDate).toDateString()}</p>
              </div>
            </div>
            <div className="flex gap-2 gap-x-3">
              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Payment:</h5>
                <div className="flex items-center gap-1">
                  <span className={`min-w-2.5 h-2.5 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-yellow-500"}`}/>
=======
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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
                  <p>{booking.isPaid ? "Paid" : "Unpaid"}</p>
                </div>
              </div>
              {!booking.isPaid && (
<<<<<<< HEAD
                <button onClick={()=> handlePayment(booking._id)} className="btn-secondary !py-1 !text-xs rounded-sm">Pay Now</button>
=======
                <button className='btn-secondary !py-1 !text-xs rounded-sm'>Pay Now</button>
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
<<<<<<< HEAD
  );
};

export default MyBookings;
=======
  )
}

export default MyBookings

>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70





