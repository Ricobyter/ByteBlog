const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
var parser = require("ua-parser-js");
const { generateToken } = require("../utils");
const Token = require("../models/tokenModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //?Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  //?Check the password length
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be atleast 6 characters long");
  }

  //?Check if the user already exists
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  //* Getting user agent
  const ua = parser(req.headers["user-agent"]);
  const userAgent = [ua.ua];

  //* Creating User
  const user = await User.create({
    name,
    email,
    password,
    userAgent,
  });

  //? Generate Token
  const token = generateToken(user._id);

  //? Send http only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), //* One day
    secure: true,
    sameSite: "none",
  });

  if (user) {
    const { _id, name, email, password, phone, bio, photo, isVerified } = user;

    res.status(201).json({
      _id,
      name,
      email,
      password,
      phone,
      bio,
      photo,
      isVerified,
      token,
    });
  } else {
    res.status(400);
    throw new Error("error regestering user");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //   Validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found, please signup");
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  // Trgger 2FA for unknow UserAgent
  // const ua = parser(req.headers["user-agent"]);
  // const thisUserAgent = ua.ua;
  // console.log(thisUserAgent);
  // const allowedAgent = user.userAgent.includes(thisUserAgent);

  // if (!allowedAgent) {
  //   // Genrate 6 digit code
  //   const loginCode = Math.floor(100000 + Math.random() * 900000);
  //   console.log(loginCode);

  //   // Encrypt login code before saving to DB
  //   const encryptedLoginCode = cryptr.encrypt(loginCode.toString());

  //   // Delete Token if it exists in DB
  //   let userToken = await Token.findOne({ userId: user._id });
  //   if (userToken) {
  //     await userToken.deleteOne();
  //   }

  //   // Save Tokrn to DB
  //   await new Token({
  //     userId: user._id,
  //     lToken: encryptedLoginCode,
  //     createdAt: Date.now(),
  //     expiresAt: Date.now() + 60 * (60 * 1000), // 60mins
  //   }).save();

  //   res.status(400);
  //   throw new Error("New browser or device detected");
  // }

  // Generate Token
  const token = generateToken(user._id);

  if (user && passwordIsCorrect) {
    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });

    const { _id, name, email, phone, bio, photo, role, isVerified } = user;

    res.status(200).json({
      _id,
      name,
      email,
      phone,
      bio,
      photo,
      role,
      isVerified,
      token,
    });
  } else {
    res.status(500);
    throw new Error("Something went wrong, please try again");
  }
});

//? Logout
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), //* One day
    secure: true,
    sameSite: "none",
  });
  //? To logout, we just expire the cookie

  res.status(200).json({ message: "Logged out successfully" });
});

//Login status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    res.json(false);
  }

  //?Verify Token
  const verified = jwt.verify(token, process.env.JWT_SECRET);

  if (verified) {
    res.json(true);
  }
  res.json(false);
});

//? Get user
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  //? This is becuase we are getting the value of user as req.user in protect middleware]

  if (user) {
    // const { _id, name, email, password, phone, bio, photo, isVerified } = user;
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  loginStatus,
  getUser,
};
