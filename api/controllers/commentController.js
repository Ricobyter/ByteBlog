const Comment = require('../models/commentModel'); 
const asyncHandler = require("express-async-handler");


// Function to create a comment
const createComment = asyncHandler(async (req, res) => {
  const { content, postId, userId } = req.body;

  // Validate required fields
  if (!content || !postId || !userId) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  // Create the new comment
  const comment = await Comment.create({
    content,
    postId,
    userId,
  });

  if (comment) {
    res.status(201).json(comment);
  } else {
    res.status(400);
    throw new Error('Invalid comment data');
  }
});

module.exports ={
  createComment
}

// Function to add a reply
// const addReply = asyncHandler(async (parentCommentId, replyContent, userId, postId) => {
//   // Create the reply comment
//   const reply = new Comment({
//     content: replyContent,
//     postId: postId,
//     userId: userId,
//   });
//   await reply.save();

//   // Update the parent comment to include the reply
//   const parentComment = await Comment.findById(parentCommentId);
//   if (!parentComment) {
//     throw new Error('Parent comment not found');
//   }
  
//   parentComment.replies.push(reply._id);
//   await parentComment.save();

//   // Return a success response
//   return { message: 'Reply added successfully' };
// });

// export default addReply;
