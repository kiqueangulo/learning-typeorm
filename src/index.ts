import express from "express"
import "reflect-metadata"

import database from "./config/database"
import TaskRoutes from "./tasks/task.routes"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

database
  .initialize()
  .then(() => console.log("Database connected"))
  .catch(error => console.error(error))

app.use("/api", TaskRoutes)

app.listen(4040, () => console.log("App running on port: 4040"))
