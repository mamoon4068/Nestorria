import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhook from "./controllers/clerkWebhooks.js"

await connectDB()  // Establish Database Connection

const app = express() // Initialize Express Application
app.use(cors()) // Enables Cross-Origin Resource Sharing

// Apply Clerk middleware for authentication
app.use(express.json())// Enable JSON parsing for incoming requests
app.use(clerkMiddleware()) 


// API to listen clerk webhook
app.use("/api/clerk", clerkWebhooks)

// Route Endpoint to check API Status
app.get("/", (req, res) => {
    res.send("API successfully")
})

const port = process.env.PORT || 4000 // Define server port

// Start the server
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))
