const express = require("express");
// const path = require("path");

// const cors = require("cors");
// const morgan = require("morgan");

// const planetsRouter = require("./routes/planets/planets.router");
// const launchesRouter = require("./routes/launches/launches.router");
const habitsRouter = require('./routes/habits.router')

const app = express();

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(morgan("combined"));

app.use(express.json()); // parse json from body of incoming requests
// app.use(express.static(path.join(__dirname, "..", "public")));
app.use(habitsRouter);

// app.use("/planets", planetsRouter);
// app.use("/launches", launchesRouter);

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });


module.exports = app;
