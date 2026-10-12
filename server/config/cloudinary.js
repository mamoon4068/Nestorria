import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
cloudinary.config({
<<<<<<< HEAD
    cloud_name: process.env.CLDN_NAME,
    api_key: process.env.CLDN_API_KEY,
    api_secret: process.env.CLDN_API_SECRET,
=======
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
});

}

export default connectCloudinary;
<<<<<<< HEAD
=======

>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
