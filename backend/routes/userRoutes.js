import express from "express";
import User from "../models/userModel.js";
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
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      const token = jwt.sign({ email, role: "user" }, process.env.SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});
export default router;
