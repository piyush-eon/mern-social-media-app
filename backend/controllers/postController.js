import Post from "../models/postModel.js";
import asyncHandler from "express-async-handler";

//@description     Create new Post
//@route           POST /api/post/create
//@access          Private
const createPost = asyncHandler(async (req, res) => {
  const { caption, pic, feeling } = req.body;

  if (!caption) {
    return res.status(422).json({ error: "Please add all the feilds" });
  }

  const post = await Post.create({
    caption,
    pic,
    feeling,
    postedBy: req.user,
  });

  if (post) res.status(201).json(post);
  else {
    res.status(400);
    throw new Error("Post not Found");
  }
});

export { createPost };
