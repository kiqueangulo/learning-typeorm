import { Router } from "express"

import { TaskController } from "./task.controller"

const router = Router()

const controller = new TaskController()

router.get("/tasks", controller.list)

export default router
