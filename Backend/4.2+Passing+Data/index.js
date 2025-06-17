import express from "express";
import bodyParser from "body-parser";
import res from "express/lib/response.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

res.locals = {title: "Enter your name below 👇"}

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  let total = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {title: `There are ${total} letters in your name`});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
