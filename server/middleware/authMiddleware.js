import User from "../module/User.js";

// Middleware to authenticate user
export const authUser = async (req, res, next) => {
    const {userId} = req.auth()
    if(!userId){
        res.json({success:false, message:"User not authenticated"})
    } else {
        const user = await User.findById(userId)
        req.user = user
        next()
    }
}

//Add a new city to the user's recent seraches history [post]
