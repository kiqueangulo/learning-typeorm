import express from "express"

import TaskRoutes from "./tasks/task.routes"

const app = express()

app.use("/api", TaskRoutes)

app.listen(3030, () => console.log("App running on port: 3030"))
