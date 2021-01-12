import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;
const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
    },
    feeling: {
      type: String,
      default: null,
    },
    pic: {
      type: String,
      default: null,
    },
    likes: [{ type: ObjectId, ref: "User" }],
    comments: [
      {
        type: String,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
