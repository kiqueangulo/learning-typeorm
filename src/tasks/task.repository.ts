import { DatabaseRepository, Id, Query } from "../types"
import { Task } from "../entity/Task"

export class TaskRepository implements DatabaseRepository<Task> {
  create(data: Partial<Task>, query?: Query | undefined): Promise<Task> {
    throw new Error("Method not implemented.")
  }

  list(query?: Query | undefined): Promise<Task[]> {
    throw new Error("Method not implemented.")
  }

  get(id: Id, query?: Query | undefined): Promise<Task> {
    throw new Error("Method not implemented.")
  }

  update(id: Id, data: Task, query?: Query | undefined): Promise<Task> {
    throw new Error("Method not implemented.")
  }

  remove(id: Id, query?: Query | undefined): Promise<Task> {
    throw new Error("Method not implemented.")
  }
}
