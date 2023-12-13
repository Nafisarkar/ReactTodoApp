const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

const ATLAS_URI =
  "mongodb+srv://sarkarnafe:N6D6mlJRLd3u2leM@cluster0.8dja6or.mongodb.net/?retryWrites=true&w=majority/Curd";

mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  age: Number
});

const UserModel = mongoose.model("users", UserSchema);


app.get("/getTodos", (req, res) => {
  UserModel.find({}).then(function (users) {
    res.json(users);
  }).catch(function (err) {
    console.log(err);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
