import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let newTitle = [];
let newContent = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()); // Make sure this middleware is included


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) =>{
  newTitle.push(req.body["title"]);
  newContent.push(req.body["content"]);
  res.render("index.ejs", {titles: newTitle, contents: newContent})
});

// <-- ChatGPT code
app.put('/update/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const { title, content } = req.body;

  if (itemId >= 0 && itemId < newTitle.length) {
    newTitle[itemId] = title;
    newContent[itemId] = content;
    res.sendStatus(200);
  } else {
    res.status(404).send('Item not found');
  }
});


app.delete('/delete/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);

  // Check if index is valid
  if (itemId >= 0 && itemId < newTitle.length) {
    // Remove the item from both arrays
    newTitle.splice(itemId, 1);
    newContent.splice(itemId, 1);

    res.sendStatus(200); // Success
  } else {
    res.status(404).send('Item not found');
  }
});
// ----------- >


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});