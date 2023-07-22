import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    mainContent: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
   
    saves: {
      type: Number,
      default: 0,
    },
    photos: {
      type: String,
      default: "",
     
    },
    comments: [
      {
        user: {
          type: String,
        },
        content: {
          type: String,
        },
      },
    ],
    creator: {
      username: {
        type: String,
        required: true,
      },

  
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
