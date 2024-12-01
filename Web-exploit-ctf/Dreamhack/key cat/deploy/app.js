const express = require("express");
const cookieParser = require("cookie-parser");
const path = require('path');
const fs = require("fs");
var jwt = require('jsonwebtoken');
const router_index = require("./routes/index")
const router_cat = require("./routes/cat")

const app = express();

const PORT = 3000;

app.set('views', path.join(__dirname, '/static/views'));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(__dirname + "/static"))

app.use("/", router_index)
app.use("/cat", router_cat)



app.listen(PORT, () => {
    console.log("Start")
})