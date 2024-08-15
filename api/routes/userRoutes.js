const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  loginStatus,
  logoutUser,
  getUserById
} = require("../controllers/userController");

const router = express.Router();

// User registration
router.post("/register", registerUser);

// User login
router.post("/login", loginUser);

// Check login status
router.get("/loginStatus", loginStatus);

// User logout
router.post("/logout", logoutUser);

// Get user details
router.get("/getUser", getUser);

router.get("/:userId", getUserById);

module.exports = router;
