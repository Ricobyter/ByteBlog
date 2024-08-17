const express = require("express");

const router = express.Router();

const {
  createPost,
  getPostById,
  getAllPosts,
  getAuthorPosts,
} = require("../controllers/postController");

router.post("/create", createPost);

router.post("/getPost", getPostById);

router.get("/posts", getAllPosts);

router.post("./getAuthorPosts", getAuthorPosts);

module.exports = router;
