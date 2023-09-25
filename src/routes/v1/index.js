import express from "express";

import { createTodo } from "../../controllers/to_do-controller.js";
import { signup, getWithToDo } from "../../controllers/user-controller.js";

const router = express.Router();

// user
router.post("/signup", signup);
router.post("/getWithTodos", getWithToDo);

// todo
router.post("/todos", createTodo);

export default router;
