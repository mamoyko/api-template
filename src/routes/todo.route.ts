import express from "express";
const router = express.Router();

import TodoCtrl from "../controllers/todo.controller";

router.post("/", TodoCtrl.createTask);
router.put("/", TodoCtrl.update);
router.delete("/", TodoCtrl.delete);

export default router;
