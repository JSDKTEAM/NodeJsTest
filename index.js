const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


let port = process.env.port | 3000;
let resMessage = process.env.message | "Hello World";
let path = process.env.path | '/';



app.get("/proxy1", (req, res) => {
    res.send("proxy1");
});

app.listen(3000, () => {
    console.log('Start server at port ' + "3000");
});