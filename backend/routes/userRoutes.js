import express from "express";
import bcrypt from "bcrypt"
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
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword});
      await newUser.save();
      const token = jwt.sign({ username, role: "user" }, process.env.SECRET, {
        expiresIn: "5h",
      });
      res.json({ message: "User Created SuccessFully", token,username });
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});
router.post("/Login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username});
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Passwords match, generate and send the JWT token
        const token = jwt.sign({ username, role: "user" }, process.env.SECRET, {
          expiresIn: "1h",
        });
        res.json({ message: "Logged in successfully", token ,username});
      } else {
        // Passwords do not match
        res.status(403).json({ message: "Invalid username or password" });
      }
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
    const user = await User.findOne({ username});
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const userId = user._id;
    if (!user.publishedPost) {
      user.publishedPost = [];
    }
    user.publishedPost.push(userId);
    await user.save();
   
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

router.get("/:username", async (req,res)=>{
  const {username}=req.params;
  const user = await User.findOne({ username})
  
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(user);
})
export default router;
