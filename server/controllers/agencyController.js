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
    
}