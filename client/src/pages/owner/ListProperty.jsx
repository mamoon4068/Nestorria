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
          <h5 className="h5">Name</h5>
          <h5 className="h5">Address</h5>
          <h5 className="h5">Price</h5>
          <h5 className="h5">Available</h5>
        </div>

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