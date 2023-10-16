const http = require("http");
// const mongoose = require("mongoose");

const app = require("./app");

// const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 3000;

// const MONGO_URL =
//   "mongodb+srv://nasa-api:eEp1ldxjyPXAc1F2@cluster0.sacwqlo.mongodb.net/nasa";

const server = http.createServer(app);

// mongoose.connection.once('open', () => {
//   console.log('MongoDB connection ready!');
// });

// mongoose.connection.on('error', (error) => {
//   console.error(error);
// })

async function startServer() {
//   await mongoose.connect(MONGO_URL);
//   await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
