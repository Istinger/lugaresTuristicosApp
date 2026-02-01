import express from "express";
import { registerUser, loginUser, loginAdmin } from "../controllers/userController.js";

const authRouter = express.Router();

//RESTful API endpoints for authentication
// Registrar nuevo usuario
authRouter.post('/register', registerUser);

// Login de usuario
authRouter.post('/login', loginUser);

// Login de administrador
authRouter.post('/admin', loginAdmin);

export default authRouter;
