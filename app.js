const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Component/index.html")
})

app.listen(9212 , function () {
    console.log("server worked on 9212 port");
})