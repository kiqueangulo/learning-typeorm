import { NotFound } from "http-errors"

import database from "../config/database"
import { DatabaseRepository, Id, Query } from "../types"
import { Task } from "../entity/Task"

export class TaskRepository implements DatabaseRepository<Task> {
  async create(
    data: Pick<Task, "title" | "description">,
    query?: Query | undefined
  ): Promise<Task> {
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

    if (!task) throw new NotFound("Task does not exist")

    return task
  }

  async update(id: Id, data: Task, query?: Query | undefined): Promise<Task> {
    const repository = database.getRepository(Task)

    await repository.update(id, data)

    return this.get(id, query)
  }

  async remove(id: Id, query?: Query | undefined): Promise<Task> {
    const repository = database.getRepository(Task)

    const task = await this.get(id, query)

    await repository.delete(task.id)

    return task
  }
}
