import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  mainContent: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  saves: {
    type: Number,
    default: 0,
  },
  photos: [
    {
      url: {
        type: String,
       
      },
      caption: {
        type: String,
      },
    },
  ],
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
},
{ timestamps: true }
);

export default  mongoose.model('Post', postSchema);


