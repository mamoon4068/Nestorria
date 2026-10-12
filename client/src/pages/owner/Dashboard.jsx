import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/useAppContext'
import { assets, dummyDashboardData } from '../../assets/data'

const Dashboard = () => {
  const { user } = useAppContext()
  const currency = "₹";
  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  })

  const getDashboardData = async () => {
    // Use dummy data for now; ensure dates are Date objects
    const normalized = (dummyDashboardData?.bookings || []).map(b => ({
      ...b,
      checkInDate: b.checkInDate ? new Date(b.checkInDate) : null,
      checkOutDate: b.checkOutDate ? new Date(b.checkOutDate) : null,
    }))
    setDashboardData({
      bookings: normalized,
      totalBookings: normalized.length,
      totalRevenue: normalized.reduce((s, b) => s + (b.totalPrice || 0), 0),
    })
  };

  useEffect(() => {
    getDashboardData();
  }, [user]);

  return (
    <div className='md:px-8 py-6 xl:py-8 ml-1 sm:m-3 h-[97vh] overflow-y-auto lg:w-11/12 bg-white shadow rounded-xl'>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className='flexStart gap-7 p-5 bg-[#fff4d2] lg:min-w-56 rounded-xl'>
          <img src={assets.house} alt="" className='hidden sm:flex w-8' />
          <div>
            <h4 className='h4'>{dashboardData.totalBookings.toString().padStart(2, "0")}</h4>
            <h5 className='h5 text-amber-500'>Total Sales</h5>
          </div>
        </div>
        <div className="flexStart gap-7 p-5 bg-[#fff4d2] lg:min-w-56 rounded-xl">
          <img src={assets.dollar} alt="" className='hidden sm:flex w-8' />
          <div>
            <h4 className='h4'>{currency}{dashboardData.totalRevenue}</h4>
            <h5 className='h5 text-amber-500'>Total Earning</h5>
          </div>
        </div>
      </div>

      {/* Table header */}
      <div className='hidden lg:grid grid-cols-[0.5fr_2fr_2fr_1fr_1fr] items-center gap-4 px-6 py-3 bg-amber-500 rounded-t-xl text-black'>
        <div className="h5">#</div>
        <div className="h5">Property</div>
        <div className="h5">Booking dates</div>
        <div className="h5">Amount</div>
        <div className="h5">Status</div>
      </div>

      {/* Rows */}
      <div>
        {dashboardData.bookings.length === 0 ? (
          <div className="p-6 text-center text-gray-600">No bookings found.</div>
        ) : (
          dashboardData.bookings.map((booking, index) => {
            const prop = booking.property || {}
            const checkIn = booking.checkInDate ? booking.checkInDate.toLocaleDateString() : '-'
            const checkOut = booking.checkOutDate ? booking.checkOutDate.toLocaleDateString() : '-'
            return (
              <div
                key={booking._id ?? index}
                className="grid grid-cols-1 lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] gap-4 items-center px-4 py-3 border-b last:border-b-0 bg-white/60"
              >
                {/* Index (visible on lg) */}
                <div className="hidden lg:block text-sm text-gray-700">{index + 1}</div>

                {/* Property */}
                <div className="flex items-center gap-3">
                  <img
                    src={(prop.images && prop.images[0]) || assets.logoImg}
                    alt={prop.title || 'Property'}
                    className="w-16 h-12 object-cover rounded-md"
                  />
                  <div>
                    <div className="font-semibold line-clamp-1">{prop.title || 'Untitled'}</div>
                    <div className="text-xs text-gray-500 line-clamp-1">{prop.address || prop.city || ''}</div>
                  </div>
                </div>

                {/* Booking dates */}
                <div className="text-sm text-gray-700">
                  <div>{checkIn} — {checkOut}</div>
                </div>

                {/* Amount */}
                <div className="text-sm text-gray-800 font-medium">
                  {currency}{booking.totalPrice ?? '0'}
                </div>

                {/* Status */}
                <div>
                  <button
                    className={`${booking.isPaid ? "bg-green-400/80 text-white" : "bg-amber-500/10 text-red-500"} inline-block px-3 py-1 rounded-full text-xs border border-green-500/30`}
                  >
                    {booking.isPaid ? "Completed" : "Pending"}
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Dashboard
 



