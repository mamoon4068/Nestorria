<<<<<<< HEAD
import { v2 as cloudinary } from "cloudinary";
import Agency from "../models/Agency.js";
import Property from "../models/Property.js";

const uploadImage = (file) =>
    new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: "image" },
            (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.secure_url);
            },
        );
        uploadStream.end(file.buffer);
    });

const parseAmenities = (value) => {
    const amenities = typeof value === "string" ? JSON.parse(value) : value;
    if (Array.isArray(amenities)) return amenities.filter((item) => typeof item === "string");
    if (amenities && typeof amenities === "object") {
        return Object.entries(amenities)
            .filter(([, enabled]) => enabled)
            .map(([name]) => name);
    }
    return [];
};

export const createProperty = async (req, res) => {
    try {
        const agency = await Agency.findOne({ owner: req.user._id });
        if (!agency) {
            return res.status(403).json({ success: false, message: "Register an agency before listing a property" });
        }

        const {
=======
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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
            title,
            description,
            city,
            country,
            address,
            area,
            propertyType,
<<<<<<< HEAD
            priceRent,
            priceSale,
            bedrooms,
            bathrooms,
            garages,
            amenities,
        } = req.body;
        const requiredText = [title, description, city, country, address, propertyType];
        if (requiredText.some((value) => typeof value !== "string" || !value.trim())) {
            return res.status(400).json({ success: false, message: "Complete all required property details" });
        }

        const numericValues = [area, bedrooms, bathrooms, garages].map(Number);
        if (numericValues.some((value) => !Number.isFinite(value) || value < 0)) {
            return res.status(400).json({ success: false, message: "Enter valid area and facility values" });
        }
        const rent = priceRent ? Number(priceRent) : null;
        const sale = priceSale ? Number(priceSale) : null;
        if ([rent, sale].some((value) => value !== null && (!Number.isFinite(value) || value < 0))) {
            return res.status(400).json({ success: false, message: "Enter valid rent and sale prices" });
        }

        const images = await Promise.all((req.files || []).map(uploadImage));
        const property = await Property.create({
            agency: agency._id.toString(),
            title: title.trim(),
            description: description.trim(),
            city: city.trim(),
            country: country.trim(),
            address: address.trim(),
            area: numericValues[0],
            propertyType,
            price: {
                rent,
                sale,
            },
            facilities: {
                bedrooms: numericValues[1],
                bathrooms: numericValues[2],
                garages: numericValues[3],
            },
            amenities: parseAmenities(amenities),
            images,
        });

        res.status(201).json({ success: true, property, message: "Property created" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getAllProperties = async (_req, res) => {
    try {
        const properties = await Property.find({ isAvailable: true }).populate({
            path: "agency",
            populate: {
=======
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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
                path: "owner",
                select: "image email",
            },
        });
        res.json({ success: true, properties });
<<<<<<< HEAD
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getOwnerProperties = async (req, res) => {
    try {
        const agency = await Agency.findOne({ owner: req.user._id });
        if (!agency) {
            return res.json({ success: true, properties: [] });
        }

        const properties = await Property.find({ agency: agency._id.toString() }).populate("agency");
        res.json({ success: true, properties });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
=======
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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
