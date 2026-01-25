import express from "express";
import { registerUser, loginUser, loginAdmin } from "../controllers/userController.js";

const userRouter = express.Router();

//endpoints for user actions
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', loginAdmin);

export default userRouter;