const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello from server");
});

app.post("/enroll", function (req, res) {
  console.log(req.body);
  res.status(200).send({ message: "Data recieved" });
});

let port = process.env.PORT | 3000;

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
