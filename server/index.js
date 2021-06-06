var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();
var user = require("./routes/user");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use("/user", user);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("server is running on port", port);
});
