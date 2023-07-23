import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the username"],
      unique: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    picturePath: {
      type: String,
      default: "",
    },
    publishedPost:[{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
