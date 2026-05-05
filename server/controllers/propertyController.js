import {v2 as cloudinary} from "cloudinary";
import Agency from "../models/Agency.js";
import Property from "../models/Property.js";

// Create a new property under an agency [POST /api/properties]
export const createProperty = async (req, res) => {
    try {
        const { agencyId, title, description, city, address, area, propertyType, priceRent, priceSale, bedrooms, bathrooms, garages, amenities } = req.body;

        const agency = await Agency.findOne({owner: req.auth.userId})
        if(!agency){
            return res.json({ success: false, message: "Agency not found" });
        }

        // Upload images to Cloudinary
        const imageUploadPromises =   req.files.map(async(file) => {
            const respose = await cloudinary.uploader.upload(file.path)
            return respose.secure_url
        })

        // Wait for uploads to complete
        const image = await Promise.all(imageUploadPromises);
        
        await Property.create({
            agency: agency._id,
            title,
            description,
            city,
            country,
            address,
            area,
            propertyType,
            price: {
                rent: priceRent ?  +priceRent : null,
                sale: priceSale ? +priceSale : null,
            },
            facilities: {
    bedrooms: +bedrooms,
    bathrooms: +bathrooms,
    garages: +garages,
    },
     amenities: JSON.parse(amenities),
     images,
        });

        res.json({ success: true, message: "Property Created" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
};

// get all available properties [GET /api/properties]
export const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find({ isAvailable: true }).populate({
            path: "agency",
            populate: { 
                path: "owner",
                select: "image email",
            },
        });
        res.json({ success: true, properties });
} catch (error){
res.json({ success: false, message: error.message })
}
};
// get properties of logged in agency/owner [GET /properties/owner]

export const getOwnerProperties = async (req, res) => {
    try {
        const agencyData = await Agency.findOne({ owner: req.auth.userId });
        const properties = await Property.find({ agency: agencyData._id.toString(),

         }).populate("agency");

        res.json({ success: true, properties });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }

};