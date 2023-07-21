import express from "express";
import User from "../models/userModel.js";
import Post from "../models/Post.js";
import { authenticateJwt } from "../middleware/auth.js";
import "dotenv/config";
const router = express.Router();
import jwt from "jsonwebtoken";

router.put("/PostBlog/:PostId?", authenticateJwt, async (req, res) => {
    const { PostId } = req.params;
    
    if (PostId) {
      
      try {
        const post = await Post.findByIdAndUpdate(PostId,req.body,{
            new:true,
        });
        if (!post) {
          return res.status(404).json({ error: "Post not found" });
        }
        return res.json({ post });
      } catch (err) {
        console.error("Error fetching post:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
    } else {
     
      try {
        const posts = await Post.find({});
        return res.json({ posts });
      } catch (err) {
        console.error("Error fetching posts:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  });

router.patch(
  "/PostBlog/:PostId/UpdateLike",
  authenticateJwt,
  async (req, res) => {
    const { liked } = req.body;

    try {
      const post = await Post.findById(req.params.PostId);
      const user = await User.findOne({ username: req.user.username });
    

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      const userId = user._id;
      
      if (!post.likes) {
        post.likes = [];
      }

      const alreadyLiked = post.likes.includes(userId);

      if (liked && !alreadyLiked) {
        post.likes.push(userId);
      } else if (!liked && alreadyLiked) {
        post.likes = post.likes.filter((like) => !like.equals(userId));
      }

      await post.save();

      return res.json({ likes: post.likes.length });
    } catch (err) {
      console.error("Error updating likes:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);


export default router;
