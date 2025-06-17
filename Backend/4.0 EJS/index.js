import express from "express";

const app = express();
const port = 3000;

let message = "";

function dailyMessage(req, res, next) {
    let date = new Date();
    let day = date.getDay();

    if (day === 0 || day === 6) {
        message = "Hey! It's the weekend, it's time to have fun!"
    } else {
        message = "Hey It's a weekday, it's time to work hard!"
    }
    next();
}

app.use(dailyMessage)

app.get("/", (req, res) => {
    res.render("index.ejs", {message});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});