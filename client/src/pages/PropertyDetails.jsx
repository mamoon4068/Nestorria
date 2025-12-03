import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/useAppContext";
import { useParams } from "react-router-dom";
import PropertyImages from "../components/PropertyImages";
import { assets } from "../assets/data";

const PropertyDetails = () => {
  const { currency } = useAppContext();
  const { properties } = useAppContext();
  const [property, setProperty] = useState(null);
  const { id } = useParams();
  // Add cities array for datalist
  const cities = [
    "London",
    "Manchester",
    "Birmingham",
    "Liverpool",
    "Leeds",
    "Bristol",
    "Glasgow",
    "Edinburgh",
    "Cardiff",
    "Belfast",
  ];

  useEffect(() => {
    const property = properties.find((property) => property._id === id);
    property && setProperty(property);
  }, [properties, id]);
  return (
    property && (
      <div className="bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28">
        <div className="max-padd-container">
          {/* Image */}
          <PropertyImages property={property} />
          {/* Container */}
          <div className="flex flex-col xl:flex-row gap-8 mt-6">
            {/* Left side */}
            <div className="p-4 flex-2 rounded-xl border border-slate-900/10">
              <p className="flexStar gap-x-2">
                <img src={assets.pin} alt="" width={19} />
                <span>{property.address}</span>
              </p>
              <div className="flex justify-between flex-col sm:flex-row sm:items-end mt-3">
                <h3 className="h3">{property.title}</h3>
                <div className="bold-18">
                  {currency}{property.price.sale} | {currency}{property.price.rent}.00/night
                </div>
              </div>
              <div className="flex justify-between items-start my-1">
                <h4 className="h4 text-secondary">{property.propertyType}</h4>
                <div
                  className="flex items-baseline gap-2
                            text-amber-500 relative top-1.9"
                >
                  <h4 className="bold-18 relative bottom-0.5 text-black">
                    5.0
                  </h4>

                  <img src={assets.star} alt="star icon" width={18} />
                  <img src={assets.star} alt="star icon" width={18} />
                  <img src={assets.star} alt="star icon" width={18} />
                  <img src={assets.star} alt="star icon" width={18} />
                  <img src={assets.star} alt="star icon" width={18} />
                  <img src={assets.star} alt="star icon" width={18} />
                </div>
              </div>
              <div className="flex gap-x-4 mt-3">
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.bed} alt="" width={19} />
                  {property.facilities.bedrooms}
                </p>

                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.bath} alt="" width={19} />
                  {property.facilities.bathrooms}
                </p>

                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.car} alt="" width={19} />
                  {property.facilities.garages}
                </p>

                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.ruler} alt="" width={19} />
                  400
                </p>
              </div>
              <div className="mt-6">
                <h4 className="h4 mt-4 mb-1">Property Details</h4>
                <p className="mb-4">{property.description}</p>
              </div>
              <h4 className="h4 mt-6 mb-2">Amenities</h4>
              <div className="flex gap-3">
                {(property.amenities || []).map((amenity, index) => (
                  <div key={index} className="">
                    {amenity}
                  </div>
                ))}
              </div>
              {/* From | Check Availability  */}
              <form className=" text-gray-500 bg-amber-500/10 rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 max-w-md lg:max-w-full ring-1 ring-slate-900/5 relative">
                {/* Destination */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <img src={assets.pin} alt="pinIcon" width={20} />
                    <label htmlFor="destinationInput">Destination</label>
                  </div>
                  <input
                    list="destinations"
                    id="destinationInput"
                    type="text"
                    className="rounded  bg-amber-500/10 border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    placeholder="Type here..."
                    required
                  />
                  <datalist id="destinations">
                    {cities.map((city, index) => (
                      <option value={city} key={index} />
                    ))}
                  </datalist>
                </div>
                {/* Check in */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <img src={assets.calendar} alt="calenderIcon" width={20} />
                    <label htmlFor="checkIn">Check in</label>
                  </div>
                  <input
                    type="date"
                    id="checkIn"
                    className="rounded  bg-amber-500/10 border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  />
                </div>
                {/* Check out */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <img src={assets.calendar} alt="calenderIcon" width={20} />
                    <label htmlFor="checkOutDate">Check out</label>
                  </div>
                  <input
                    type="date"
                    id="checkOut"
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  />
                </div>
                {/* Guests */}
                <div className="flex flex-col flex-1 text-black">
                  <div className="flex items-center gap-2 text-amber-50">
                    <img src={assets.user} alt="userIcon" width={20} />
                    <label htmlFor="guests">Guests</label>
                  </div>
                  <input
                    id="guests"
                    type="number"
                    min={1}
                    max={5}
                    className="rounded bg-amber-500/10 border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    placeholder="0"
                  />
                </div>
                {/* Search Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-1 rounded-md btn-dark min-w-44"
                >
                  <img
                    src={assets.search}
                    alt="searchIcon"
                    width={16}
                    className="invert"
                  />
                  <span>Check Dates</span>
                </button>
              </form>
            </div>
            {/* Right Side */}
            <div className="flex-1 max-w-sm">
              <div className="p-6 rounded-xl border border-slate-900/10">
                <h4 className="h4 mb-3">Contact Agent</h4>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="p-2 py-1 border-gray-300 rounded-md text-sm "
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 py-1 border-gray-300 rounded-md text-sm "
                    required
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="p-2 py-1 border-gray-300 rounded-md text-sm "
                    required
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 text-white rounded-lg py-1.5"
                  >
                    Send Message
                  </button>
                </form>
                <h4 className="h4 mb-3 mt-8"> For Buying Contact </h4>
                  <div className="text-sm w-80 divide-y divide-gray-500/30 border border-gray-500/30 rounded">
                    <div className="flex items-start justify-between p-3">
                      <div>
                      <div className="flex items-center space-x-2">
                      <h5 className="h5">{property.agency.name}</h5>
                      <p className="bg-green-500/20 px-2 py-0.5 rounded-full text-xs text-green-600 border
                      border-green-500/30">Agency</p>
                      </div>
                      <p>Agency office</p>
                      </div>
                      <img src={property.agency.owner.image} alt="" className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="flexStar gap-2 p-1.5">
                    <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30">
                    <img src={assets.phone} alt="" width={14} />
                    </div>
                    <p>{property.agency.contact}</p>
                    </div>
                    <div className="flexStar gap-2 p-1.5">
                      <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30">
                    <img src={assets.phone} alt="" width={14} />
                    </div>
                    <p>{property.agency.email}</p>
                    </div>
                    <div className="flex items-center divide-x divide-gray-500/30">
                    <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer">
                    <img src={assets.mail} alt="" />Send Email
                    </button>
                    <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer">
                    <img src={assets.phone} alt="" />Call Now
                    </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PropertyDetails;
