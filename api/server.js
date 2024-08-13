require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// app
const app = express();

//? routes
const userRoute = require("./routes/userRoutes")
const postRoute = require("./routes/postRoutes")
const commentRoute = require("./routes/commentRoutes")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(
    cors({
        origin: ["http://localhost:5173", "https://auth-app-two-lime.vercel.app"],
        credentials: true,
    })
)


//?route setting
app.use("/api/users", userRoute)
app.use("/api/post", postRoute)
app.use("/api/comment", commentRoute)
// app.use("/api/post", userRoute)

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

