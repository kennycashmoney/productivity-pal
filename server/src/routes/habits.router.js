const express = require("express");

const {
  httpCreateHabit,
  httpGetAllHabits,
  httpUpdateHabit,
  httpDeleteHabit,
} = require("./habits.controller");

const habitsRouter = express.Router();

habitsRouter.get("/habits", httpGetAllHabits);
habitsRouter.post("/habits", httpCreateHabit);
habitsRouter.put("/habits/:id", httpUpdateHabit);
habitsRouter.delete("/habits/:id", httpDeleteHabit);

module.exports = habitsRouter;
