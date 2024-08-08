const express = require("express");
const {
  createTodo,
  getAllTodo,
  getTodoById,
  deleteTodoById,
  updateTodoById,
} = require("../controllers/todoController");

const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/get-all-todos", getAllTodo);
router.get("/get-todo-by-id/:id", getTodoById);
router.delete("/remove-todo/:id", deleteTodoById);
router.patch("/update-todo-by-id/:id", updateTodoById);

module.exports = router;
