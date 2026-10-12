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
