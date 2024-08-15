const express = require("express");

const router = express.Router();

const {createPost, getPostById, getAllPosts} = require('../controllers/postController')

router.post('/create', createPost)

router.post('/getPost', getPostById)

router.get('/posts', getAllPosts)


module.exports = router;