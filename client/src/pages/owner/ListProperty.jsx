<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { useAuth } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { assets } from '../../assets/data';

const ListProperty = () => {
  const { user, axios, getToken } = useAppContext();
  const { isLoaded, userId } = useAuth();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const currency = import.meta.env.VITE_CURRENCY || '₹';

  useEffect(() => {
    let cancelled = false;

    const loadProperties = async () => {
      if (!isLoaded) return;
      if (!userId) {
        setProperties([]);
        setLoading(false);
        return;
      }

      try {
        const token = await getToken();
        const { data } = await axios.get('/api/properties/owner', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!data.success) {
          throw new Error(data.message || 'Unable to load your properties');
        }
        if (!Array.isArray(data.properties)) {
          throw new Error('The server returned an invalid property list');
        }
        if (!cancelled) setProperties(data.properties);
      } catch (error) {
        console.error('Failed to load owner properties:', error);
        if (!cancelled) {
          toast.error(error.response?.data?.message || error.message || 'Unable to load your properties');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadProperties();
    return () => {
      cancelled = true;
    };
  }, [axios, getToken, isLoaded, userId, user]);

  return (
    <div className="m-1 min-h-[70vh] overflow-y-auto rounded-xl bg-white py-6 shadow sm:m-3 xl:py-8 lg:w-11/12">
      <div className="px-4 md:px-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="h3">Your Properties</h2>
          <Link to="/owner/add-property" className="btn-secondary rounded-lg px-4 py-2">
            Add Property
          </Link>
        </div>

        <div className="grid grid-cols-[2fr_2fr_1fr_1fr] items-center gap-2 rounded-t-xl border-b border-slate-900/15 bg-amber-500 px-4 py-3 lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr]">
          <h5 className="h5 hidden lg:block">#</h5>
=======
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { dummyProperties } from '../../assets/data';

const ListProperty = () => {
  const {user} = useAppContext();
  const[properties, setProperties] = useState([]);
  const currency = '₹';

  // Get Properties of the Agency Owner
  const getProperties = () => {
    setProperties(dummyProperties);
  }

  useEffect(()=>{
    if(user){
      getProperties();
    }
  }, [user])
  return (
    <div  className="md:px-8 py-6 xl:py-8 m-1 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12
    bg-white shadow rounded-xl " >
      {/* Latest Booking/ Sale */}
      <div>
          <div className='flex justify-between flex-wrap gap-2 sm:grid grid-cols-[2fr_2fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] px-6 py-3
        bg-amber-500 border-b-1 border-slate-900/15 rounded-t-xl'>
          <h5 className="h5 hidden lg:block">Index</h5>
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
          <h5 className="h5">Name</h5>
          <h5 className="h5">Address</h5>
          <h5 className="h5">Price</h5>
          <h5 className="h5">Available</h5>
        </div>
<<<<<<< HEAD

        {loading ? (
          <p className="p-8 text-center text-gray-600">Loading your properties...</p>
        ) : properties.length === 0 ? (
          <div className="p-8 text-center text-gray-600">
            <p>You have not listed any properties yet.</p>
            <Link to="/owner/add-property" className="mt-3 inline-block font-semibold text-amber-700">
              Add your first property
            </Link>
          </div>
        ) : (
          properties.map((property, index) => (
            <div
              key={property._id}
              className="grid grid-cols-[2fr_2fr_1fr_1fr] items-center gap-2 border-b border-slate-900/15 bg-amber-500/5 px-4 py-3 text-sm font-semibold lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr]"
            >
              <div className="hidden lg:block">{index + 1}</div>
              <div className="flex min-w-0 items-center gap-2">
                <img
                  src={property.images?.[0] || assets.img1}
                  alt={property.title || 'Property'}
                  className="h-12 w-16 shrink-0 rounded-lg object-cover"
                />
                <span className="line-clamp-2">{property.title}</span>
              </div>
              <div className="line-clamp-2">{property.address}</div>
              <div>{currency}{property.price?.sale || property.price?.rent || 0}</div>
              <div>
                <span className={`rounded-full px-2 py-1 text-xs ${property.isAvailable ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                  {property.isAvailable ? 'Available' : 'Unavailable'}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListProperty;
=======
        <div>
          {properties.map((property, index)=>(
            <div key={index} className='flex justify-between items-center flex-wrap
            gap-2 sm:grid grid-cols-[2fr_2fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] px-6
            py-3 bg-amber-500/5 text:gray-50 medium-14 font-semibold border-b-1 border-slate-900/15' >
              <div className='hidden lg:block'>{index + 1}</div>
              <div className='flexStart gap-x-2 max-w-64'>
                <div className='overflow-hidden rounded-lg'>
                  <img src={property.images?.[0]} alt={property.title}
                  className='w-16 rounded-lg '
                  />
                </div>
                <div className='line-clamp-2'>{property.title}</div>
              </div>
              <div className='line-clamp-2'>{property.address}</div>
              <div>{currency}{property.price.sale}</div>
              <div>
                <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
                  <input type="checkbox" className='sr-only peer' defaultChecked={property.available} />
                  <div className='w-10 h-6 bg-slate-300 rounded-full peer 
                  peer-checked:bg-amber-500 transition-colors duration-200' />
                  <span className='absolute left-1 top-1 w-4 h-4 bg-white rounded-full translation-transform duration-200 ease-in-out
                  peer-checked:translate-x-4' />
                </label>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ListProperty
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
