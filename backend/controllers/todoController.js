const ToDo = require("../models/todoSchema");

exports.createTodo = async (req, res) => {
  try {
    let todo = new ToDo(req.body);
    await todo.save();
    res.json({
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};

exports.getAllTodo = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await ToDo.
    findById(req.params.id);
    res.json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};

exports.deleteTodoById = async (req, res) => {
  try {
    const todo = await ToDo.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};

exports.updateTodoById = async (req, res) => {
  try {
    const todo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};
