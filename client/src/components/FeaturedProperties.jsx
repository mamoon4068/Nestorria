
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
 import { useAppContext } from '../context/useAppContext';
import Item from './Item';
<<<<<<< HEAD
import { dummyProperties } from '../assets/data';
=======
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70


const FeaturedProperties = () => {

  const {properties} = useAppContext()
<<<<<<< HEAD
  const featuredProperties = properties.length ? properties : dummyProperties
=======
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
  return (
    <section className='max-padd-container py-16 xl:py-22'>
  <span className='medium-18'>Your New Home Awaits!</span>
        <h2 className='h2'>Discover Your Place Here</h2>
        <div className='flexBetween mt-8 mb-6'>
          <h5>
            <span className='font-bold'>Displaying 1-9</span> from 3k listings</h5>
          <Link to={'/listing'} onClick={()=>scrollTo(0,0)} 
          className='bg-amber-500 ring-1 ring-slate-900/15
          text-white text-2xl rounded-md p-2 flexCenter' >
          <img src={assets.sliders} alt="" />
          </Link>
        </div>
        {/* container */}
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1124: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30
            },
          }}
          modules={[Autoplay]}
          className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
        >
<<<<<<< HEAD
          {featuredProperties.slice(0, 6).map((property)=>(
=======
          {properties.slice(0, 6).map((property)=>(
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
<SwiperSlide key={property.title}>
  <Item property={property} />
</SwiperSlide>
          ))}
        </Swiper>
    </section>
  )
}

export default FeaturedProperties