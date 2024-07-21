const express = require("express");
const { registerUser, loginUser, getUser, loginStatus, logoutUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/loginStatus", loginStatus);
router.post("/logoutUser", logoutUser);

router.post("/getUser", getUser);

module.exports = router;