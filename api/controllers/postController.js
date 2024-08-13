const Post = require('../models/postModel')
const asyncHandler = require("express-async-handler");

const createPost = asyncHandler(async (req, res) => {
    const {title, description, content, image, author} = req.body;

    const post = await Post.create({
        title,
        description,
        content,
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

module.exports ={
    createPost
}