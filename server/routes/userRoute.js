import express from "express";
import { authUser} from "../middleware/authMiddleware.js";
<<<<<<< HEAD
import { addRecentSearchedCity, getUserProfile} from "../controllers/userController.js";

const userRouter = express.Router()
userRouter.get('/', authUser, getUserProfile);
userRouter.post('/store-recent-search', authUser, addRecentSearchedCity)
=======
import { getUserProfile} from "../controllers/userController.js";

const userRouter = express.Router()
userRouter.get('/', authUser, getUserProfile);
userRouter.get('/store-recent-search', authUser, addRecentSearchCity)
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70

export default userRouter;