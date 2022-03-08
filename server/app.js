// import all app dependencies


const dotenv = require("dotenv")
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")



const app = express();

dotenv.config({ path: "./config.env" });
require('./db/conn');

app.get("/", (req, res)=>{
    res.send("hello world");
})




//run server
app.listen(3001, ()=>{
    console.log("server is listening")
})