import express from "express";
import User from "../models/userModel.js";
import Post from "../models/Post.js";
import { authenticateJwt } from "../middleware/auth.js";
import "dotenv/config";
const router = express.Router();
import jwt from "jsonwebtoken";

router.post("/Signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      res.status(403).json({ message: "User Exist" });
    } else {
      const newUser = new User({ username, email, password });
      await newUser.save();
      const token = jwt.sign({ username, role: "user" }, process.env.SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "User Created SuccessFully", token });
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});
router.post("/Login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: "user" }, process.env.SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

router.post("/PostBlog", authenticateJwt, async (req, res) => {
  try {
    const { title, mainContent, photos } = req.body;
    const {username}= req.user;
    const post = new Post({
      title,
      mainContent,
      photos,
      creator: {
        username,
        
      },
    });
    await post.save();
    res.json({ message: "Post created successfully", PostId: post.id });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

router.get("/PostBlog",authenticateJwt,async(req,res)=>{
  const post= await Post.find({});
  res.json({post});
})
export default router;
