const express = require("express");

const router = express.Router();

const {createComment, getCommentsByPostId} = require('../controllers/commentController')

router.post('/create', createComment)
router.post('/getPostComments', getCommentsByPostId)

module.exports = router;