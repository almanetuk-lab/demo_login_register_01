import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";

const router = express.Router();

router.post("/demo_api_register",registerUser);
router.post("/demo_api_login",loginUser);

export default router;