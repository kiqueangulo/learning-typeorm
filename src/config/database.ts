import { DataSource } from "typeorm"

import credentials from "../env.local"
import { Task } from "../entity/Task"

export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: credentials.DATABASE_USERNAME || "",
  password: credentials.DATABASE_PASSWORD! || "",
  database: credentials.DATABASE_NAME || "",
  entities: [Task],
  synchronize: true,
  logging: false,
})
