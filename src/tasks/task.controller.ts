import { Request, Response, NextFunction } from "express"

export class TaskController {
  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({ message: "Tasks from controller" })
  }
}
