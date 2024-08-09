const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1720130733~exp=1720131333~hmac=7ec8e1f524b3a4f34e86626afcdf8cbcbeb06f311720027ee3b0f68472e0fcd1",
    },
    bio: {
      type: String,
      default: "bio",
    },
    role: {
      type: String,
      required: true,
      default: "subscriber",
      // subscriber, author, admin, and suspended
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin : {
      type: Boolean,
      default: false,
    },
    userAgent: {
      type: Array,
      required: false,
      default: [],
    },
    readingList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post', // Assuming Post is the model for your blog posts
      }
    ],
  },
  { timestamps: true, minimize: false }
);

// Encrypt password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
