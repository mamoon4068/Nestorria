import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async ()=>{
    try{
<<<<<<< HEAD
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not configured");
        }
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully")
    } catch(error){
        console.error("Database connection failed:", error.message)
        throw error
=======
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("Database connected successfully")
    } catch(error){
        console.log("Database connection failed:", error.message)
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
    }
}

export default connectDB