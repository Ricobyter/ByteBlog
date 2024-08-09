import Comment from '../models/commentModel'; 
const asyncHandler = require("express-async-handler");

// Function to add a reply
const addReply = asyncHandler(async (parentCommentId, replyContent, userId, postId) => {
  // Create the reply comment
  const reply = new Comment({
    content: replyContent,
    postId: postId,
    userId: userId,
  });
  await reply.save();

  // Update the parent comment to include the reply
  const parentComment = await Comment.findById(parentCommentId);
  if (!parentComment) {
    throw new Error('Parent comment not found');
  }
  
  parentComment.replies.push(reply._id);
  await parentComment.save();

  // Return a success response
  return { message: 'Reply added successfully' };
});

export default addReply;
