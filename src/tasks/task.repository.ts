import database from "../config/database"

import { DatabaseRepository, Id, Query } from "../types"
import { Task } from "../entity/Task"

export class TaskRepository implements DatabaseRepository<Task> {
  async create(data: Partial<Task>, query?: Query | undefined): Promise<Task> {
    const repository = database.getRepository(Task)

    const task = repository.create(data)

    await repository.save(task)

    return task
  }

  async list(query?: Query | undefined): Promise<Task[]> {
    const repository = database.getRepository(Task)

    return repository.find()
  }

  async get(id: Id, query?: Query | undefined): Promise<Task> {
    const repository = database.getRepository(Task)

    const task = await repository.findOneBy({ id })

    if (!task) throw new Error("Task does not exist")

    return task
  }

  update(id: Id, data: Task, query?: Query | undefined): Promise<Task> {
    throw new Error("Method not implemented.")
  }

  remove(id: Id, query?: Query | undefined): Promise<Task> {
    throw new Error("Method not implemented.")
  }
}
