import express from "express";

import { createTodo } from "../../controllers/to_do-controller.js";
import {
  signup,
  getWithToDo,
  signin,
} from "../../controllers/user-controller.js";
import { isAuthenticated } from "../../middlewares/isAuthenticated.js";

const router = express.Router();

// user
router.post("/signup", signup);
router.post("/getWithTodos", getWithToDo);
router.post("/signin", signin);
// todo
router.post("/todos", isAuthenticated, createTodo);

export default router;
