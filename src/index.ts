import express from "express"
import "reflect-metadata"

import TaskRoutes from "./tasks/task.routes"

const app = express()

app.use("/api", TaskRoutes)

app.listen(4040, () => console.log("App running on port: 4040"))
