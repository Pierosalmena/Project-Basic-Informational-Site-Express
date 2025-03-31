const express = require("express");
const app = express();
const path = require('path')


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get("/contact-me", (req, res) => {
    res.sendFile(__dirname + '/contact-me.html');
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

app.use(function (req, res) {
    res.status(404).sendFile(__dirname + "/404.html")
  })


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
