<<<<<<< HEAD
// import User from "../models/user.js";
// import Agency from "../models/Agency.js";
// // Registration a new agency for the logged-in user [POST /api/agency/register]
// export const agencyReg = async (req, res) => {
//     try{
//         const { name, address, contact, email, city } = req.body;
//         if (![name, address, contact, email, city].every((value) => typeof value === "string" && value.trim())) {
//             return res.status(400).json({ success: false, message: "Complete all agency details" });
//         }
//         const owner = req.user._id;
//         const agencyDetails = {
//             name: name.trim(),
//             address: address.trim(),
//             contact: contact.trim(),
//             email: email.trim(),
//             city: city.trim(),
//             owner,
//         };
        
//         //check if user already has an agency
//         const agency = await Agency.findOne({ owner })
//         if(agency){
//             return res.status(409).json({ success: false, message: "Agency already registered"})
//         }
//         await Agency.create(agencyDetails)
//         await User.findByIdAndUpdate(owner, { role: "agencyOwner" })

//         res.status(201).json({ success: true, message: "Agency registered successfully"})
//     } catch (error) {
//         if (error.code === 11000) {
//             return res.status(409).json({ success: false, message: "Agency already registered" });
//         }
//         res.status(500).json({ success: false, message: error.message})
//     }
    
// }


import User from "../models/user.js";
import Agency from "../models/Agency.js";

// Registration a new agency for the logged-in user [POST /api/agency/register]
export const agencyReg = async (req, res) => {
    try {
        const { name, email, address, contact, city } = req.body;
        const owner = req.user._id;
        // Check if user already has an agency registered
        const agency = await Agency.findOne({ owner });
    if (agency){
        return res.json({ success: false, message: "Agency already registered" });
    }
    await Agency.create({ name, email, address, contact, city, owner });
    await User.findByIdAndUpdate(owner, { role: "agencyOwner" });
    res.json({ success: true, message: "Agency registered successfully" });
    }
    catch (error) {
        res.json({ success: false, message: error.message });
    }
=======
import User from "../models/User.js";
import Agency from "../models/Agency.js";
// Registration a new agency for the logged-in user [POST /api/agency/register]
export const agencyReg = async (req, res) => {
    try{
        const { name, address, contact, email, city } = req.body;
        const owner = req.user.id;
        
        //check if user already has an agency
     const agency = await Agency.findOne({ owner })
     if(agency){
        return res.json({ success: false, message: "Agency already registered"})
     }
     await Agency.create({ name, address, contact, email, owner, city })
     await User.findByIdAndUpdate(owner, {role: "AgencyOwner"})

        res.json({ success: true, message: "Agency registered successfully"})
    } catch (error) {


        res.json({ success: false, message: error.message}) 

    }
    
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
}