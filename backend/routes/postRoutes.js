import mongoose from "mongoose";
import express from "express";
import User from "../models/userModel.js";
import Post from "../models/Post.js";
import { authenticateJwt } from "../middleware/auth.js";
import "dotenv/config";
const router = express.Router();


router.put("/PostBlog/:PostId", authenticateJwt, async (req, res) => {
  const { PostId } = req.params;

  if (!PostId || !mongoose.Types.ObjectId.isValid(PostId)) {
    return res.status(400).json({ error: "Invalid PostId" });
  }

  try {
    const post = await Post.findOneAndUpdate(
      { _id: PostId }, // Provide the filter object
      req.body,
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.json({ post });
  } catch (err) {
    console.error("Error fetching post:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/PostBlog", async (req, res) => {
  try {
    const posts = await Post.find({});

    return res.json({ posts });
  } catch (err) {
    console.error("Error fetching posts:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/PostBlog/:PostId", authenticateJwt, async (req, res) => {
  const { PostId } = req.params;

  try {
    const post = await Post.findById(PostId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    return res.json({ post });
  } catch (err) {
    console.error("Error fetching post:", err);
    return res.status(500).json({ error: "Internal server error" });
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
        user.likedPosts.push(req.params.PostId);
      } else if (!liked && alreadyLiked) {
        post.likes = post.likes.filter((like) => !like.equals(userId));
        user.likedPosts = user.likedPosts.filter(
          (postId) => !postId.equals(req.params.PostId)
        );
      }

      await post.save();
      await user.save();

      return res.json({
        likes: post.likes.length,
        user: user.likedPosts.length,
      });
    } catch (err) {
      console.error("Error updating likes:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);
router.patch(
  "/PostBlog/:PostId/UpdateSaves",
  authenticateJwt,
  async (req, res) => {
    const { saved } = req.body;

    try {
      const post = await Post.findById(req.params.PostId);
      const user = await User.findOne({ username: req.user.username });

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      const userId = user._id;

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      console.log(userId);
      if (!post.saves) {
        post.saves = [];
      }

      const alreadySaved = post.saves.includes(userId);

      if (saved && !alreadySaved) {
        post.saves.push(userId);
        user.savedPosts.push(req.params.PostId);
      } else if (!saved && alreadySaved) {
        post.saves = post.saves.filter((save) => !save.equals(userId));
        user.savedPosts = user.savedPosts.filter(
          (postId) => !postId.equals(req.params.PostId)
        );
      }

      await post.save();
      await user.save();

      return res.json({
        saves: post.saves.length,
        user: user.savedPosts.length,
      });
    } catch (err) {
      console.error("Error updating likes:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);
export default router;
