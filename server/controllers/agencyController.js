import User from "../models/user.js";
import Agency from "../models/Agency.js";

// Registration a new agency for the logged-in user [POST /api/agency/register]
export const agencyReg = async (req, res) => {
    try {
        const { name, address, contact, email, city } = req.body;
        const owner = req.user?._id || req.user?.id;

        if (!owner) {
            return res.status(401).json({ success: false, message: "User not authenticated" });
        }

        const agency = await Agency.findOne({ owner });
        if (agency) {
            return res.status(400).json({ success: false, message: "Agency already registered" });
        }

        await Agency.create({ name, address, contact, email, city, owner });
        await User.findByIdAndUpdate(owner, { role: "agencyOwner" });

        return res.status(201).json({ success: true, message: "Agency registered successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message || "Something went wrong" });
    }
};
