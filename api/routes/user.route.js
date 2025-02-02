import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyToken.js";
import {
  createPost,
  deletePost,
  getPost,
  singlePost,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);
router.post("/post", createPost);
router.get("/post", getPost);
router.get("/post/:id", singlePost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export default router;
