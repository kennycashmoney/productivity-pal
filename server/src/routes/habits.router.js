const express = require('express');

// const { Todo } = require('../models');


const habitsRouter = express.Router();

habitsRouter.post('/habits', (req, res) => res.send('postit!'));


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


// /* POST create todo */
// router.post('/createTodo', asyncHandler(async (req, res) => {
//     const { title } = req.body;
//     const newTodo = await Todo.create({title, completed: false});
//     res.status(201).send(newTodo);
// }));

// /* GET all todos */
// router.get('/getTodos', asyncHandler(async (req, res) => {
//     const todos = await Todo.findAll();
//     res.send(todos);
// }));

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

module.exports = habitsRouter;