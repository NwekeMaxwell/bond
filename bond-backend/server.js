require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error("db error", error));
db.once("open", () => console.log("Connected to Database"));

app.listen(port, () => {
  console.log(`Bond app listening on port ${port}`);
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
