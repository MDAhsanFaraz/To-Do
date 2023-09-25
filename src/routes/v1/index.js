import express from "express";

import { createTodo } from "../../controllers/to_do-controller.js";
import { signup } from "../../controllers/user-controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/todos", createTodo);

export default router;
