
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { pathToFileURL } from "node:url";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import agencyRouter from "./routes/agencyRoute.js";
import propertyRouter from "./routes/propertyRout.js";
import clerkWebhook from "./controllers/clerkWebhooks.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(",") : true,
  credentials: true,
}));

app.post("/api/clerk", express.raw({ type: "application/json" }), clerkWebhook);
app.use(express.json());
app.use(clerkMiddleware());

app.get("/api/health", (_req, res) => {
  res.json({ success: true });
});

app.use("/api/user", userRouter);
app.use("/api/agency", agencyRouter);
app.use("/api/properties", propertyRouter);

app.use((error, _req, res, _next) => {
  console.error("API request failed:", error.message);
  res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal server error",
  });
});

const PORT = process.env.PORT || 4000;

export default app;

const startServer = async () => {
  await connectDB();
  await connectCloudinary();
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startServer().catch((error) => {
    console.error("Server startup failed:", error.message);
    process.exitCode = 1;
  });
}