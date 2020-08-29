import "reflect-metadata";
import sqllite3 from 'sqllite3'
import { createConnection } from "typeorm";

// Option 2: Passing parameters separately (sqlite)
export default sqliteClient = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "poketrade_app",
    entities: [
        "../**/*.entity.ts"
    ],
    migrations: [
        "migration/*.js"
    ],
    synchronize: true,
    logging: true
    // subscribers: [
    //     "subscriber/*.js"
    // ],
    // entitySchemas: [
    //     "schema/*.json"
    // ],
    // cli: {
    //     entitiesDir: "entity",
    //     migrationsDir: "migration",
    //     subscribersDir: "subscriber"
    // }
})