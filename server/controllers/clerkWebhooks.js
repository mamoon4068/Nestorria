<<<<<<< HEAD
import User from "../models/user.js";
=======
import User from "../models/User.js";
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
import { Webhook } from "svix";


const clerkWebhook =  async (req, res) => {
    try {
<<<<<<< HEAD
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
=======
        // Creating a Svix instance
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        // get headers
        const headers =  {
            "sivx-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        }
        // Verify the webhook
        await whook.verify(JSON.stringify(req.body), headers);

        //GETTING DATA FROM REQUEST BODY
        const { type, data } = req.body;

        //SWITCH CASE FOR DIFFERNT EVENTS
        switch (type) {
            case "user.created":{
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    username: data.first_name + " " + data.last_name,
                    image: data.image_url,
                };
                await User.create(userData);
                break;
            }
             case "user.updated":{
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    username: data.first_name + " " + data.last_name,
                    image: data.image_url,
                };
                await User.findByIdAndUpdate(data.id, userData);
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
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
<<<<<<< HEAD
    console.error("Clerk webhook failed:", error.message)
    res.status(400).json({success:false, message: error.message})
=======
    console.log(error.message)
    res.json({success:false, message: error.message})
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
}
};

export default clerkWebhook;






<<<<<<< HEAD
=======

>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
