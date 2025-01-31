import express from "express";
import { deleteUser, signin, signup } from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
