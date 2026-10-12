import express from "express";
import multer from "multer";
import { authUser } from "../middleware/authMiddleware.js";
import {
    createProperty,
    getAllProperties,
    getOwnerProperties,
} from "../controllers/propertyController.js";

const propertyRouter = express.Router();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { files: 5, fileSize: 5 * 1024 * 1024 },
});

propertyRouter.get("/", getAllProperties);
propertyRouter.get("/owner", authUser, getOwnerProperties);
propertyRouter.post("/", authUser, upload.array("images", 5), createProperty);

export default propertyRouter;