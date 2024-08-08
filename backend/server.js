const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRouter = require('./routes/todoRoutes')

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/todo")
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Error!");
  });

app.use('/api',todoRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
