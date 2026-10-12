import User from "../models/user.js";
import { Webhook } from "svix";


const clerkWebhook =  async (req, res) => {
    try {
        if (!process.env.CLERK_WEBHOOK_SECRET) {
            return res.status(500).json({ success: false, message: "Webhook secret is not configured" });
        }

        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const headers =  {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        }
        const payload = req.body.toString("utf8");
        webhook.verify(payload, headers);
        const { type, data } = JSON.parse(payload);

        switch (type) {
            case "user.created":{
                const email = data.email_addresses?.[0]?.email_address;
                if (!email) {
                    return res.status(400).json({ success: false, message: "User email is missing" });
                }
                const userData = {
                    _id: data.id,
                    email,
                    username: [data.first_name, data.last_name].filter(Boolean).join(" ") || email,
                    image: data.image_url,
                };
                await User.findByIdAndUpdate(data.id, userData, { upsert: true, new: true, setDefaultsOnInsert: true });
                break;
            }
             case "user.updated":{
                const email = data.email_addresses?.[0]?.email_address;
                if (!email) {
                    return res.status(400).json({ success: false, message: "User email is missing" });
                }
                const userData = {
                    _id: data.id,
                    email,
                    username: [data.first_name, data.last_name].filter(Boolean).join(" ") || email,
                    image: data.image_url,
                };
                await User.findByIdAndUpdate(data.id, userData, { upsert: true, new: true, setDefaultsOnInsert: true });
                break;
            }
             case "user.deleted":{
              await User.findByIdAndDelete(data.id);
              break;
             }
                default:
                    break;
    }
    res.json({ success:true, message: "Webhook received"})


} catch (error){
    console.error("Clerk webhook failed:", error.message)
    res.status(400).json({success:false, message: error.message})
}
};

export default clerkWebhook;






