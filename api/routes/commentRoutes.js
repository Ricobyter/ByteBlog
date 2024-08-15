const express = require("express");

const router = express.Router();

const {createComment, getCommentsByPostId} = require('../controllers/commentController')

router.post('/create', createComment)
router.get('/:postId', getCommentsByPostId)

module.exports = router;