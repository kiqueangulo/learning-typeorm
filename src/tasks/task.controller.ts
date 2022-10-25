import { Request, Response, NextFunction } from "express"

import { DatabaseRepository } from "../types"
import { Task } from "../entity/Task"

export class TaskController {
  constructor(private repository: DatabaseRepository<Task>) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({ message: "Create task" })
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({ message: "List task" })
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({ message: "Get task" })
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({ message: "Update task" })
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({ message: "Remove task" })
  }
}
