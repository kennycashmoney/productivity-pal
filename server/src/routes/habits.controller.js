const { createNewHabit, getAllHabits } = require("../models/habits.model");

async function httpCreateHabit(req, res) {
  const habit = req.body;

  if (!habit.title) {
    return res.status(400).json({ error: "Missing required title property" });
  }

  try {
    await createNewHabit(habit);
  } catch (error) {
    return res.status(500).json({ error: `something went wrong... ${error}` });
  }
  return res.status(201).json(habit);
}

async function httpGetAllHabits(_req, res) {
  return res.status(200).json(await getAllHabits());
}

function httpUpdateHabit(req, res) {
  res.json({TODO: "update a habit"});
}

// /* PUT update a todo */
// router.put('/updateTodo/:id', asyncHandler(async (req, res) => {
//     const todo = await Todo.findByPk(req.params.id);
//     if (todo) {
//         await todo.update(req.body);
//         res.sendStatus(204);
//     } else {
//         res.sendStatus(404);
//     }
// }));


function httpDeleteHabit(req, res) {
  res.json({TODO: "delete a habit"});
}

/** this is probably a good idea
 * remember to get a 4 param middleware somewhere in here
 */
// /** DELETE a todo */
// router.delete('/deleteTodo/:id', asyncHandler(async (req, res) => {
//     const todo = await Todo.findByPk(req.params.id);
//     if (todo) {
//         await todo.destroy();
//         res.sendStatus(200);
//     } else {
//         res.sendStatus(404);
//     }
// }));

module.exports = {
  httpCreateHabit,
  httpGetAllHabits,
  httpUpdateHabit,
  httpDeleteHabit,
};

// TODO: figure out if you're going to keep this or delete it...
// /* Handler function to wrap each route  */
// function asyncHandler(cb) {
//     return async(req, res, next) => {
//         try {
//             await cb(req, res, next);
//         } catch(error) {
//             next(error);  // Forward to the global error handler
//         }
//     }
// }
