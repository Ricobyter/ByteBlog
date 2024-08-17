const Post = require('../models/postModel')
const asyncHandler = require("express-async-handler");

const createPost = asyncHandler(async (req, res) => {
    const {title, description, content, category, image, author} = req.body;

    const post = await Post.create({
        title,
        description,
        content,
        category,
        image,
        author
    })

    if(post){
        res.status(201).json(post)
    } else {
        res.status(400)
        throw new Error('Invalid post data')
    }
});

const getPostById = asyncHandler(async (req, res) => {
    const { postId } = req.body; // Extract postId from req.body

    if (!postId) {
        res.status(400);
        throw new Error('Post ID is required');
    }

    const post = await Post.findById(postId).populate('author', 'name photo bio');;

    if (post) {
      post.views = (post.views || 0) + 1;

      await post.save();

        res.status(200).json(post);
    } else {
        res.status(404);
        throw new Error('Post not found');
    }
});


const getAllPosts = asyncHandler(async (req, res) => {
    try {
      const posts = await Post.find({})
        .populate({
          path: 'author', // The path corresponds to the `author` field in your Post model
          select: 'name' // Fetch only the name of the author
        })
        .sort({ created_at: -1 }); // Sort by most recent posts first
  
      res.status(200).json(posts);
    } catch (error) {
      res.status(500);
      throw new Error('Error fetching posts');
    }
  });

  const getAuthorPosts = asyncHandler(async (req, res) => {
    const {authorId} = req.body;

    if (!authorId) {
        res.status(400);
        throw new Error('Author ID is required');
    }

    const posts = await Post.find({author: authorId}).populate('author', 'name photo bio');

    if (posts) {
        res.status(200).json(posts);
    } else {
        res.status(404);
        throw new Error('Posts not found');
    }
  });


module.exports ={
    createPost,
    getPostById,
    getAllPosts,
    getAuthorPosts
}