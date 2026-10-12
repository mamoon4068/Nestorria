import { Link } from 'react-router-dom'
import { assets } from '../assets/data'
import { useAppContext } from '../context/useAppContext'


const Item = ({ property }) => {
  const { currency } = useAppContext()
  const image = property.images?.[0] || assets.img1
  const price = property.price?.sale || property.price?.rent
  const facilities = property.facilities || {}

  return (
    <Link to={`/listing/${property._id}`}
      className='block rounded-lg bg-white ring-1 ring-slate-900/5'>
      {/* Image */}
      <div className='relative'>
        <img
          src={image}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = assets.img1
          }}
          alt={property.title || 'Property'}
          className='h-[13rem] w-full aspect-square object-cover rounded-t-xl' />
      </div>
      {/* Info */}
      <div className='p-3'>
        <div className='flexBetween'>
          <h5 className='bold-16 my-1'>{property.propertyType}</h5>
          <div className='bold-15 text-amber-500'>
            {price ? `${currency}${price}` : 'Contact for price'}
            {property.price?.rent ? <span className='text-xs'>/night</span> : null}
          </div>
        </div>
        <h1 className='h4 line-clamp-1'>{property.title}</h1>
        <div className='flex gap-4 py-2'>
            <p className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 front-[500]'>
                <img src={assets.bed} alt="facilitiesIcon"
                width={21} />
                {facilities.bedrooms ?? 0}
            </p>
              <p className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 front-[500]'>
                <img src={assets.bath} alt="facilitiesIcon"
                width={21} />
                {facilities.bathrooms ?? 0}
            </p>
              <p className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 front-[500]'>
                <img src={assets.car} alt="facilitiesIcon"
                width={21} />
                {facilities.garages ?? 0}
            </p>
              <p className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 front-[500]'>
                <img src={assets.ruler} alt="facilitiesIcon"
                width={21} />
                {property.area ?? 0}
            </p>
        </div>
        <p className='pt-2 mb-4 line-clamp-2'>{property.description || ''}</p>
      </div>
    </Link>
  )
}

export default Item