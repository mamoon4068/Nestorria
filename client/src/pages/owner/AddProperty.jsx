import React, { useState } from 'react'
<<<<<<< HEAD
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { assets } from '../../assets/data';
import { useAppContext } from '../../context/useAppContext';
=======
import { assets } from '../../assets/data';
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70


const AddProperty = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  })
  const [inputs, setInputs] = useState({
<<<<<<< HEAD
    title:"",
=======
    title:" ",
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
    description:"",
    city:"",
    country:"",
    address:"",
    area:"",
    propertyType:"",
  priceRent:"",
  priceSale:"",

    bedrooms:"",
    bathrooms:"",
  garages:"",
    amenities:{
      Parking: false,
      Wifi: false,
      Backyard: false,
      Terrace: false
    },
  })

<<<<<<< HEAD
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();
  const { setProperties } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(inputs).forEach(([key, value]) => {
        formData.append(key, key === 'amenities' ? JSON.stringify(value) : value);
      });
      Object.values(images).filter(Boolean).forEach((image) => {
        formData.append('images', image);
      });

      const token = await getToken();
      const { data } = await axios.post('/api/properties', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!data.success) {
        throw new Error(data.message || 'Unable to add property');
      }
      setProperties((currentProperties) => [data.property, ...currentProperties]);
      toast.success(data.message);
      navigate('/owner/list-property');
    } catch (error) {
      console.error('Property creation failed:', error);
      toast.error(error.response?.data?.message || error.message || 'Unable to add property');
    } finally {
      setLoading(false);
    }
  };
=======
  const [_loading, _setLoading] = useState(false);
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70


  return (
    <div className='md:px-8 py-6 xl:py-8 m-1.5 sm:m-3 h-[97vh] overflow-y-scroll
    lg:w-11/12 bg-white shadow rounded-xl'>
<<<<<<< HEAD
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-3.5 px-2 text-sm xl:max-w-3xl'>
=======
      <form className='lex flex-col gap-y-3.5 px-2 text-sm xl:max-w-3xl'>
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
        <div className='w-full'>
          <h5 className='h5'>Property Name</h5>
          <input 
          onChange={(e) => setInputs({ ...inputs, title: e.target.value})}
          value={inputs.title}
          type="text"
          placeholder='Type here...' 
          className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-full'/>
        </div>
        <div className='w-full'>
          <h5 className='h5'>Property Description</h5>
          <textarea
          onChange={(e) => setInputs({ ...inputs, description: e.target.value})}
          value={inputs.description}
          placeholder='Type here...' 
          className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-full'/>
        </div>
        <div className='flex gap-4'>
          <div className='w-full'>
            <h5 className='h5'>City</h5>
            <input 
            onChange={(e) => setInputs({ ...inputs, city: e.target.value})}
            value={inputs.city}
            type="text"
            placeholder='Type here...' 
            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-full'/>
          </div>
          <div className='w-full'>
            <h5 className='h5'>Country</h5>
            <input 
            onChange={(e) => setInputs({ ...inputs, country: e.target.value})}
            value={inputs.country}
            type="text"
            placeholder='Type here...' 
            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-full'/>
          </div>
           <div >
            <h5 className='h5'>Property Type</h5>
            <select
            onChange={(e) => setInputs({ ...inputs, propertyType: e.target.value})}
            value={inputs.propertyType}
            

            className='px-3 py-2 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-full'>
              <option value="">Select Property Type</option>
              <option value="House">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="townhouse">Townhouse</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
            </select>
          </div>
        </div>
        <div className='flex gap-4 flex-wrap w-full' >
          <div className='flex-1'>
            <h5 className='h5'>Address</h5>
            <input 
            onChange={(e) => setInputs({ ...inputs, address: e.target.value})}
            value={inputs.address}
            type="text"
            placeholder='Type here...' 
            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-full'/>
          </div>

           <div className='w-32'>
            <h5 className='h5'>Area</h5>
            <input 
            onChange={(e) => setInputs({ ...inputs, area: e.target.value})}
            value={inputs.area}
            type="number"
            placeholder='Area (sq ft)' 
            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-28'/>
          </div>
        </div>
        <div className='flex gap-4 flex-wrap'>
          {/* mention rental, sale price, bedrooms, bathrooms, grages */}
          <div>
            <h5 className='h5'>Rent Price </h5>
            <input 
            onChange={(e) => setInputs({ ...inputs, priceRent: e.target.value})}
            value={inputs.priceRent}
            type="number"
            placeholder='9999'
            min={0} 
            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-28'/>
          </div>
<<<<<<< HEAD
          <div>
            <h5 className='h5'>Sale Price</h5>
            <input
            onChange={(e) => setInputs({ ...inputs, priceSale: e.target.value})}
            value={inputs.priceSale}
            type="number"
            placeholder='9999'
            min={0}
            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-28'/>
          </div>
=======
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
{/* description Bedrooms */}
             <div>
            <h5 className='h5'>Bedrooms </h5>
            <input 
            onChange={(e) => setInputs({ ...inputs, bedrooms: e.target.value})}
            value={inputs.bedrooms}
            type="number"
            placeholder='1'
            min={1} 
            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-20'/>
          </div>
{/* description Bathrooms */}
            <div>
            <h5 className='h5'>Bathrooms </h5>
            <input 
            onChange={(e) => setInputs({ ...inputs, bathrooms: e.target.value})}
            value={inputs.bathrooms}
            type="number"
            placeholder='1'
            min={1} 
            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-20'/>
          </div>

{/* Description Grages */}
            <div>
            <h5 className='h5'>Garages </h5>
            <input 
            onChange={(e) => setInputs({ ...inputs, garages: e.target.value})}
            value={inputs.garages}
            type="number"
            placeholder='1'
            min={0} 
            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-amber-500/5 mt-1 w-20'/>
          </div>
        </div>
        {/* Amenities */}
        <div>
          <h5 className='h5'>Ammenities</h5>
          <div className='flex gap-3 flex-wrap mt-1'>
            {Object.keys(inputs.amenities).map((amenity, index) => (
              <div key={amenity} className='flex gap-1 items-center'>
                <input
                  id={`amenities${index + 1}`}
                  onChange={() =>
                    setInputs(prev => ({
                      ...prev,
                      amenities: { ...prev.amenities, [amenity]: !prev.amenities[amenity] }
                    }))
                  }
                  checked={inputs.amenities[amenity]}
                  type="checkbox"
                />
                <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Images */}
        <div className="flex gap-2 mt-2">
        {Object.keys(images).map((key) => (
          <label
            key={key}
            htmlFor={`propertyImages${key}`}
            className='ring-1 ring-slate-900/10 overflow-hidden rounded-lg p-2 mr-2'
          >
            <input
             
              onChange={(e) => 
                setImages({...images, [key]: e.target.files[0]})
              }
               type="file"
              accept="image/*"
              id={`propertyImages${key}`}
              hidden
              
            />
            <div className='h-12 w-24 bg-secondary/5 flexCenter'>
              <img src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadIcon} 
              alt="upload Area" 
              className='overflow-hidden object-contain'
               />
            </div>
          
          </label>
        ))}
        </div>
<<<<<<< HEAD
        <button type='submit' disabled={loading} className='btn-secondary text-black font-semibold
        mt-3 p-2 max-w-36 sm:w-full rounded-xl' >
          {loading ? "Adding" : "Add Property"}
=======
        <button type='submit' disabled={_loading} className='btn-secondary text-black font-semibold
        mt-3 p-2 max-w-36 sm:w-full rounded-xl' >
          {_loading ? "Adding" : "Add Property"}
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
        </button>
      </form>
    </div>
  )
}

export default AddProperty