const express = require("express");
const { connect } = require("./db/config");
const { Router } = require("./Routes/routes");

const cors = require("cors");

const app = express();

connect();

app.use(cors());

app.use(express.json());

app.use("/", Router);

app.listen(4000, () => {
  console.log("Connected at", 4000);
});
