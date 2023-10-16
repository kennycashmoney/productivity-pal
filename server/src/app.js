const express = require("express");
const path = require("path");

const morgan = require("morgan");

const habitsRouter = require('./routes/habits.router')

const app = express();

app.use(morgan("combined"));

app.use(express.json()); // parse json from body of incoming requests
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(habitsRouter);

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});


module.exports = app;
