require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const router = require("./routes/route.js");

//connect to mongodb
mongoose.connect(process.env.DATABASE_URL);
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const db = mongoose.connection;
db.on("error", (error) => console.error("db error", error));
db.once("open", () => console.log("Connected to Database"));

// Allows us to access a user's token stored as a cookie
app.use(cookieParser());

// Allows us to send and receive json files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Lets the server listen on all files
app.use("/api/v1", router);

// Define a health check route that responds with a 200 status code
app.get("/api/v1/health", (req, res) => {
  res.status(200).json("Relax, brov. Everything is alright..");
});

// const bondusersRouter = require("./routes/users");
// app.use("/users", bondusersRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Bond app listening on port ${process.env.PORT}`);
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//npm init
//npm i express mongoose
// npm i --save-dev dotenv nodemon
//nodemon server.js
////////////////////////////////////////////////////////////////
//first dependency is express
//second is mongoose for easy interaction with mongodb
// then dotenv to draw environment variables from .env files
// then nodemon for live refresh and updating server, update the scripts field in package.json to use nodemon
// create .env and  .gitignore and ignore env,nodemodules etc
// initialise mongoose, mongoose connect
// define the db.on and db.once
// connect dotenv file and remove any raw url in the code
//db done, server done, lets create route for our server and make our server accept json
//create the routes folder and a file for your intended router(users.js)
//model app.use to suit the above route
