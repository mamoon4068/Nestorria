import React from 'react'
import { assets } from '../assets/data'


const cities = [
  'New York',
  'London',
  'Paris',
  'Tokyo',
  'Sydney',
  'Dubai',
  'Rome',
  'Istanbul',
  'Bangkok',
  'Barcelona',
];

const Hero = () => {
  return (
    <section className="h-screen w-screen bg-[url(C:\Users\lenovo\OneDrive\Desktop\nestorria\client\src\assets\bg.png)] bg-cover bg-center bg-no-repeat">
      <div className='max-padd-container h-screen w-screen'>
        {/* overlay  */}
        <div className='absolute inset-0 bg-black/10 z-0'/>
        {/* container */}
        <div className='relative flex justify-end mx-auto 
        flex-col gap-4 h-full py-6 sm:pt-18 z-18'>
          {/* content */}
          <div className='flex flex-col mt-12 text-white'>
            <button className='max-w-80 flex items-center
            space-x-3 border border-white medium-13
            rounded-full px-4 pr-0.5 py-1 cursor-pointer'>
              <span>Explore how we simplify stays and spaces</span>
              <span className='flexCenter size-6 p-1
              rounded-full bg-white'>
                <img src={assets.right} alt="rightIcon" width={20} />
              </span>
            </button>
            <h2 className='h2 capitalize leading-tight mt-3 my-2 text-white'> Explore <span className='bg-gradient-to-r
             bg-amber-500 to-white bg-clip-text
            text-transparent'> exceptional properties</span> 
            located in stunning surroundings. </h2>
          </div>
          {/*search booking form */}

          <form className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 lg:max-w-full ring-1 ring-slate-900/5 relative'>
            {/* Destination */}
            <div className='flex flex-col flex-1'>
              <div className='flex items-center gap-2'>
                <img src={assets.pin} alt="pinIcon" width={20} />
                <label htmlFor="destinationInput">Destination</label>
              </div>
              <input
                list='destinations'
                id='destinationInput'
                type="text"
                className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none'
                placeholder='Type here...'
                required
              />
              <datalist id='destinations'>
                {cities.map((city, index) => (
                  <option value={city} key={index} />
                ))}
              </datalist>
            </div>
            {/* Check in */}
            <div className='flex flex-col flex-1'>
              <div className='flex items-center gap-2'>
                <img src={assets.calendar} alt="calenderIcon" width={20} />
                <label htmlFor="checkIn">Check in</label>
              </div>
              <input type="date" id='checkIn' className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' />
            </div>
            {/* Check out */}
            <div className='flex flex-col flex-1'>
              <div className='flex items-center gap-2'>
                <img src={assets.calendar} alt="calenderIcon" width={20} />
                <label htmlFor="checkOut">Check out</label>
              </div>
              <input type="date" id='checkOut' className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' />
            </div>
            {/* Guests */}
            <div className='flex flex-col flex-1 text-black'>
              <div className='flex items-center gap-2 text-amber-50'>
                <img src={assets.user} alt="userIcon" width={20} />
                <label htmlFor="guests">Guests</label>
              </div>
              <input id='guests' type='number' min={1} max={5} className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' placeholder='0' />
            </div>
            {/* Search Button */}
            <button type='submit' className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-6 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
              <img src={assets.search} alt="searchIcon" width={20} className='invert' />
              <span>Search</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Hero




// import React from 'react'

// const Hero = () => {
//   return (
//     <section className="h-screen w-screen bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">

//     </section>
//   )
// }

// export default Hero