import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>Contact</h2><hr/><p>52866******</p>");
});

app.get("/about", (req, res) => {
   res.send("<p>Gerardo Jimenez<br/>Mexico</p>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});