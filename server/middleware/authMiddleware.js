<<<<<<< HEAD
import User from "../models/user.js";
import { clerkClient, getAuth } from "@clerk/express";

export const authUser = async (req, res, next) => {
    const { userId } = getAuth(req);
    if (!userId) {
        return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    try {
        let user = await User.findById(userId);
        if (!user) {
            const clerkUser = await clerkClient.users.getUser(userId);
            const email = clerkUser.emailAddresses.find(
                (address) => address.id === clerkUser.primaryEmailAddressId,
            )?.emailAddress || clerkUser.emailAddresses[0]?.emailAddress;
            if (!email) {
                return res.status(400).json({ success: false, message: "Your account needs an email address" });
            }

            user = await User.findByIdAndUpdate(
                userId,
                {
                    _id: userId,
                    username: clerkUser.username || [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || email,
                    email,
                    image: clerkUser.imageUrl,
                },
                { new: true, upsert: true, setDefaultsOnInsert: true },
            );
        }
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
};
=======
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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
