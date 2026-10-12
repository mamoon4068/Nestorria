import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
<<<<<<< HEAD
    agency: { type: String, ref: "Agency", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true},
    city: { type: String, required: true },
    country: { type: String, required: true },
=======
    agency: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true},
    city: { type: String, required: true },
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
    address: { type: String, required: true },
    area: { type: Number, required: true },
    propertyType: { type: String, required: true },
    price: {
        rent: {type: Number},
        sale: {type: Number}
    },
    facilities: {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    garages: { type: Number, required: true },
    },
<<<<<<< HEAD
    amenities: { type: [String], default: [] },
    images: { type: [String], default: [] },
=======
    amenities: { type: [Array], required: true },
    images: { type: [String]},
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
    isAvailable: { type: Boolean, default: true },
},
{ timestamps: true }
    
);

const Property = mongoose.model("Property", propertySchema);
export default Property;