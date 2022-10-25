import { Request, Response, NextFunction } from "express"

import { DatabaseRepository } from "../types"
import { Task } from "../entity/Task"

export class TaskController {
  constructor(private repository: DatabaseRepository<Task>) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const task = await this.repository.create(req.body)

      res.status(201).json(task)
    } catch (error) {
      next(error)
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tasks = await this.repository.list()

      res.status(200).json(tasks)
    } catch (error) {
      next(error)
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const task = await this.repository.get(Number(req.params.taskId))

      res.status(200).json(task)
    } catch (error) {
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({ message: "Update task" })
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({ message: "Remove task" })
  }
}
