const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: { type: String },
    created_at: { type: Date, default: Date.now }, // Explicitly added field
    updated_at: { type: Date, default: Date.now }, // Explicitly added field
    views: { type: Number, default: 0 },
    comment_total: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
  },
  { timestamps: false }
); // Disable automatic timestamps

// Ensure `updated_at` is updated automatically
postSchema.pre("save", function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();
  }
  next();
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
