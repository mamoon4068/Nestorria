import User from "../models/User.js";
import { Webhook } from "svix";


const clerkWebhook =  async (req, res) => {
    try {
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
    console.log(error.message)
    res.json({success:false, message: error.message})
}
};

export default clerkWebhook;







https://dashboard.clerk.com/apps/app_33ZC8SgZB5w9dMfFsooAQIp4OAy/instances/ins_33ZC8Qg0SfakarUH5qy4D7okNnU/webhooks